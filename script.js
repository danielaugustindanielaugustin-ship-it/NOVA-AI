const panels = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll(".nav-item");
const answerPrompt = document.querySelector("#answerPrompt");
const answerOutput = document.querySelector("#answerOutput");
const photoCanvas = document.querySelector("#photoCanvas");
const videoCanvas = document.querySelector("#videoCanvas");
const photoCtx = photoCanvas.getContext("2d");
const videoCtx = videoCanvas.getContext("2d");

let videoState = {
  prompt: "A solar-powered AI city waking up at sunrise",
  motion: "orbit",
  startedAt: performance.now(),
  particles: createParticles("A solar-powered AI city waking up at sunrise", 90),
};

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((button) => button.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));
    item.classList.add("active");
    document.querySelector(`#${item.dataset.panel}`).classList.add("active");
  });
});

document.querySelector("#clearAll").addEventListener("click", () => {
  answerPrompt.value = "";
  document.querySelector("#photoPrompt").value = "";
  document.querySelector("#videoPrompt").value = "";
  answerOutput.textContent = "Your answer will appear here.";
  drawPhoto("Future AI creative studio", "cinematic");
  generateVideo("A solar-powered AI city waking up at sunrise", "orbit");
});

document.querySelector("#answerBtn").addEventListener("click", () => {
  const prompt = answerPrompt.value.trim();
  answerOutput.textContent = buildInstantAnswer(prompt);
});

document.querySelector("#photoBtn").addEventListener("click", () => {
  const prompt = document.querySelector("#photoPrompt").value.trim() || "Future AI creative studio";
  const style = document.querySelector("#photoStyle").value;
  drawPhoto(prompt, style);
});

document.querySelector("#downloadPhoto").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "nova-ai-photo.png";
  link.href = photoCanvas.toDataURL("image/png");
  link.click();
});

document.querySelector("#videoBtn").addEventListener("click", () => {
  const prompt = document.querySelector("#videoPrompt").value.trim() || "A solar-powered AI city waking up at sunrise";
  const motion = document.querySelector("#motionStyle").value;
  generateVideo(prompt, motion);
});

document.querySelector("#recordVideo").addEventListener("click", async (event) => {
  const button = event.target;

  button.disabled = true;
  button.textContent = "Exporting...";

  try {
    await recordCanvas(videoCanvas, 4000);
  } catch (error) {
    alert(error.message);
  } finally {
    button.disabled = false;
    button.textContent = "Export 4s WebM";
  }
});

function buildInstantAnswer(prompt) {
  if (!prompt) {
    return "Type a question first. Example: Create a business plan for an AI photo and video generator.";
  }

  const topic = prompt.replace(/\s+/g, " ").slice(0, 140);
  return [
    `Fast answer for: ${topic}`,
    "",
    "1. Main idea: build one creator workspace where the user can ask, generate images, and generate short videos without changing tools.",
    "2. 2026 features to include: instant chat answers, photo generation, video generation, prompt presets, style controls, download/export, project history, and safe content checks.",
    "3. Product flow: user enters a prompt, chooses answer/photo/video, previews the result, edits the prompt, then exports the final asset.",
    "4. Tech upgrade path: connect the buttons to real AI APIs from a small backend, store generated files in cloud storage, and add accounts when you need history.",
    "",
    "Suggested next step: replace the local demo generator in script.js with your preferred AI model endpoint.",
  ].join("\n");
}

function drawPhoto(prompt, style) {
  const seed = hash(prompt + style);
  const palette = paletteFor(style);
  const width = photoCanvas.width;
  const height = photoCanvas.height;
  const gradient = photoCtx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, palette[0]);
  gradient.addColorStop(0.48, palette[1]);
  gradient.addColorStop(1, palette[2]);
  photoCtx.fillStyle = gradient;
  photoCtx.fillRect(0, 0, width, height);

  drawGeneratedScene(photoCtx, width, height, prompt, seed, palette, 0);
  drawCaption(photoCtx, prompt, style.toUpperCase(), width, height);
}

function generateVideo(prompt, motion) {
  videoState = {
    prompt,
    motion,
    startedAt: performance.now(),
    particles: createParticles(prompt + motion, 130),
  };
}

function animateVideo(now) {
  const t = (now - videoState.startedAt) / 1000;
  const palette = paletteFor(videoState.motion);
  const width = videoCanvas.width;
  const height = videoCanvas.height;
  const gradient = videoCtx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, palette[0]);
  gradient.addColorStop(0.55, palette[1]);
  gradient.addColorStop(1, "#0d1116");
  videoCtx.fillStyle = gradient;
  videoCtx.fillRect(0, 0, width, height);

  drawGeneratedScene(videoCtx, width, height, videoState.prompt, hash(videoState.prompt), palette, t);
  drawParticles(videoCtx, videoState.particles, videoState.motion, t, width, height, palette);
  drawCaption(videoCtx, videoState.prompt, `${videoState.motion.toUpperCase()} VIDEO`, width, height);
  requestAnimationFrame(animateVideo);
}

function drawGeneratedScene(ctx, width, height, prompt, seed, palette, time) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";

  for (let i = 0; i < 18; i++) {
    const x = random(seed + i) * width;
    const y = random(seed + i * 7) * height;
    const radius = 38 + random(seed + i * 13) * 160;
    ctx.fillStyle = hexToRgba(palette[i % palette.length], 0.18);
    ctx.beginPath();
    ctx.arc(x + Math.sin(time + i) * 18, y + Math.cos(time * 0.8 + i) * 18, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalCompositeOperation = "source-over";
  drawHorizon(ctx, width, height, seed, palette, time);
  drawPromptGlyphs(ctx, prompt, width, height, seed, time);
  ctx.restore();
}

function drawHorizon(ctx, width, height, seed, palette, time) {
  const baseY = height * 0.66;
  ctx.fillStyle = "rgba(5, 8, 12, 0.72)";
  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(0, baseY);

  for (let x = 0; x <= width; x += 48) {
    const y = baseY - random(seed + x) * 210 - Math.sin(time + x * 0.02) * 10;
    ctx.lineTo(x, y);
    ctx.lineTo(x + 30, y + random(seed + x + 5) * 50);
  }

  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fill();

  for (let x = 30; x < width; x += 70) {
    ctx.fillStyle = hexToRgba(palette[(x / 70) % palette.length | 0], 0.74);
    ctx.fillRect(x, baseY - 30 - random(seed + x) * 170, 8, 8);
  }
}

function drawPromptGlyphs(ctx, prompt, width, height, seed, time) {
  const words = prompt.split(/\s+/).filter(Boolean).slice(0, 9);
  const cx = width * 0.5;
  const cy = height * 0.36;

  words.forEach((word, index) => {
    const angle = (Math.PI * 2 * index) / Math.max(words.length, 1) + time * 0.18;
    const radius = 70 + index * 15;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius * 0.55;
    ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
    ctx.font = `${18 + (hash(word) % 12)}px Segoe UI, sans-serif`;
    ctx.fillText(word.slice(0, 12), x, y);
  });
}

function drawCaption(ctx, prompt, label, width, height) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.48)";
  ctx.fillRect(28, height - 116, width - 56, 82);
  ctx.fillStyle = "#f7f2e8";
  ctx.font = "700 20px Segoe UI, sans-serif";
  ctx.fillText(label, 48, height - 78);
  ctx.font = "18px Segoe UI, sans-serif";
  wrapCanvasText(ctx, prompt, 48, height - 48, width - 96, 24);
}

function drawParticles(ctx, particles, motion, time, width, height, palette) {
  particles.forEach((particle, index) => {
    let x = particle.x * width;
    let y = particle.y * height;

    if (motion === "orbit") {
      x += Math.cos(time + index) * 42;
      y += Math.sin(time + index) * 24;
    } else if (motion === "rise") {
      y = ((particle.y * height - time * particle.speed * 70) % height + height) % height;
    } else if (motion === "wave") {
      x += Math.sin(time * particle.speed + particle.y * 10) * 90;
    } else {
      x += Math.cos(time * 2 + index) * time * 8;
      y += Math.sin(time * 2 + index) * time * 8;
    }

    ctx.fillStyle = hexToRgba(palette[index % palette.length], 0.85);
    ctx.beginPath();
    ctx.arc(x, y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function createParticles(seedText, count) {
  const seed = hash(seedText);
  return Array.from({ length: count }, (_, index) => ({
    x: random(seed + index * 3),
    y: random(seed + index * 9),
    size: 1.5 + random(seed + index * 15) * 5,
    speed: 0.4 + random(seed + index * 21) * 1.8,
  }));
}

function paletteFor(style) {
  const palettes = {
    cinematic: ["#10202a", "#24d6c8", "#ffb84d"],
    anime: ["#1d1740", "#ff6f91", "#5aa7ff"],
    product: ["#101820", "#d3ef5d", "#f7f2e8"],
    editorial: ["#271b22", "#ffb84d", "#24d6c8"],
    orbit: ["#11171f", "#24d6c8", "#ff6f91"],
    rise: ["#151b1f", "#ffb84d", "#d3ef5d"],
    wave: ["#132127", "#5aa7ff", "#24d6c8"],
    burst: ["#21151a", "#ff6f91", "#ffb84d"],
  };

  return palettes[style] || palettes.cinematic;
}

function hash(text) {
  let value = 2166136261;
  for (let i = 0; i < text.length; i++) {
    value ^= text.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function random(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/);
  let line = "";

  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });

  ctx.fillText(line, x, y);
}

function recordCanvas(canvas, duration) {
  return new Promise((resolve, reject) => {
    if (!canvas.captureStream) {
      throw new Error("Video export is not supported in this browser.");
    }

    if (!window.MediaRecorder) {
      throw new Error("WebM recording is not supported in this browser.");
    }

    const mimeType = MediaRecorder.isTypeSupported("video/webm")
      ? "video/webm"
      : "";
    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    const chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };
    recorder.onerror = () => {
      reject(new Error("Video export failed. Please try a different browser."));
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType || "video/webm" });
      const link = document.createElement("a");
      link.download = "nova-ai-video.webm";
      link.href = URL.createObjectURL(blob);
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      resolve();
    };

    recorder.start();
    setTimeout(() => recorder.stop(), duration);
  });
}

drawPhoto("Future AI creative studio", "cinematic");
requestAnimationFrame(animateVideo);
