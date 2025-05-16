const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// Static landing page
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route auth
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

// Route lainnya (campaign, dsb)
const campaignRoutes = require("./routes/campaign.routes");
app.use("/api/campaigns", campaignRoutes);

module.exports = app;