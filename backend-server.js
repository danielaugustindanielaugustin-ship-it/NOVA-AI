const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const tips = [
  "Add saved projects so each chat, image, and voice result stays together.",
  "Create prompt presets for coding, business, Tamil translation, study, and design.",
  "Add a real image/video model worker when you are ready for production generation.",
  "Protect paid routes with login sessions before enabling real billing.",
];

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "POST" && url.pathname === "/api/chat") {
      const body = await readJson(req);
      const answer = await generateChatAnswer(body.prompt || "");
      return sendJson(res, { answer });
    }

    if (req.method === "POST" && url.pathname === "/api/image-prompt") {
      const body = await readJson(req);
      return sendJson(res, {
        prompt: body.prompt || "future AI creative studio",
        style: body.style || "cinematic",
        enhancedPrompt: enhanceImagePrompt(body.prompt || "", body.style || "cinematic"),
      });
    }

    if (req.method === "POST" && url.pathname === "/api/contact") {
      const body = await readJson(req);
      if (!body.name || !body.email || !body.message) {
        return sendJson(res, { error: "Name, email, and message are required." }, 400);
      }
      return sendJson(res, {
        ok: true,
        ticketId: `NOVA-${Date.now().toString(36).toUpperCase()}`,
        message: "Demo contact message received.",
      });
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const body = await readJson(req);
      if (!body.email || !body.password) {
        return sendJson(res, { error: "Email and password are required." }, 400);
      }
      return sendJson(res, {
        ok: true,
        user: {
          name: body.name || "NOVA User",
          email: body.email,
          plan: "Pro Demo",
        },
      });
    }

    if (req.method === "GET" && url.pathname === "/api/dashboard-tip") {
      return sendJson(res, { tip: tips[Math.floor(Math.random() * tips.length)] });
    }

    if (req.method === "GET" && url.pathname === "/api/health") {
      return sendJson(res, { ok: true, app: "Combined NOVA AI backend", port: PORT });
    }

    return serveStatic(url.pathname, res);
  } catch (error) {
    console.error(error);
    return sendJson(res, { error: "Server error." }, 500);
  }
});

server.listen(PORT, () => {
  console.log(`Combined NOVA AI backend running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT}/combined-nova-ai.html`);
});

function serveStatic(requestPath, res) {
  const cleanPath = requestPath === "/" ? "/combined-nova-ai.html" : decodeURIComponent(requestPath);
  const filePath = path.normalize(path.join(PUBLIC_DIR, cleanPath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    return sendText(res, "Forbidden", 403, "text/plain; charset=utf-8");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      return sendText(res, "Not found", 404, "text/plain; charset=utf-8");
    }

    const ext = path.extname(filePath).toLowerCase();
    sendBuffer(res, data, 200, MIME_TYPES[ext] || "application/octet-stream");
  });
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large."));
      }
    });
    req.on("end", () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve({});
      }
    });
    req.on("error", reject);
  });
}

async function generateChatAnswer(prompt) {
  const cleanPrompt = String(prompt).trim();
  if (!cleanPrompt) return "Please send a question or prompt first.";

  if (process.env.OPENAI_API_KEY) {
    try {
      return await generateWithOpenAI(cleanPrompt);
    } catch (error) {
      console.error("OpenAI fallback error:", error.message);
    }
  }

  return [
    `NOVA backend answer for: ${cleanPrompt}`,
    "",
    "1. Goal: turn the request into one clear output.",
    "2. Plan: gather inputs, choose the right tool, generate a draft, then let the user edit.",
    "3. Features included: chat, image prompt enhancement, voice UI support, contact, login demo, and dashboard tips.",
    "4. Production next step: connect this backend to a real AI model API and store outputs in a database.",
  ].join("\n");
}

async function generateWithOpenAI(prompt) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      input: prompt,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed with ${response.status}`);
  }

  const data = await response.json();
  return data.output_text || "No text returned from model.";
}

function enhanceImagePrompt(prompt, style) {
  const base = String(prompt).trim() || "future AI creative studio";
  const styles = {
    cinematic: "cinematic lighting, wide angle, rich contrast, premium sci-fi atmosphere",
    anime: "anime style, expressive colors, clean line art, dynamic composition",
    product: "product render, studio lighting, crisp materials, commercial quality",
    editorial: "editorial design, bold composition, magazine-grade visual storytelling",
  };

  return `${base}, ${styles[style] || styles.cinematic}, high detail, polished 2026 AI platform aesthetic`;
}

function sendJson(res, payload, status = 200) {
  sendText(res, JSON.stringify(payload, null, 2), status, "application/json; charset=utf-8");
}

function sendText(res, text, status, contentType) {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(text);
}

function sendBuffer(res, buffer, status, contentType) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(buffer);
}
