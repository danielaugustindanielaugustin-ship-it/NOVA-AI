from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from http.cookies import SimpleCookie
from pathlib import Path
from urllib.parse import unquote, urlparse
import base64
import hashlib
import hmac
import json
import mimetypes
import os
import secrets
import sqlite3
import time


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "secure_nova_database.sqlite"
PORT = int(os.environ.get("PORT", "3000"))
SESSION_TTL_SECONDS = 60 * 60 * 24 * 7

PLANS = {
    "Free": {"name": "Free", "limit": 100, "price": 0},
    "Pro": {"name": "Pro", "limit": 1000, "price": 19},
    "Ultra": {"name": "Ultra", "limit": 5000, "price": 49},
}

TIPS = [
    "Add saved projects so each chat, image, and voice result stays together.",
    "Create prompt presets for coding, business, Tamil translation, study, and design.",
    "Add a real image/video model worker when you are ready for production generation.",
    "Protect paid routes with login sessions before enabling real billing.",
]


def connect_db():
    DATA_DIR.mkdir(exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 5000")
    conn.execute("PRAGMA temp_store = MEMORY")
    return conn


def init_db():
    with connect_db() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL UNIQUE,
              handle TEXT NOT NULL,
              bio TEXT NOT NULL,
              password_hash TEXT NOT NULL,
              salt TEXT NOT NULL,
              plan TEXT NOT NULL DEFAULT 'Pro',
              created_at INTEGER NOT NULL,
              updated_at INTEGER NOT NULL
            );

            CREATE TABLE IF NOT EXISTS sessions (
              token TEXT PRIMARY KEY,
              user_id INTEGER NOT NULL,
              expires_at INTEGER NOT NULL,
              created_at INTEGER NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS settings (
              user_id INTEGER PRIMARY KEY,
              streaming INTEGER NOT NULL DEFAULT 1,
              memory INTEGER NOT NULL DEFAULT 1,
              tamil INTEGER NOT NULL DEFAULT 0,
              notifications INTEGER NOT NULL DEFAULT 1,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS usage (
              user_id INTEGER PRIMARY KEY,
              requests INTEGER NOT NULL DEFAULT 847,
              messages INTEGER NOT NULL DEFAULT 1247,
              images INTEGER NOT NULL DEFAULT 89,
              contacts INTEGER NOT NULL DEFAULT 0,
              days_active INTEGER NOT NULL DEFAULT 142,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS activities (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              type TEXT NOT NULL,
              detail TEXT NOT NULL,
              created_at INTEGER NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS chats (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              prompt TEXT NOT NULL,
              answer TEXT NOT NULL,
              created_at INTEGER NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS images (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              prompt TEXT NOT NULL,
              style TEXT NOT NULL,
              enhanced_prompt TEXT NOT NULL,
              created_at INTEGER NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS contacts (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              message TEXT NOT NULL,
              ticket_id TEXT NOT NULL UNIQUE,
              created_at INTEGER NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
            """
        )
        user = conn.execute("SELECT id FROM users WHERE email = ?", ("creator@novamind.ai",)).fetchone()
        if user is None:
            now = int(time.time())
            salt, password_hash = hash_password("nova-demo-password")
            cursor = conn.execute(
                """
                INSERT INTO users (name, email, handle, bio, password_hash, salt, plan, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    "User Creator",
                    "creator@novamind.ai",
                    "@nova-user",
                    "AI enthusiast and developer",
                    password_hash,
                    salt,
                    "Pro",
                    now,
                    now,
                ),
            )
            user_id = cursor.lastrowid
            conn.execute("INSERT INTO settings (user_id) VALUES (?)", (user_id,))
            conn.execute("INSERT INTO usage (user_id) VALUES (?)", (user_id,))


class NovaHandler(SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_text("", 204, "text/plain; charset=utf-8")

    def do_GET(self):
        path = urlparse(self.path).path
        try:
            if path == "/api/health":
                return self.send_json({"ok": True, "app": "Combined NOVA AI SQLite backend", "port": PORT, "database": str(DB_PATH.name)})
            if path == "/api/bootstrap":
                user_id = self.current_user_id()
                return self.send_json(get_bootstrap(user_id))
            if path == "/api/dashboard-tip":
                return self.send_json({"tip": TIPS[secrets.randbelow(len(TIPS))]})
            return self.serve_static(path)
        except Exception as exc:
            print(exc)
            return self.send_json({"error": "Server error."}, 500)

    def do_POST(self):
        path = urlparse(self.path).path
        try:
            body = self.read_json()
            user_id = self.current_user_id()

            if path == "/api/chat":
                prompt = clean_text(body.get("prompt", ""), 4000)
                answer = generate_chat_answer(prompt)
                with connect_db() as conn:
                    conn.execute("INSERT INTO chats (user_id, prompt, answer, created_at) VALUES (?, ?, ?, ?)", (user_id, prompt, answer, now()))
                    increment_usage(conn, user_id, requests=1, messages=1)
                    record_activity(conn, user_id, "chat", prompt or "Chat prompt")
                return self.send_json({"answer": answer, "usage": get_usage_summary(user_id)})

            if path == "/api/image-prompt":
                prompt = clean_text(body.get("prompt", "") or "future AI creative studio", 2000)
                style = clean_text(body.get("style", "") or "cinematic", 40)
                enhanced_prompt = enhance_image_prompt(prompt, style)
                with connect_db() as conn:
                    conn.execute(
                        "INSERT INTO images (user_id, prompt, style, enhanced_prompt, created_at) VALUES (?, ?, ?, ?, ?)",
                        (user_id, prompt, style, enhanced_prompt, now()),
                    )
                    increment_usage(conn, user_id, requests=1, images=1)
                    record_activity(conn, user_id, "image", enhanced_prompt)
