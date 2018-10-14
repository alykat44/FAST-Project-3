// Dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
// const axios = require("axios");
const routes = require("./routes");
const mongoose = require("mongoose");

// app.set("view engine");
// app.set("views", path.join(__dirname, "../client"));
// app.use(express.static(path.join(__dirname, "../client")));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/FAST-project3";

mongoose.Promise = Promise;
// mongoose.set('useNewUrlParser', true);
mongoose.connect(
  MONGODB_URI
);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

app.use("/", routes);

app.use("/customers", routes);

app.use("/dispatch", routes);

app.use("/sms", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
