const express = require('express');
const app = express();

// 🔥 CORS fix
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/api/products', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=120');

  res.json({
    products: ["shoe", "shirt", "hat"],
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});