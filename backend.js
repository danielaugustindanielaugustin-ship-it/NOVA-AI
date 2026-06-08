// backend.js - Complete NOVA AI Backend Server
// Run with: node backend.js
// Install dependencies first: npm install express cors body-parser jsonwebtoken dotenv axios

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'nova-mind-secret-key-2024';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const STABILITY_API_KEY = process.env.STABILITY_API_KEY || '';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory database (replace with MongoDB/PostgreSQL for production)
const users = [];
const chatHistory = [];
const imageHistory = [];
const userUsage = new Map();

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Access token required' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Helper: Update usage tracking
function updateUsage(userId, type = 'chat') {
  const key = `${userId}:${type}`;
  const current = userUsage.get(key) || 0;
  userUsage.set(key, current + 1);
}

function getUsage(userId) {
  const chatKey = `${userId}:chat`;
  const imageKey = `${userId}:image`;
  const voiceKey = `${userId}:voice`;
  
  return {
    chat: userUsage.get(chatKey) || 0,
    image: userUsage.get(imageKey) || 0,
    voice: userUsage.get(voiceKey) || 0,
    total: (userUsage.get(chatKey) || 0) + (userUsage.get(imageKey) || 0) + (userUsage.get(voiceKey) || 0)
  };
}

// ==================== AUTH ENDPOINTS ====================

app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password required' });
    }
    
    const existing = users.find(u => u.email === email);
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: Buffer.from(password).toString('base64'), // Simple encryption (use bcrypt in production)
      plan: 'free',
      createdAt: new Date().toISOString()
    };
    
    users.push(user);
    userUsage.set(`${user.id}:chat`, 0);
    userUsage.set(`${user.id}:image`, 0);
    userUsage.set(`${user.id}:voice`, 0);
    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user.id, name: user.name, email: user.email, plan: user.plan }
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    const user = users.find(u => u.email === email && u.password === Buffer.from(password).toString('base64'));
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, plan: user.plan }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const usage = getUsage(req.user.id);
    
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: user.plan,
        createdAt: user.createdAt
      },
      usage
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user info', details: error.message });
  }
});

// ==================== CHAT ENDPOINTS ====================

app.post('/api/chat', authenticateToken, async (req, res) => {
  try {
    const { prompt, history = [] } = req.body;
    
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt required' });
    }
    
    updateUsage(req.user.id, 'chat');
    const usage = getUsage(req.user.id);
    
    // Check rate limits
    const planLimits = { free: 100, pro: 1000, ultra: 10000 };
    if (usage.total >= planLimits[req.user.plan]) {
      return res.status(429).json({ error: 'Usage limit reached. Upgrade your plan.' });
    }
    
    let answer;
    
    // Use OpenAI if API key is available
    if (OPENAI_API_KEY) {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are NOVA AI, a helpful assistant from NovaMind AI platform. Provide clear, accurate, and helpful responses.' },
              ...history,
              { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 1000
          },
          {
            headers: {
              'Authorization': `Bearer ${OPENAI_API_KEY}`,
              'Content-Type': 'application/json'
            }
          }
        );
        answer = response.data.choices[0].message.content;
      } catch (apiError) {
        console.error('OpenAI API error:', apiError.message);
        answer = generateFallbackAnswer(prompt);
      }
    } else {
      answer = generateFallbackAnswer(prompt);
    }
    
    // Save to history
    const chatEntry = {
      id: Date.now().toString(),
      userId: req.user.id,
      prompt,
      answer,
      timestamp: new Date().toISOString()
    };
    chatHistory.push(chatEntry);
    
    res.json({
      answer,
      usage,
      chatId: chatEntry.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Chat failed', details: error.message });
  }
});

app.get('/api/chat/history', authenticateToken, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const userHistory = chatHistory
      .filter(c => c.userId === req.user.id)
      .slice(-limit)
      .reverse();
    
    res.json({ history: userHistory });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history', details: error.message });
  }
});

// ==================== IMAGE GENERATION ENDPOINTS ====================

app.post('/api/image/generate', authenticateToken, async (req, res) => {
  try {
    const { prompt, style = 'cinematic' } = req.body;
    
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt required' });
    }
    
    updateUsage(req.user.id, 'image');
    const usage = getUsage(req.user.id);
    
    // Check rate limits
    const planLimits = { free: 10, pro: 100, ultra: 1000 };
    if (usage.image >= planLimits[req.user.plan]) {
      return res.status(429).json({ error: 'Image generation limit reached. Upgrade your plan.' });
    }
    
    let imageUrl;
    let imageData;
    
    // Use Stability AI if API key is available
    if (STABILITY_API_KEY) {
      try {
        const response = await axios.post(
          'https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image',
          {
            text_prompts: [{ text: prompt }],
            cfg_scale: 7,
            height: 720,
            width: 720,
            samples: 1,
            steps: 30
          },
          {
            headers: {
              'Authorization': `Bearer ${STABILITY_API_KEY}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            responseType: 'json'
          }
        );
        
        imageData = response.data.artifacts[0].base64;
        imageUrl = `data:image/png;base64,${imageData}`;
      } catch (apiError) {
        console.error('Stability AI API error:', apiError.message);
        imageData = generateFallbackImage(prompt, style);
        imageUrl = `data:image/png;base64,${imageData}`;
      }
    } else {
      imageData = generateFallbackImage(prompt, style);
      imageUrl = `data:image/png;base64,${imageData}`;
    }
    
    // Save to history
    const imageEntry = {
      id: Date.now().toString(),
      userId: req.user.id,
      prompt,
      style,
      imageData,
      timestamp: new Date().toISOString()
    };
    imageHistory.push(imageEntry);
    
    res.json({
      imageUrl,
      usage,
      imageId: imageEntry.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Image generation failed', details: error.message });
  }
});

app.get('/api/image/history', authenticateToken, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const userHistory = imageHistory
      .filter(i => i.userId === req.user.id)
      .slice(-limit)
      .reverse();
    
    res.json({ history: userHistory });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image history', details: error.message });
  }
});

// ==================== VOICE ENDPOINTS ====================

app.post('/api/voice/transcribe', authenticateToken, async (req, res) => {
  try {
    const { audioData } = req.body; // Base64 audio
    
    if (!audioData) {
      return res.status(400).json({ error: 'Audio data required' });
    }
    
    updateUsage(req.user.id, 'voice');
    const usage = getUsage(req.user.id);
    
    // Browser-based speech recognition is preferred, but this is a fallback
    // For server-side transcription, you'd use Whisper API or similar
    res.json({
      message: 'Client-side speech recognition recommended',
      usage
    });
  } catch (error) {
    res.status(500).json({ error: 'Transcription failed', details: error.message });
  }
});

app.post('/api/voice/synthesize', authenticateToken, async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text required' });
    }
    
    updateUsage(req.user.id, 'voice');
    const usage = getUsage(req.user.id);
    
    // Browser-based speech synthesis is preferred
    res.json({
      message: 'Client-side speech synthesis recommended',
      usage
    });
  } catch (error) {
    res.status(500).json({ error: 'Synthesis failed', details: error.message });
  }
});

// ==================== DASHBOARD ENDPOINTS ====================

app.get('/api/dashboard/stats', authenticateToken, async (req, res) => {
  try {
    const usage = getUsage(req.user.id);
    const user = users.find(u => u.id === req.user.id);
    
    const userHistory = chatHistory.filter(c => c.userId === req.user.id);
    const imageUserHistory = imageHistory.filter(i => i.userId === req.user.id);
    
    res.json({
      usage,
      plan: user.plan,
      totalMessages: userHistory.length,
      totalImages: imageUserHistory.length,
      accountAge: Math.floor((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats', details: error.message });
  }
});

app.post('/api/dashboard/tip', authenticateToken, async (req, res) => {
  try {
    const usage = getUsage(req.user.id);
    const tips = [
      'Add project folders so users can save related chats, images, and voice notes together.',
      'Create prompt presets for business, coding, Tamil translation, image design, and student study workflows.',
      'Add usage limits, export history, and a backend API proxy before production release.',
      'Turn image prompts into video storyboards for a future video generation feature.',
      'Implement saved prompts and templates for recurring tasks.',
      'Add collaboration features for team usage on Ultra plan.'
    ];
    
    const tip = tips[Math.floor(Math.random() * tips.length)];
    
    res.json({ tip, usage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate tip', details: error.message });
  }
});

// ==================== PRICING ENDPOINTS ====================

app.get('/api/pricing', async (req, res) => {
  try {
    const plans = [
      {
        name: 'Free',
        price: 0,
        features: ['Basic chat', '10 images/month', 'Voice demo', '7-day history']
      },
      {
        name: 'Pro',
        price: 19,
        features: ['Advanced chat', '100 images/month', 'Full voice tools', 'Unlimited history', 'Priority support']
      },
      {
        name: 'Ultra',
        price: 49,
        features: ['Best models', '1000 images/month', 'Team collaboration', 'Analytics', 'API access', '24/7 support']
      }
    ];
    
    res.json({ plans });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pricing', details: error.message });
  }
});

app.post('/api/upgrade', authenticateToken, async (req, res) => {
  try {
    const { plan } = req.body;
    
    if (!['pro', 'ultra'].includes(plan)) {
      return res.status(400).json({ error: 'Invalid plan' });
    }
    
    const userIndex = users.findIndex(u => u.id === req.user.id);
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    users[userIndex].plan = plan;
    
    res.json({ message: `Upgraded to ${plan} plan`, plan });
  } catch (error) {
    res.status(500).json({ error: 'Upgrade failed', details: error.message });
  }
});

// ==================== CONTACT ENDPOINTS ====================

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message required' });
    }
    
    // In production, send email via SendGrid/Nodemailer
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ message: 'Message sent successfully. We\'ll respond within 24 hours.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
});

// ==================== HELPER FUNCTIONS ====================

function generateFallbackAnswer(prompt) {
  const clean = prompt.trim();
  return [
    'NOVA answer:',
    '',
    'Main idea: ' + clean,
    'Recommended action: break it into a goal, inputs, output format, and deadline.',
    'For a real AI backend, connect this chat button to your server endpoint and keep API keys private.',
    'Extra feature idea: save this prompt into project history and allow image or voice generation from the same prompt.'
  ].join('\n');
}

function generateFallbackImage(prompt, style) {
  // Create a simple base64 encoded placeholder image (1x1 pixel)
  // In production, use actual image generation
  const canvas = require('canvas');
  const c = new canvas.Canvas(720, 720);
  const ctx = c.getContext('2d');
  
  const colors = {
    cinematic: ['#071018', '#0ff0c0', '#f5a623'],
    anime: ['#171033', '#ff4b6e', '#1a8cff'],
    product: ['#101827', '#e8f0fe', '#0ff0c0'],
    editorial: ['#21151c', '#f5a623', '#7b5ea7']
  }[style] || ['#071018', '#0ff0c0', '#1a8cff'];
  
  const gradient = ctx.createLinearGradient(0, 0, 720, 720);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.52, colors[1]);
  gradient.addColorStop(1, colors[2]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 720, 720);
  
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = 'bold 40px Arial';
  ctx.fillText('NOVA AI IMAGE', 42, 545);
  ctx.font = '20px Arial';
  ctx.fillText(prompt.substring(0, 50), 42, 585);
  
  return c.toBuffer('image/png').toString('base64');
}

// ==================== ERROR HANDLING ====================

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`🚀 NOVA AI Backend running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available:`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
  console.log(`   GET  /api/auth/me`);
  console.log(`   POST /api/chat`);
  console.log(`   GET  /api/chat/history`);
  console.log(`   POST /api/image/generate`);
  console.log(`   GET  /api/image/history`);
  console.log(`   POST /api/voice/transcribe`);
  console.log(`   POST /api/voice/synthesize`);
  console.log(`   GET  /api/dashboard/stats`);
  console.log(`   POST /api/dashboard/tip`);
  console.log(`   GET  /api/pricing`);
  console.log(`   POST /api/upgrade`);
  console.log(`   POST /api/contact`);
  console.log(`\n🔑 Set environment variables in .env file:`);
  console.log(`   OPENAI_API_KEY=your_openai_key`);
  console.log(`   STABILITY_API_KEY=your_stability_key`);
  console.log(`   JWT_SECRET=your_secret_key`);
  console.log(`   PORT=3000`);
});

module.exports = app;
