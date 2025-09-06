const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This endpoint securely provides the API key from the environment variable
// that Northflank injects.
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.GEMINI_API_KEY });
});

// This serves your main index.html file and other static assets.
app.use(express.static(path.join(__dirname, '/')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
