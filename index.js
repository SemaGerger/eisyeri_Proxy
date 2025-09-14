const express = require("express");
const axios = require("axios");
const cors = require("cors");
const xml2js = require("xml2js");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_USERNAME = process.env.API_USERNAME;
const API_PASSWORD = process.env.API_PASSWORD;

let sessionId = null;
let sessionExpiry = null;

// --- login ve fetchPartners fonksiyonları burada ---

// Mevcut API endpoint
app.get("/api/partners", async (req, res) => {
  // ... senin mevcut kodun
});

// ✅ BURAYA EKLE
app.get("/api/partners/fields", async (req, res) => {
  try {
    const data = await fetchPartners();
    const rows = data.Rows || data.rows || [];
    if (!rows.length) return res.json([]);

    const keys = Object.keys(rows[0]);
    res.json(keys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Alanlar alınamadı" });
  }
});

// Server başlat
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} üzerinde çalışıyor`);
});
