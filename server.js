const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

const app = require("./index.js");

mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`Database connection is successful 🛢`.red.bold);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
