const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./index");
// JobPortalServer
//database connection
mongoose.connect(process.env.DATABASE_LOCAl).then(() => {
  console.log(`Database connection is successful`.white.bold);
});
// server
const port = process.env.PORT || 8000;
// route
app.listen(port, () => {
  console.log(`App is running in port ${port}`.yellow.bold);
});
