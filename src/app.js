const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// Static landing page
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/register.html'));
});

// Route auth
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

// Route campaign
const campaignRoutes = require("./routes/campaign.routes");
app.use("/api/campaigns", campaignRoutes);
app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));

// Route dashboard
const dashboardRoutes = require('./routes/dashboard.routes');
app.use("/api/dashboard", dashboardRoutes);

module.exports = app;