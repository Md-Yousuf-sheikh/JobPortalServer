const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

// route
// const productRoute = require("./routes/product.routs");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database
// app.use("/api/v1/product", productRoute);

module.exports = app;
