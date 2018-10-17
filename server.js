// Dependencies
//fix me
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const nodemailer = require("nodemailer");
const routes = require("./routes");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
// const dbConnection = require('./models')
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const user = require("./routes/user");
const uri = "mongodb://localhost:27017/your-app-name";

app.set("view engine");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/FAST-project3";

mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes);
app.use("/user", user);
app.use("/customers", routes);
app.use("/dispatch", routes);
app.use("/sms", routes);

app.use("/send", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
