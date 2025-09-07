const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// --- DIAGNOSTIC LINE ---
// This will print a definitive message to the Northflank Runtime Logs.
console.log("Server starting... Checking for API Key:", process.env.GEMINI_API_KEY ? "Found" : "NOT FOUND");

// This endpoint provides the API key from the environment variable
app.get('/api/key', (req, res) => {
  // Check if the key exists before sending it
  if (process.env.GEMINI_API_KEY) {
    res.json({ apiKey: process.env.GEMINI_API_KEY });
  } else {
    res.status(500).json({ error: "API Key not found on server." });
  }
});

// This serves your main index.html file and other static assets.
app.use(express.static(path.join(__dirname, '/')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
