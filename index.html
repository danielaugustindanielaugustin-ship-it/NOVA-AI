import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// NOVAMIND AI - Complete SaaS Application
// Built with React + Tailwind + Anthropic API
// ============================================================

// ─── THEME & DESIGN TOKENS ───────────────────────────────────
const COLORS = {
  aurora1: "#0ff0c0",
  aurora2: "#7b5ea7",
  aurora3: "#1a8cff",
  bg: "#070a14",
  bgCard: "rgba(255,255,255,0.04)",
  bgCardHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(0,255,200,0.3)",
  text: "#e8f0fe",
  textMuted: "#7a8ba0",
  textDim: "#3d4f62",
  success: "#0ff0c0",
  warning: "#f5a623",
  danger: "#ff4b6e",
  info: "#1a8cff",
};

// ─── GLOBAL STYLES ────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body, #root {
      background: #070a14;
      color: #e8f0fe;
      font-family: 'DM Sans', sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #070a14; }
    ::-webkit-scrollbar-thumb { background: rgba(0,255,200,0.25); border-radius: 4px; }

    .font-display { font-family: 'Syne', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0,255,200,0.2); }
      50% { box-shadow: 0 0 40px rgba(0,255,200,0.5); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @keyframes scan-line {
      0% { top: 0%; }
      100% { top: 100%; }
    }
    @keyframes particle-float {
      0% { transform: translateY(100vh) scale(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes ripple {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(3); opacity: 0; }
    }
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes thinking-dot {
      0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
      40% { transform: scale(1.2); opacity: 1; }
    }

    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
    .animate-spin-slow { animation: spin-slow 12s linear infinite; }
    .animate-gradient { animation: gradient-shift 5s ease infinite; background-size: 200% 200%; }
    .animate-fade-up { animation: fade-in-up 0.6s ease forwards; }
    .animate-blink { animation: blink 1s step-end infinite; }
    .animate-shimmer {
      background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    .glass {
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .glass-strong {
      background: rgba(10,15,30,0.85);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 1px solid rgba(255,255,255,0.1);
    }
    .gradient-text {
      background: linear-gradient(135deg, #0ff0c0, #1a8cff, #7b5ea7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gradient-border {
      position: relative;
    }
    .gradient-border::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(135deg, #0ff0c0, #1a8cff, #7b5ea7);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0ff0c0, #1a8cff);
      color: #070a14;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }

    .btn-ghost {
      background: transparent;
      color: #e8f0fe;
      border: 1px solid rgba(255,255,255,0.12);
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.2s ease;
    }
    .btn-ghost:hover {
      border-color: rgba(0,255,200,0.4);
      background: rgba(0,255,200,0.06);
      color: #0ff0c0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #7a8ba0;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      border: 1px solid transparent;
    }
    .nav-item:hover {
      background: rgba(255,255,255,0.05);
      color: #e8f0fe;
      border-color: rgba(255,255,255,0.06);
    }
    .nav-item.active {
      background: linear-gradient(135deg, rgba(0,255,200,0.12), rgba(26,140,255,0.08));
      color: #0ff0c0;
      border-color: rgba(0,255,200,0.2);
    }

    .card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      transition: all 0.3s ease;
    }
    .card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(0,255,200,0.15);
      transform: translateY(-2px);
    }

    .input-field {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      color: #e8f0fe;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      outline: none;
      transition: all 0.2s ease;
    }
    .input-field:focus {
      border-color: rgba(0,255,200,0.4);
      background: rgba(0,255,200,0.04);
      box-shadow: 0 0 0 3px rgba(0,255,200,0.08);
    }
    .input-field::placeholder { color: #3d4f62; }

    .thinking-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: #0ff0c0;
      animation: thinking-dot 1.2s infinite ease-in-out;
    }
    .thinking-dot:nth-child(2) { animation-delay: 0.2s; }
    .thinking-dot:nth-child(3) { animation-delay: 0.4s; }

    .message-in { animation: fade-in-up 0.3s ease forwards; }

    .price-card-popular {
      background: linear-gradient(135deg, rgba(0,255,200,0.08), rgba(26,140,255,0.06));
      border-color: rgba(0,255,200,0.3) !important;
    }

    .stat-number {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
    }

    .hero-bg {
      background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,255,200,0.12) 0%, transparent 60%),
                  radial-gradient(ellipse 50% 40% at 80% 50%, rgba(26,140,255,0.08) 0%, transparent 50%),
                  radial-gradient(ellipse 40% 50% at 10% 60%, rgba(123,94,167,0.08) 0%, transparent 50%),
                  #070a14;
    }

    .model-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 20px;
      background: rgba(0,255,200,0.1);
      border: 1px solid rgba(0,255,200,0.2);
      color: #0ff0c0;
      font-size: 11px;
      font-weight: 500;
      font-family: 'JetBrains Mono', monospace;
    }

    @media (max-width: 768px) {
      .sidebar { transform: translateX(-100%); transition: transform 0.3s ease; }
      .sidebar.open { transform: translateX(0); }
    }
  `}</style>
);

// ─── PARTICLE BACKGROUND ─────────────────────────────────────
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 1 + Math.random() * 2,
  }));

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.id % 3 === 0 ? "#0ff0c0" : p.id % 3 === 1 ? "#1a8cff" : "#7b5ea7",
            animation: `particle-float ${p.duration}s ${p.delay}s infinite linear`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

// ─── LOGO ─────────────────────────────────────────────────────
const Logo = ({ size = "md" }) => {
  const s = size === "lg" ? 36 : size === "sm" ? 20 : 28;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: s, height: s,
        background: "linear-gradient(135deg, #0ff0c0, #1a8cff)",
        borderRadius: "8px",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 16px rgba(0,255,200,0.4)",
        flexShrink: 0,
      }}>
        <span style={{ color: "#070a14", fontFamily: "Syne", fontWeight: 800, fontSize: s * 0.45 }}>N</span>
      </div>
      <span className="font-display" style={{ fontWeight: 800, fontSize: s * 0.7, color: "#e8f0fe", letterSpacing: "-0.02em" }}>
        NovaMind
      </span>
    </div>
  );
};

// ─── SIDEBAR NAVIGATION ───────────────────────────────────────
const navItems = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "chat", icon: "💬", label: "AI Chat" },
  { id: "image", icon: "🎨", label: "Image Gen" },
  { id: "voice", icon: "🎤", label: "Voice AI" },
  { id: "dashboard", icon: "📊", label: "Dashboard" },
  { id: "pricing", icon: "💎", label: "Pricing" },
  { id: "profile", icon: "👤", label: "Profile" },
  { id: "settings", icon: "⚙️", label: "Settings" },
  { id: "login", icon: "🔐", label: "Login" },
  { id: "contact", icon: "📬", label: "Contact" },
];

const Sidebar = ({ currentPage, setPage, sidebarOpen, setSidebarOpen }) => (
  <aside
    className={`sidebar glass-strong${sidebarOpen ? " open" : ""}`}
    style={{
      position: "fixed",
      left: 0, top: 0, bottom: 0,
      width: 240,
      display: "flex",
      flexDirection: "column",
      padding: "20px 12px",
      zIndex: 100,
      gap: 2,
    }}
  >
    <div style={{ paddingLeft: 8, paddingBottom: 20, paddingTop: 4 }}>
      <Logo />
    </div>

    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item${currentPage === item.id ? " active" : ""}`}
          onClick={() => { setPage(item.id); setSidebarOpen(false); }}
          style={{ width: "100%", textAlign: "left", background: currentPage === item.id ? undefined : "transparent" }}
        >
          <span style={{ fontSize: 16 }}>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>

    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, paddingLeft: 8 }}>
      <div className="model-tag">
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ff0c0", display: "inline-block" }} />
        Nova-4 Ultra
      </div>
      <p style={{ fontSize: 11, color: "#3d4f62", marginTop: 8 }}>v2.4.1 — All systems nominal</p>
    </div>
  </aside>
);

// ─── TOP BAR ──────────────────────────────────────────────────
const TopBar = ({ currentPage, setSidebarOpen, sidebarOpen }) => {
  const pageTitle = navItems.find(n => n.id === currentPage);
  return (
    <header className="glass-strong" style={{
      position: "fixed", top: 0, left: 240, right: 0,
      height: 60, display: "flex", alignItems: "center",
      padding: "0 24px", gap: 16, zIndex: 90,
    }}>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ display: "none", background: "none", border: "none", color: "#e8f0fe", fontSize: 20, cursor: "pointer" }}
        className="mobile-menu-btn"
      >
        ☰
      </button>
      <span style={{ fontSize: 18, fontFamily: "Syne", fontWeight: 600, flex: 1 }}>
        {pageTitle?.icon} {pageTitle?.label}
      </span>
      <div className="model-tag">Nova-4 Ultra</div>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        background: "linear-gradient(135deg, #0ff0c0, #1a8cff)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 14, fontWeight: 700, color: "#070a14", cursor: "pointer",
      }}>U</div>
    </header>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────
const HomePage = ({ setPage }) => {
  const features = [
    { icon: "💬", title: "AI Chat", desc: "Conversational AI powered by Nova-4 Ultra", gradient: "from #0ff0c0 to #1a8cff", page: "chat" },
    { icon: "🎨", title: "Image Gen", desc: "Create stunning visuals with text prompts", gradient: "from #7b5ea7 to #1a8cff", page: "image" },
    { icon: "🎤", title: "Voice AI", desc: "Natural voice conversation and TTS", gradient: "from #f5a623 to #ff4b6e", page: "voice" },
    { icon: "📄", title: "PDF Analyzer", desc: "Extract insights from any document", gradient: "from #0ff0c0 to #7b5ea7", page: "chat" },
    { icon: "🌐", title: "Translator", desc: "100+ languages including Tamil", gradient: "from #1a8cff to #0ff0c0", page: "chat" },
    { icon: "💻", title: "Code Assistant", desc: "Write, debug, and explain code", gradient: "from #7b5ea7 to #ff4b6e", page: "chat" },
  ];

  const stats = [
    { label: "Active Users", value: "2.4M+", icon: "👥" },
    { label: "AI Requests Daily", value: "180M+", icon: "⚡" },
    { label: "Languages", value: "100+", icon: "🌐" },
    { label: "Uptime", value: "99.99%", icon: "🛡️" },
  ];

  return (
    <div style={{ padding: "40px 32px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Hero */}
      <div className="hero-bg" style={{
        borderRadius: 24, padding: "64px 48px", marginBottom: 40,
        border: "1px solid rgba(0,255,200,0.1)", position: "relative", overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Animated rings */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500, height: 500,
          border: "1px solid rgba(0,255,200,0.04)",
          borderRadius: "50%", pointerEvents: "none",
        }} className="animate-spin-slow" />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350, height: 350,
          border: "1px solid rgba(26,140,255,0.06)",
          borderRadius: "50%", pointerEvents: "none",
          animationDirection: "reverse",
        }} className="animate-spin-slow" />

        <div className="model-tag" style={{ display: "inline-flex", marginBottom: 20 }}>
          ✨ Nova-4 Ultra — Most Powerful AI Yet
        </div>

        <h1 className="font-display" style={{
          fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800,
          lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em",
        }}>
          The Future of{" "}
          <span className="gradient-text">Intelligence</span>
          <br />is Here
        </h1>

        <p style={{ fontSize: 18, color: "#7a8ba0", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
          NovaMind AI combines the most advanced language models with real-time tools,
          voice, vision, and enterprise-grade security. Build, create, and explore.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => setPage("chat")}
            style={{ padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 600 }}
          >
            Start for Free →
          </button>
          <button
            className="btn-ghost"
            onClick={() => setPage("pricing")}
            style={{ padding: "14px 32px", borderRadius: 12, fontSize: 15 }}
          >
            See Plans
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
        {stats.map((s) => (
          <div key={s.label} className="card" style={{ padding: "20px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div className="stat-number gradient-text" style={{ fontSize: 26, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#7a8ba0" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em" }}>
        Everything You Need
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {features.map((f) => (
          <div
            key={f.title}
            className="card"
            style={{ padding: 24, cursor: "pointer" }}
            onClick={() => setPage(f.page)}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: "#7a8ba0", lineHeight: 1.6 }}>{f.desc}</p>
            <div style={{ marginTop: 16, fontSize: 12, color: "#0ff0c0" }}>Try it →</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="gradient-border" style={{
        marginTop: 40, padding: 40, borderRadius: 20,
        background: "rgba(0,255,200,0.03)", textAlign: "center",
      }}>
        <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
          Ready to supercharge your workflow?
        </h2>
        <p style={{ color: "#7a8ba0", marginBottom: 24 }}>
          Join 2.4M+ users building the future with NovaMind AI
        </p>
        <button
          className="btn-primary"
          onClick={() => setPage("login")}
          style={{ padding: "14px 40px", borderRadius: 12, fontSize: 15, fontWeight: 600 }}
        >
          Get Started Free
        </button>
      </div>
    </div>
  );
};

// ─── AI CHAT PAGE ─────────────────────────────────────────────
const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm NovaMind, your advanced AI assistant. I can help you with writing, analysis, coding, translation, research, and much more. What would you like to explore today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const quickPrompts = [
    "Write a poem about AI and humanity",
    "Explain quantum computing simply",
    "Help me debug React code",
    "Translate 'Hello World' to Tamil",
    "Summarize the latest AI trends",
    "Write a cover letter for a developer role",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamText, loading]);

  const sendMessage = useCallback(async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const userMsg = {
      role: "user",
      content: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setStreamText("");

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are NovaMind, an advanced AI assistant. Be helpful, concise, and brilliant. Format code with markdown code blocks when relevant.",
          messages: [...history, { role: "user", content: userText }],
        }),
      });
      const data = await response.json();
      const reply = data.content?.map(b => b.text || "").join("") || "I encountered an issue. Please try again.";

      // Simulate streaming
      let i = 0;
      const interval = setInterval(() => {
        if (i <= reply.length) {
          setStreamText(reply.slice(0, i));
          i += 4;
        } else {
          clearInterval(interval);
          setMessages(prev => [...prev, {
            role: "assistant",
            content: reply,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }]);
          setStreamText("");
          setLoading(false);
        }
      }, 12);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "⚠️ Connection error. Please check your setup and try again.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }]);
      setLoading(false);
      setStreamText("");
    }
  }, [input, messages, loading]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderContent = (text) => {
    // Simple code block rendering
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith("```")) {
        const code = part.replace(/^```\w*\n?/, "").replace(/```$/, "");
        return (
          <div key={i} style={{
            background: "rgba(0,0,0,0.4)", borderRadius: 8, padding: "12px 16px",
            fontFamily: "JetBrains Mono, monospace", fontSize: 12,
            border: "1px solid rgba(255,255,255,0.08)", margin: "8px 0",
            overflowX: "auto", whiteSpace: "pre-wrap", color: "#0ff0c0",
          }}>
            {code}
          </div>
        );
      }
      return <span key={i} style={{ whiteSpace: "pre-wrap" }}>{part}</span>;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 60px)", position: "relative" }}>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
        {messages.length === 1 && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: "#3d4f62", marginBottom: 12, textAlign: "center" }}>Quick prompts to get started</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="btn-ghost"
                  style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12 }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className="message-in" style={{
            display: "flex", gap: 12,
            flexDirection: msg.role === "user" ? "row-reverse" : "row",
            alignItems: "flex-start",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              background: msg.role === "assistant"
                ? "linear-gradient(135deg, #0ff0c0, #1a8cff)"
                : "linear-gradient(135deg, #7b5ea7, #ff4b6e)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, color: "#070a14", fontWeight: 700,
            }}>
              {msg.role === "assistant" ? "N" : "U"}
            </div>
            <div style={{ maxWidth: "72%", minWidth: 60 }}>
              <div style={{
                padding: "12px 16px",
                background: msg.role === "user"
                  ? "linear-gradient(135deg, rgba(123,94,167,0.25), rgba(26,140,255,0.15))"
                  : "rgba(255,255,255,0.04)",
                border: "1px solid",
                borderColor: msg.role === "user" ? "rgba(123,94,167,0.3)" : "rgba(255,255,255,0.08)",
                borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                fontSize: 14, lineHeight: 1.7, color: "#e8f0fe",
              }}>
                {renderContent(msg.content)}
              </div>
              <div style={{ fontSize: 11, color: "#3d4f62", marginTop: 4, paddingLeft: 4, textAlign: msg.role === "user" ? "right" : "left" }}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {/* Streaming / Thinking */}
        {(loading || streamText) && (
          <div className="message-in" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg, #0ff0c0, #1a8cff)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, color: "#070a14", fontWeight: 700, flexShrink: 0,
            }}>N</div>
            <div style={{
              padding: "12px 16px", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 16px 16px 16px", maxWidth: "72%",
            }}>
              {streamText ? (
                <span style={{ fontSize: 14, lineHeight: 1.7 }}>
                  {streamText}
                  <span className="animate-blink" style={{ color: "#0ff0c0" }}>▌</span>
                </span>
              ) : (
                <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "4px 0" }}>
                  <div className="thinking-dot" />
                  <div className="thinking-dot" />
                  <div className="thinking-dot" />
                </div>
              )}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div style={{
        padding: "16px 32px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(7,10,20,0.9)",
        backdropFilter: "blur(20px)",
      }}>
        <div style={{
          display: "flex", gap: 12, alignItems: "flex-end",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16, padding: "10px 12px 10px 16px",
          transition: "border-color 0.2s",
        }}>
          <textarea
            ref={inputRef}
            className="input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask NovaMind anything... (Shift+Enter for new line)"
            rows={1}
            style={{
              flex: 1, background: "none", border: "none", resize: "none",
              maxHeight: 120, lineHeight: 1.6, padding: "4px 0",
              outline: "none", boxShadow: "none",
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="btn-primary"
            style={{
              width: 38, height: 38, borderRadius: 10, fontSize: 16,
              flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
              opacity: loading || !input.trim() ? 0.4 : 1,
            }}
          >
            ↑
          </button>
        </div>
        <p style={{ fontSize: 11, color: "#3d4f62", textAlign: "center", marginTop: 8 }}>
          NovaMind can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

// ─── IMAGE GENERATOR PAGE ──────────────────────────────────────
const ImagePage = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("photorealistic");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const styles = ["photorealistic", "anime", "oil painting", "watercolor", "cyberpunk", "minimalist", "3D render", "sketch"];

  const examplePrompts = [
    "A futuristic city at sunset with neon lights",
    "Portrait of a samurai in cherry blossom forest",
    "Abstract AI consciousness visualization",
    "Underwater bioluminescent ocean scene",
  ];

  const generateImage = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `I want to generate an image with this prompt: "${prompt}" in ${style} style. Since you can't generate actual images, please:
1. Write a detailed, vivid description of what the image would look like (3-4 sentences)
2. List 5 key visual elements
3. Suggest the mood and color palette
4. Give a technical photography/art direction note
Format as JSON: { "description": "...", "elements": [...], "mood": "...", "palette": "...", "direction": "..." }`
          }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      try {
        const clean = text.replace(/```json\n?/, "").replace(/```\n?$/, "").trim();
        const parsed = JSON.parse(clean);
        setResult(parsed);
        setHistory(prev => [{ prompt, style, result: parsed, id: Date.now() }, ...prev.slice(0, 5)]);
      } catch {
        setResult({ description: text, elements: [], mood: "", palette: "", direction: "" });
      }
    } catch (err) {
      setResult({ description: "Error generating description. Please try again.", elements: [], mood: "", palette: "", direction: "" });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "32px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
          AI Image <span className="gradient-text">Generator</span>
        </h1>
        <p style={{ color: "#7a8ba0", fontSize: 14 }}>Describe your vision and Nova-4 will bring it to life</p>
      </div>

      {/* Style Selector */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: "#7a8ba0", marginBottom: 8 }}>Art Style</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {styles.map(s => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              style={{
                padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                background: style === s ? "linear-gradient(135deg, #0ff0c0, #1a8cff)" : "rgba(255,255,255,0.05)",
                border: "1px solid",
                borderColor: style === s ? "transparent" : "rgba(255,255,255,0.1)",
                color: style === s ? "#070a14" : "#e8f0fe",
                fontWeight: style === s ? 600 : 400,
                transition: "all 0.2s",
              }}
            >{s}</button>
          ))}
        </div>
      </div>

      {/* Prompt Examples */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: "#7a8ba0", marginBottom: 8 }}>Try an example</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {examplePrompts.map(p => (
            <button
              key={p}
              onClick={() => setPrompt(p)}
              className="btn-ghost"
              style={{ padding: "6px 12px", borderRadius: 8, fontSize: 12 }}
            >{p}</button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
        <textarea
          className="input-field"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create in detail..."
          rows={3}
          style={{ flex: 1, padding: "14px 16px", resize: "none" }}
        />
        <button
          onClick={generateImage}
          disabled={loading || !prompt.trim()}
          className="btn-primary"
          style={{
            padding: "0 24px", borderRadius: 12, fontSize: 14, fontWeight: 600,
            opacity: loading || !prompt.trim() ? 0.5 : 1,
            minWidth: 120,
          }}
        >
          {loading ? "⏳ Generating..." : "✨ Generate"}
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="card" style={{ padding: 40, textAlign: "center" }}>
          <div className="animate-spin-slow" style={{
            width: 60, height: 60, borderRadius: "50%",
            border: "2px solid rgba(0,255,200,0.1)",
            borderTop: "2px solid #0ff0c0",
            margin: "0 auto 20px",
          }} />
          <p style={{ color: "#7a8ba0", fontSize: 14 }}>Nova-4 is crafting your vision...</p>
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="card gradient-border animate-fade-up" style={{ padding: 28, marginBottom: 24 }}>
          {/* Simulated image placeholder */}
          <div style={{
            width: "100%", paddingTop: "56.25%", borderRadius: 12, marginBottom: 20,
            background: `linear-gradient(135deg, 
              rgba(0,255,200,0.1), rgba(26,140,255,0.15), rgba(123,94,167,0.1))`,
            border: "1px solid rgba(0,255,200,0.1)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 12,
            }}>
              <div style={{ fontSize: 48 }}>🎨</div>
              <p style={{ color: "#7a8ba0", fontSize: 13, textAlign: "center", padding: "0 20px" }}>
                Image generation preview — {style} style
              </p>
              <div className="model-tag">Generated with Nova-4</div>
            </div>
          </div>

          <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Description</h3>
          <p style={{ fontSize: 14, color: "#b0c0d0", lineHeight: 1.7, marginBottom: 16 }}>{result.description}</p>

          {result.elements?.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <h4 style={{ fontSize: 13, color: "#7a8ba0", marginBottom: 8 }}>Key Elements</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {result.elements.map((el, i) => (
                  <span key={i} style={{
                    padding: "3px 10px", borderRadius: 20, fontSize: 12,
                    background: "rgba(0,255,200,0.08)", border: "1px solid rgba(0,255,200,0.15)",
                    color: "#0ff0c0",
                  }}>{el}</span>
                ))}
              </div>
            </div>
          )}

          {result.mood && (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: 11, color: "#3d4f62" }}>MOOD</span>
                <p style={{ fontSize: 13, color: "#e8f0fe" }}>{result.mood}</p>
              </div>
              {result.palette && (
                <div>
                  <span style={{ fontSize: 11, color: "#3d4f62" }}>PALETTE</span>
                  <p style={{ fontSize: 13, color: "#e8f0fe" }}>{result.palette}</p>
                </div>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            <button className="btn-primary" style={{ padding: "8px 20px", borderRadius: 8, fontSize: 13 }}>
              ⬇ Download
            </button>
            <button className="btn-ghost" style={{ padding: "8px 20px", borderRadius: 8, fontSize: 13 }}>
              🔄 Variations
            </button>
            <button className="btn-ghost" style={{ padding: "8px 20px", borderRadius: 8, fontSize: 13 }}>
              ✏️ Edit
            </button>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div>
          <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Recent Generations</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {history.map(h => (
              <div key={h.id} className="card" style={{ padding: 16, cursor: "pointer" }} onClick={() => setResult(h.result)}>
                <div style={{
                  width: "100%", paddingTop: "60%", borderRadius: 8, marginBottom: 10,
                  background: "linear-gradient(135deg, rgba(0,255,200,0.08), rgba(26,140,255,0.06))",
                  position: "relative",
                }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🎨</div>
                </div>
                <p style={{ fontSize: 12, color: "#b0c0d0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{h.prompt}</p>
                <span style={{ fontSize: 11, color: "#3d4f62" }}>{h.style}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── VOICE AI PAGE ─────────────────────────────────────────────
const VoicePage = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [lang, setLang] = useState("en-US");
  const [supported] = useState(() => 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  const recRef = useRef(null);

  const langs = [
    { code: "en-US", label: "English" },
    { code: "ta-IN", label: "Tamil" },
    { code: "hi-IN", label: "Hindi" },
    { code: "fr-FR", label: "French" },
    { code: "es-ES", label: "Spanish" },
    { code: "de-DE", label: "German" },
    { code: "ja-JP", label: "Japanese" },
    { code: "zh-CN", label: "Chinese" },
  ];

  const startListening = () => {
    if (!supported) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = lang;
    rec.continuous = false;
    rec.interimResults = true;
    rec.onresult = (e) => {
      const t = Array.from(e.results).map(r => r[0].transcript).join("");
      setTranscript(t);
    };
    rec.onend = () => setIsListening(false);
    rec.start();
    recRef.current = rec;
    setIsListening(true);
    setTranscript("");
  };

  const stopListening = () => {
    recRef.current?.stop();
    setIsListening(false);
  };

  const processVoice = async () => {
    if (!transcript.trim() || loading) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are NovaMind Voice AI. Give concise, conversational responses suitable for text-to-speech. Keep responses under 3 sentences unless more detail is needed.",
          messages: [{ role: "user", content: transcript }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Sorry, I couldn't process that.";
      setResponse(reply);
      speakResponse(reply);
    } catch {
      setResponse("Error processing your voice input. Please try again.");
    }
    setLoading(false);
  };

  const speakResponse = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang;
    utt.rate = 0.95;
    utt.pitch = 1;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
  };

  return (
    <div style={{ padding: "32px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          Voice <span className="gradient-text">Assistant</span>
        </h1>
        <p style={{ color: "#7a8ba0", fontSize: 14 }}>Speak naturally in any language — NovaMind understands you</p>
      </div>

      {/* Language Selector */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
        {langs.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            style={{
              padding: "6px 16px", borderRadius: 20, fontSize: 12, cursor: "pointer",
              background: lang === l.code ? "linear-gradient(135deg, #0ff0c0, #1a8cff)" : "rgba(255,255,255,0.05)",
              border: "1px solid",
              borderColor: lang === l.code ? "transparent" : "rgba(255,255,255,0.1)",
              color: lang === l.code ? "#070a14" : "#e8f0fe",
              fontWeight: lang === l.code ? 600 : 400, transition: "all 0.2s",
            }}
          >{l.label}</button>
        ))}
      </div>

      {/* Main Mic Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
        <div style={{ position: "relative" }}>
          {isListening && (
            <>
              <div style={{
                position: "absolute", inset: -20, borderRadius: "50%",
                border: "2px solid rgba(0,255,200,0.3)",
                animation: "ripple 1.5s infinite ease-out",
              }} />
              <div style={{
                position: "absolute", inset: -40, borderRadius: "50%",
                border: "2px solid rgba(0,255,200,0.15)",
                animation: "ripple 1.5s 0.5s infinite ease-out",
              }} />
            </>
          )}
          <button
            onClick={isListening ? stopListening : startListening}
            disabled={!supported}
            style={{
              width: 100, height: 100, borderRadius: "50%", border: "none", cursor: "pointer",
              background: isListening
                ? "linear-gradient(135deg, #ff4b6e, #f5a623)"
                : "linear-gradient(135deg, #0ff0c0, #1a8cff)",
              fontSize: 36, display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: isListening ? "0 0 40px rgba(255,75,110,0.5)" : "0 0 40px rgba(0,255,200,0.4)",
              transition: "all 0.3s ease",
              transform: isListening ? "scale(1.05)" : "scale(1)",
            }}
          >
            {isListening ? "🛑" : "🎤"}
          </button>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: 13, color: "#7a8ba0", marginBottom: 32 }}>
        {!supported ? "Speech recognition not supported in this browser" :
          isListening ? "Listening... speak now" : "Click to start speaking"}
      </p>

      {/* Transcript */}
      {transcript && (
        <div className="card animate-fade-up" style={{ padding: 20, marginBottom: 16 }}>
          <p style={{ fontSize: 11, color: "#3d4f62", marginBottom: 8 }}>YOU SAID</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#e8f0fe" }}>"{transcript}"</p>
          <button
            onClick={processVoice}
            disabled={loading}
            className="btn-primary"
            style={{ marginTop: 16, padding: "8px 20px", borderRadius: 8, fontSize: 13 }}
          >
            {loading ? "Processing..." : "Send to NovaMind →"}
          </button>
        </div>
      )}

      {/* Response */}
      {response && (
        <div className="card gradient-border animate-fade-up" style={{ padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "linear-gradient(135deg, #0ff0c0, #1a8cff)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, color: "#070a14", fontWeight: 700,
            }}>N</div>
            <span style={{ fontSize: 12, color: "#7a8ba0" }}>NOVAMIND RESPONSE</span>
            {speaking && <span className="model-tag" style={{ marginLeft: "auto" }}>🔊 Speaking...</span>}
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#e8f0fe" }}>{response}</p>
          <button
            onClick={() => speakResponse(response)}
            className="btn-ghost"
            style={{ marginTop: 16, padding: "6px 16px", borderRadius: 8, fontSize: 13 }}
          >
            🔊 Play Again
          </button>
        </div>
      )}

      {!supported && (
        <div className="card" style={{ padding: 20, textAlign: "center", borderColor: "rgba(245,166,35,0.3)" }}>
          <p style={{ color: "#f5a623", fontSize: 14 }}>⚠️ Your browser doesn't support the Web Speech API.</p>
          <p style={{ color: "#7a8ba0", fontSize: 13, marginTop: 8 }}>Try Chrome or Edge for voice features.</p>
        </div>
      )}
    </div>
  );
};

// ─── DASHBOARD PAGE ───────────────────────────────────────────
const DashboardPage = ({ setPage }) => {
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [loadingTip, setLoadingTip] = useState(false);

  const stats = [
    { label: "Messages Today", value: "47", delta: "+12%", icon: "💬", color: "#0ff0c0" },
    { label: "Images Generated", value: "8", delta: "+4", icon: "🎨", color: "#1a8cff" },
    { label: "Tokens Used", value: "24.8K", delta: "76% left", icon: "⚡", color: "#7b5ea7" },
    { label: "Saved Chats", value: "23", delta: "+3", icon: "📁", color: "#f5a623" },
  ];

  const recentChats = [
    { title: "Python debugging session", time: "2 hours ago", tags: ["coding"] },
    { title: "Market research analysis", time: "Yesterday", tags: ["research"] },
    { title: "Tamil translation help", time: "2 days ago", tags: ["language"] },
    { title: "React component design", time: "3 days ago", tags: ["coding", "design"] },
    { title: "Business email drafting", time: "5 days ago", tags: ["writing"] },
  ];

  const getAITip = async () => {
    setLoadingTip(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: "Give me one short, actionable productivity tip for using AI tools effectively. Keep it under 40 words, make it specific and practical." }],
        }),
      });
      const data = await res.json();
      setAiSuggestion(data.content?.map(b => b.text || "").join("") || "");
    } catch { setAiSuggestion("Use specific, detailed prompts for better AI responses."); }
    setLoadingTip(false);
  };

  useEffect(() => { getAITip(); }, []);

  const usageData = [60, 80, 45, 90, 70, 55, 85];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Good day, <span className="gradient-text">User</span> 👋
          </h1>
          <p style={{ color: "#7a8ba0", fontSize: 14, marginTop: 4 }}>Here's your AI activity overview</p>
        </div>
        <button
          className="btn-primary"
          onClick={() => setPage("chat")}
          style={{ padding: "10px 20px", borderRadius: 10, fontSize: 13 }}
        >
          + New Chat
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
        {stats.map(s => (
          <div key={s.label} className="card" style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <span style={{ fontSize: 11, color: s.color, background: `${s.color}18`, padding: "2px 8px", borderRadius: 10 }}>{s.delta}</span>
            </div>
            <div className="stat-number" style={{ fontSize: 28, color: s.color, marginTop: 12 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#7a8ba0", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
        {/* Usage Chart */}
        <div className="card" style={{ padding: 24 }}>
          <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>Weekly Usage</h3>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100 }}>
            {usageData.map((v, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: "100%", height: `${v}%`,
                  background: i === new Date().getDay() - 1
                    ? "linear-gradient(to top, #0ff0c0, #1a8cff)"
                    : "rgba(255,255,255,0.08)",
                  borderRadius: "4px 4px 0 0",
                  transition: "all 0.3s ease",
                }} />
                <span style={{ fontSize: 10, color: "#3d4f62" }}>{dayLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Daily Tip */}
        <div className="card gradient-border" style={{ padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700 }}>AI Productivity Tip</h3>
          </div>
          {loadingTip ? (
            <div>
              <div className="animate-shimmer" style={{ height: 14, borderRadius: 4, marginBottom: 8 }} />
              <div className="animate-shimmer" style={{ height: 14, borderRadius: 4, width: "80%" }} />
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#b0c0d0", lineHeight: 1.7 }}>{aiSuggestion}</p>
          )}
          <button
            onClick={getAITip}
            className="btn-ghost"
            style={{ marginTop: 16, padding: "6px 14px", borderRadius: 8, fontSize: 12 }}
          >
            🔄 New Tip
          </button>
        </div>
      </div>

      {/* Recent Chats */}
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700 }}>Recent Conversations</h3>
          <button className="btn-ghost" style={{ padding: "4px 12px", borderRadius: 8, fontSize: 12 }}>View All</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {recentChats.map((c, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 12px", borderRadius: 8, cursor: "pointer",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "rgba(0,255,200,0.08)", border: "1px solid rgba(0,255,200,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>💬</div>
                <div>
                  <p style={{ fontSize: 13, color: "#e8f0fe" }}>{c.title}</p>
                  <p style={{ fontSize: 11, color: "#3d4f62" }}>{c.time}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {c.tags.map(t => (
                  <span key={t} style={{
                    padding: "2px 8px", borderRadius: 10, fontSize: 10,
                    background: "rgba(26,140,255,0.1)", color: "#1a8cff", border: "1px solid rgba(26,140,255,0.2)",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── PRICING PAGE ─────────────────────────────────────────────
const PricingPage = ({ setPage }) => {
  const [billing, setBilling] = useState("monthly");
  const [aiCompare, setAiCompare] = useState("");
  const [comparing, setComparing] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      desc: "Perfect for exploring NovaMind",
      features: ["50 messages/day", "Basic AI chat", "5 image generations", "Community support", "1 workspace"],
      cta: "Get Started Free",
      popular: false,
      color: "#7a8ba0",
    },
    {
      name: "Pro",
      price: { monthly: 20, yearly: 16 },
      desc: "For power users and creators",
      features: ["Unlimited messages", "Nova-4 Ultra access", "200 image generations", "Voice AI (all languages)", "PDF analyzer", "Priority support", "5 workspaces"],
      cta: "Start Pro Trial",
      popular: true,
      color: "#0ff0c0",
    },
    {
      name: "Team",
      price: { monthly: 50, yearly: 42 },
      desc: "For growing teams",
      features: ["Everything in Pro", "20 team members", "Admin dashboard", "Custom AI personas", "API access", "Advanced analytics", "Dedicated support", "SSO/SAML"],
      cta: "Start Team Trial",
      popular: false,
      color: "#1a8cff",
    },
    {
      name: "Enterprise",
      price: { monthly: null, yearly: null },
      desc: "Custom solutions for large orgs",
      features: ["Unlimited everything", "Custom model fine-tuning", "On-premise deployment", "SLA guarantee", "Dedicated infrastructure", "White-label option", "Custom integrations"],
      cta: "Contact Sales",
      popular: false,
      color: "#7b5ea7",
    },
  ];

  const comparePlans = async () => {
    setComparing(true);
    setAiCompare("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: "I'm looking at NovaMind AI pricing plans: Free ($0), Pro ($20/mo), Team ($50/mo), Enterprise (custom). I use AI for coding, writing, and image generation about 2 hours daily. Which plan do you recommend and why? Be concise, max 3 sentences." }],
        }),
      });
      const data = await res.json();
      setAiCompare(data.content?.map(b => b.text || "").join("") || "");
    } catch { setAiCompare("Based on daily usage, the Pro plan offers the best value with unlimited messages and Nova-4 access."); }
    setComparing(false);
  };

  return (
    <div style={{ padding: "32px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 className="font-display" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.03em" }}>
          Simple, <span className="gradient-text">Transparent</span> Pricing
        </h1>
        <p style={{ color: "#7a8ba0", fontSize: 15, marginBottom: 24 }}>Start free. Scale as you grow. No hidden fees.</p>

        {/* Billing Toggle */}
        <div style={{
          display: "inline-flex", background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: 30, padding: 4,
        }}>
          {["monthly", "yearly"].map(b => (
            <button key={b} onClick={() => setBilling(b)} style={{
              padding: "8px 24px", borderRadius: 26, border: "none", cursor: "pointer",
              background: billing === b ? "linear-gradient(135deg, #0ff0c0, #1a8cff)" : "transparent",
              color: billing === b ? "#070a14" : "#7a8ba0",
              fontWeight: billing === b ? 600 : 400, fontSize: 13, transition: "all 0.2s",
            }}>
              {b.charAt(0).toUpperCase() + b.slice(1)}
              {b === "yearly" && <span style={{ marginLeft: 6, fontSize: 10, background: "rgba(0,255,200,0.2)", padding: "1px 6px", borderRadius: 8, color: "#0ff0c0" }}>-20%</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
        {plans.map(plan => (
          <div
            key={plan.name}
            className={plan.popular ? "price-card-popular" : "card"}
            style={{
              padding: 24, borderRadius: 20,
              border: "1px solid",
              borderColor: plan.popular ? "rgba(0,255,200,0.3)" : "rgba(255,255,255,0.07)",
              position: "relative",
            }}
          >
            {plan.popular && (
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #0ff0c0, #1a8cff)",
                color: "#070a14", fontSize: 11, fontWeight: 700,
                padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap",
              }}>MOST POPULAR</div>
            )}

            <div style={{ marginBottom: 16 }}>
              <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: plan.color, marginBottom: 4 }}>{plan.name}</h3>
              <p style={{ fontSize: 12, color: "#7a8ba0" }}>{plan.desc}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              {plan.price.monthly !== null ? (
                <>
                  <span className="font-display" style={{ fontSize: 36, fontWeight: 800, color: "#e8f0fe" }}>
                    ${billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span style={{ fontSize: 13, color: "#7a8ba0" }}>/mo</span>
                </>
              ) : (
                <span className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "#e8f0fe" }}>Custom</span>
              )}
            </div>

            <button
              onClick={() => setPage("login")}
              className={plan.popular ? "btn-primary" : "btn-ghost"}
              style={{ width: "100%", padding: "10px", borderRadius: 10, fontSize: 13, fontWeight: 600, marginBottom: 20 }}
            >{plan.cta}</button>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {plan.features.map(f => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: plan.color, fontSize: 14, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 12, color: "#b0c0d0", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="card gradient-border" style={{ padding: 28, textAlign: "center" }}>
        <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
          Not sure which plan? 🤔
        </h3>
        <p style={{ color: "#7a8ba0", fontSize: 13, marginBottom: 16 }}>Let NovaMind analyze your needs and recommend the perfect plan</p>
        {aiCompare && (
          <div style={{
            background: "rgba(0,255,200,0.06)", border: "1px solid rgba(0,255,200,0.15)",
            borderRadius: 12, padding: 16, marginBottom: 16, textAlign: "left",
          }}>
            <p style={{ fontSize: 14, color: "#e8f0fe", lineHeight: 1.7 }}>{aiCompare}</p>
          </div>
        )}
        <button
          onClick={comparePlans}
          disabled={comparing}
          className="btn-primary"
          style={{ padding: "10px 28px", borderRadius: 10, fontSize: 13 }}
        >
          {comparing ? "Analyzing..." : "✨ Get AI Recommendation"}
        </button>
      </div>
    </div>
  );
};

// ─── LOGIN PAGE ───────────────────────────────────────────────
const LoginPage = ({ setPage }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    setMessage("");
    // Simulate auth
    await new Promise(r => setTimeout(r, 1200));
    setMessage(mode === "login" ? "Welcome back! Redirecting..." : "Account created! Redirecting...");
    setLoading(false);
    setTimeout(() => setPage("dashboard"), 1500);
  };

  const socials = [
    { label: "Continue with Google", icon: "🔵" },
    { label: "Continue with GitHub", icon: "⚫" },
    { label: "Continue with Microsoft", icon: "🟦" },
  ];

  return (
    <div style={{
      minHeight: "calc(100vh - 60px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 32,
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Logo size="lg" />
          <h1 className="font-display" style={{ fontSize: 24, fontWeight: 700, marginTop: 24, marginBottom: 8 }}>
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p style={{ color: "#7a8ba0", fontSize: 14 }}>
            {mode === "login" ? "Sign in to continue to NovaMind" : "Start your AI journey today"}
          </p>
        </div>

        {/* Social Auth */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {socials.map(s => (
            <button key={s.label} className="btn-ghost" style={{
              width: "100%", padding: "11px 16px", borderRadius: 12, fontSize: 14,
              display: "flex", alignItems: "center", gap: 10, justifyContent: "center",
            }}>
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          <span style={{ fontSize: 12, color: "#3d4f62" }}>or with email</span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {mode === "register" && (
            <input
              className="input-field"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              style={{ padding: "12px 16px", width: "100%" }}
            />
          )}
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            style={{ padding: "12px 16px", width: "100%" }}
          />
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            style={{ padding: "12px 16px", width: "100%" }}
          />
        </div>

        {mode === "login" && (
          <div style={{ textAlign: "right", marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: "#1a8cff", cursor: "pointer" }}>Forgot password?</span>
          </div>
        )}

        {message && (
          <div style={{
            padding: "10px 16px", borderRadius: 10, marginBottom: 12,
            background: "rgba(0,255,200,0.08)", border: "1px solid rgba(0,255,200,0.2)",
            color: "#0ff0c0", fontSize: 13, textAlign: "center",
          }}>{message}</div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary"
          style={{ width: "100%", padding: "13px", borderRadius: 12, fontSize: 15, fontWeight: 600 }}
        >
          {loading ? "⏳ Please wait..." : mode === "login" ? "Sign In →" : "Create Account →"}
        </button>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "#7a8ba0" }}>
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <span
            style={{ color: "#0ff0c0", cursor: "pointer", fontWeight: 500 }}
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Sign up free" : "Sign in"}
          </span>
        </p>
      </div>
    </div>
  );
};

// ─── PROFILE PAGE ─────────────────────────────────────────────
const ProfilePage = () => {
  const [bio, setBio] = useState("AI enthusiast and developer. Building the future with NovaMind.");
  const [editBio, setEditBio] = useState(false);
  const [aiRoast, setAiRoast] = useState("");
  const [roasting, setRoasting] = useState(false);

  const badges = [
    { label: "Power User", icon: "⚡", color: "#f5a623" },
    { label: "50 Chats", icon: "💬", color: "#0ff0c0" },
    { label: "Code Wizard", icon: "💻", color: "#1a8cff" },
    { label: "Early Adopter", icon: "🚀", color: "#7b5ea7" },
  ];

  const getAIRoast = async () => {
    setRoasting(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Generate a funny, light-hearted AI "profile analysis" for a user with this bio: "${bio}". Make it playful and positive, mentioning their AI usage habits. 2 sentences max.` }],
        }),
      });
      const data = await res.json();
      setAiRoast(data.content?.map(b => b.text || "").join("") || "");
    } catch { setAiRoast("Your AI usage pattern suggests you're either building the next unicorn startup or procrastinating on something important."); }
    setRoasting(false);
  };

  return (
    <div style={{ padding: "32px", maxWidth: 800, margin: "0 auto" }}>
      {/* Profile Header */}
      <div className="card gradient-border" style={{ padding: 32, marginBottom: 24, display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #0ff0c0, #1a8cff, #7b5ea7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, color: "#070a14", fontWeight: 800, fontFamily: "Syne",
          }}>U</div>
          <div style={{
            position: "absolute", bottom: 2, right: 2, width: 16, height: 16,
            borderRadius: "50%", background: "#0ff0c0",
            border: "2px solid #070a14",
          }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1 className="font-display" style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Alex Johnson</h1>
          <p style={{ fontSize: 13, color: "#7a8ba0", marginBottom: 12 }}>alex@example.com · Pro Plan · Member since Jan 2024</p>
          {editBio ? (
            <div style={{ display: "flex", gap: 8 }}>
              <textarea
                className="input-field"
                value={bio}
                onChange={e => setBio(e.target.value)}
                rows={2}
                style={{ flex: 1, padding: "8px 12px", fontSize: 13, resize: "none" }}
              />
              <button className="btn-primary" onClick={() => setEditBio(false)} style={{ padding: "8px 14px", borderRadius: 8, fontSize: 13 }}>Save</button>
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#b0c0d0", cursor: "pointer", lineHeight: 1.6 }} onClick={() => setEditBio(true)}>
              {bio} <span style={{ color: "#3d4f62", fontSize: 11 }}>✏️ edit</span>
            </p>
          )}
        </div>
        <div className="model-tag">Pro</div>
      </div>

      {/* Badges */}
      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Achievements</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {badges.map(b => (
            <div key={b.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "8px 16px", borderRadius: 30,
              background: `${b.color}12`, border: `1px solid ${b.color}30`,
            }}>
              <span>{b.icon}</span>
              <span style={{ fontSize: 12, color: b.color, fontWeight: 500 }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Total Messages", value: "1,247" },
          { label: "Images Created", value: "89" },
          { label: "Days Active", value: "142" },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: 20, textAlign: "center" }}>
            <div className="stat-number gradient-text" style={{ fontSize: 28 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#7a8ba0", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* AI Profile Analysis */}
      <div className="card" style={{ padding: 24 }}>
        <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>🤖 AI Profile Analysis</h3>
        <p style={{ fontSize: 12, color: "#7a8ba0", marginBottom: 16 }}>Let NovaMind generate a fun analysis of your AI usage personality</p>
        {aiRoast && (
          <div style={{
            padding: 16, borderRadius: 10, marginBottom: 16,
            background: "rgba(123,94,167,0.08)", border: "1px solid rgba(123,94,167,0.2)",
          }}>
            <p style={{ fontSize: 13, color: "#e8f0fe", lineHeight: 1.7 }}>{aiRoast}</p>
          </div>
        )}
        <button
          onClick={getAIRoast}
          disabled={roasting}
          className="btn-primary"
          style={{ padding: "8px 20px", borderRadius: 8, fontSize: 13 }}
        >
          {roasting ? "Analyzing..." : "✨ Analyze My Profile"}
        </button>
      </div>
    </div>
  );
};

// ─── SETTINGS PAGE ─────────────────────────────────────────────
const SettingsPage = () => {
  const [settings, setSettings] = useState({
    model: "nova-4-ultra",
    theme: "dark",
    language: "en",
    tamilMode: false,
    streaming: true,
    notifications: true,
    soundFX: false,
    memory: true,
    analyticsShare: false,
    ttsVoice: "nova",
    fontSize: "medium",
  });

  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  const set = (key, val) => setSettings(prev => ({ ...prev, [key]: val }));

  const Toggle = ({ value, onToggle }) => (
    <div
      onClick={onToggle}
      style={{
        width: 44, height: 24, borderRadius: 12, cursor: "pointer",
        background: value ? "linear-gradient(135deg, #0ff0c0, #1a8cff)" : "rgba(255,255,255,0.1)",
        position: "relative", transition: "all 0.2s ease", flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute", top: 3, left: value ? 22 : 3,
        width: 18, height: 18, borderRadius: "50%",
        background: "#fff", transition: "left 0.2s ease",
      }} />
    </div>
  );

  const Section = ({ title, children }) => (
    <div className="card" style={{ padding: 24, marginBottom: 16 }}>
      <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 20, color: "#7a8ba0", letterSpacing: "0.05em", fontSize: 11, textTransform: "uppercase" }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
    </div>
  );

  const SettingRow = ({ label, desc, children }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
      <div>
        <p style={{ fontSize: 14, color: "#e8f0fe" }}>{label}</p>
        {desc && <p style={{ fontSize: 12, color: "#3d4f62", marginTop: 2 }}>{desc}</p>}
      </div>
      {children}
    </div>
  );

  return (
    <div style={{ padding: "32px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>Settings</h1>
        <p style={{ color: "#7a8ba0", fontSize: 14, marginTop: 4 }}>Customize your NovaMind experience</p>
      </div>

      <Section title="AI Model">
        <SettingRow label="Default Model" desc="The AI model used for new conversations">
          <select
            value={settings.model}
            onChange={e => set("model", e.target.value)}
            className="input-field"
            style={{ padding: "8px 14px", minWidth: 160 }}
          >
            <option value="nova-4-ultra">Nova-4 Ultra</option>
            <option value="nova-4">Nova-4</option>
            <option value="nova-3-fast">Nova-3 Fast</option>
            <option value="nova-3-mini">Nova-3 Mini</option>
          </select>
        </SettingRow>
        <SettingRow label="Streaming Responses" desc="Show AI responses as they generate">
          <Toggle value={settings.streaming} onToggle={() => toggle("streaming")} />
        </SettingRow>
        <SettingRow label="AI Memory" desc="Let NovaMind remember context between sessions">
          <Toggle value={settings.memory} onToggle={() => toggle("memory")} />
        </SettingRow>
      </Section>

      <Section title="Language & Region">
        <SettingRow label="Interface Language" desc="Language for the NovaMind interface">
          <select
            value={settings.language}
            onChange={e => set("language", e.target.value)}
            className="input-field"
            style={{ padding: "8px 14px", minWidth: 160 }}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
          </select>
        </SettingRow>
        <SettingRow label="Tamil Mode" desc="Enhanced support for Tamil language processing">
          <Toggle value={settings.tamilMode} onToggle={() => toggle("tamilMode")} />
        </SettingRow>
      </Section>

      <Section title="Appearance">
        <SettingRow label="Theme">
          <div style={{ display: "flex", gap: 8 }}>
            {["dark", "light", "system"].map(t => (
              <button
                key={t}
                onClick={() => set("theme", t)}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer",
                  border: "1px solid",
                  background: settings.theme === t ? "linear-gradient(135deg, #0ff0c0, #1a8cff)" : "transparent",
                  borderColor: settings.theme === t ? "transparent" : "rgba(255,255,255,0.1)",
                  color: settings.theme === t ? "#070a14" : "#e8f0fe",
                  fontWeight: settings.theme === t ? 600 : 400,
                }}
              >{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>
        </SettingRow>
        <SettingRow label="Font Size">
          <select
            value={settings.fontSize}
            onChange={e => set("fontSize", e.target.value)}
            className="input-field"
            style={{ padding: "8px 14px", minWidth: 130 }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </SettingRow>
      </Section>

      <Section title="Notifications & Sound">
        <SettingRow label="Push Notifications" desc="Get notified about AI responses and updates">
          <Toggle value={settings.notifications} onToggle={() => toggle("notifications")} />
        </SettingRow>
        <SettingRow label="Sound Effects" desc="Play sounds for AI interactions">
          <Toggle value={settings.soundFX} onToggle={() => toggle("soundFX")} />
        </SettingRow>
      </Section>

      <Section title="Voice">
        <SettingRow label="TTS Voice" desc="Voice for text-to-speech output">
          <select
            value={settings.ttsVoice}
            onChange={e => set("ttsVoice", e.target.value)}
            className="input-field"
            style={{ padding: "8px 14px", minWidth: 160 }}
          >
            <option value="nova">Nova (default)</option>
            <option value="echo">Echo</option>
            <option value="shimmer">Shimmer</option>
            <option value="fable">Fable</option>
          </select>
        </SettingRow>
      </Section>

      <Section title="Privacy">
        <SettingRow label="Analytics Sharing" desc="Help improve NovaMind by sharing usage data">
          <Toggle value={settings.analyticsShare} onToggle={() => toggle("analyticsShare")} />
        </SettingRow>
      </Section>

      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
        <button className="btn-ghost" style={{ padding: "10px 24px", borderRadius: 10, fontSize: 13 }}>Reset Defaults</button>
        <button className="btn-primary" style={{ padding: "10px 24px", borderRadius: 10, fontSize: 13 }}>Save Changes</button>
      </div>
    </div>
  );
};

// ─── CONTACT PAGE ─────────────────────────────────────────────
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "general", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [aiDraft, setAiDraft] = useState("");
  const [drafting, setDrafting] = useState(false);

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "billing", label: "Billing & Payments" },
    { value: "technical", label: "Technical Support" },
    { value: "enterprise", label: "Enterprise Sales" },
    { value: "partnership", label: "Partnerships" },
    { value: "press", label: "Press & Media" },
  ];

  const draftWithAI = async () => {
    if (!form.subject) return;
    setDrafting(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Draft a professional but friendly message to NovaMind AI support about: ${form.subject}. Keep it concise, 3-4 sentences. Start directly with the message content.` }],
        }),
      });
      const data = await res.json();
      const draft = data.content?.map(b => b.text || "").join("") || "";
      setForm(prev => ({ ...prev, message: draft }));
      setAiDraft(draft);
    } catch { }
    setDrafting(false);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const contacts = [
    { icon: "📧", label: "Email", value: "hello@novamind.ai" },
    { icon: "🐦", label: "Twitter", value: "@NovaMindAI" },
    { icon: "💼", label: "LinkedIn", value: "NovaMind AI" },
    { icon: "🕐", label: "Support Hours", value: "24/7 for Pro+" },
  ];

  return (
    <div style={{ padding: "32px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p style={{ color: "#7a8ba0", fontSize: 14, marginTop: 4 }}>We'd love to hear from you. Our team responds within 24 hours.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24 }}>
        {/* Contact Info */}
        <div>
          <div className="card" style={{ padding: 24, marginBottom: 16 }}>
            <h3 className="font-display" style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Contact Info</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contacts.map(c => (
                <div key={c.label} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 16 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontSize: 11, color: "#3d4f62" }}>{c.label}</p>
                    <p style={{ fontSize: 13, color: "#e8f0fe" }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 20, background: "rgba(0,255,200,0.04)", borderColor: "rgba(0,255,200,0.15)" }}>
            <p style={{ fontSize: 12, color: "#7a8ba0", lineHeight: 1.6 }}>
              🚀 For enterprise inquiries, our sales team will respond within 4 hours on business days.
            </p>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="card" style={{ padding: 40, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 48 }}>✅</div>
            <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700 }}>Message Sent!</h3>
            <p style={{ color: "#7a8ba0", fontSize: 14 }}>We'll get back to you within 24 hours.</p>
            <button className="btn-primary" onClick={() => setSent(false)} style={{ padding: "10px 24px", borderRadius: 10, fontSize: 13 }}>
              Send Another
            </button>
          </div>
        ) : (
          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              <input
                className="input-field"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                style={{ padding: "12px 16px" }}
              />
              <input
                className="input-field"
                type="email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="Email address"
                style={{ padding: "12px 16px" }}
              />
            </div>

            <select
              className="input-field"
              value={form.subject}
              onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
              style={{ padding: "12px 16px", width: "100%", marginBottom: 12 }}
            >
              {subjects.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>

            <div style={{ position: "relative", marginBottom: 16 }}>
              <textarea
                className="input-field"
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Your message..."
                rows={5}
                style={{ padding: "12px 16px", width: "100%", resize: "none" }}
              />
              <button
                onClick={draftWithAI}
                disabled={drafting}
                style={{
                  position: "absolute", bottom: 8, right: 8,
                  padding: "4px 10px", borderRadius: 6, fontSize: 11,
                  background: "rgba(0,255,200,0.1)", border: "1px solid rgba(0,255,200,0.2)",
                  color: "#0ff0c0", cursor: "pointer",
                }}
              >
                {drafting ? "✨ Drafting..." : "✨ AI Draft"}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email || !form.message}
              className="btn-primary"
              style={{
                width: "100%", padding: "13px", borderRadius: 12, fontSize: 15, fontWeight: 600,
                opacity: !form.name || !form.email || !form.message ? 0.5 : 1,
              }}
            >
              {loading ? "⏳ Sending..." : "Send Message →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN APP ─────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = {
    home: <HomePage setPage={setCurrentPage} />,
    chat: <ChatPage />,
    image: <ImagePage />,
    voice: <VoicePage />,
    dashboard: <DashboardPage setPage={setCurrentPage} />,
    pricing: <PricingPage setPage={setCurrentPage} />,
    profile: <ProfilePage />,
    settings: <SettingsPage />,
    login: <LoginPage setPage={setCurrentPage} />,
    contact: <ContactPage />,
  };

  return (
    <>
      <GlobalStyles />
      <ParticleField />

      <Sidebar
        currentPage={currentPage}
        setPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div style={{ marginLeft: 240, minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <TopBar
          currentPage={currentPage}
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />

        <main style={{ paddingTop: 60 }} key={currentPage} className="animate-fade-up">
          {pages[currentPage]}
        </main>
      </div>
    </>
  );
}
