# Nova AI Studio 2026

A standalone browser demo for an AI creator app with:

- Instant answer generation
- AI photo-style canvas generation with PNG download
- AI video-style canvas animation with WebM export

Open `index.html` directly in a browser. No install step is required.

## Files

- `index.html` - app layout
- `styles.css` - responsive interface styling
- `script.js` - answer, image, animation, and export logic

## Connect Real AI APIs

The current version runs locally so it works without API keys. To use real AI models, replace these functions in `script.js`:

- `buildInstantAnswer()` for chat/answer API calls
- `drawPhoto()` for image generation API results
- `generateVideo()` for video generation job creation and polling

Use a small backend for API calls so private API keys are never exposed in the browser.
