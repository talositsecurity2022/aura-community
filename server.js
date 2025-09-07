const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This endpoint provides the API key from the environment variable
app.get('/api/key', (req, res) => {
  // --- NEW DIAGNOSTIC LINE ---
  // This will print to the Runtime Logs EVERY TIME your browser requests the key.
  console.log(`[DIAGNOSTIC] /api/key endpoint was hit. Key found: ${!!process.env.GEMINI_API_KEY}`);

  if (process.env.GEMINI_API_KEY) {
    res.json({ apiKey: process.env.GEMINI_API_KEY });
  } else {
    res.status(500).json({ error: "API Key not found on server at time of request." });
  }
});

// This serves your main index.html file
app.use(express.static(path.join(__dirname, '/')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Key available at startup: ${!!process.env.GEMINI_API_KEY}`);
});
