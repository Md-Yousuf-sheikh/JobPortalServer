const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");

const app = express();

// * Routes variables
const userRoutes = require("./routes/jobs.route");
const authRoutes = require("./routes/auth.route");
const managerRoutes = require("./routes/manager.route");
// * Middleware

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY.....:)");
});

app.use("/jobs", userRoutes);
app.use("/user", authRoutes);
app.use("/manager", managerRoutes);
module.exports = app;
