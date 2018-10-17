// Dependencies
//fix me
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const routes = require("./routes");
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session')
// const dbConnection = require('./models')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user');
const uri = 'mongodb://localhost:27017/your-app-name'

app.set("view engine");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/FAST-project3";

mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
mongoose.connect(
  MONGODB_URI
);

// Define middleware here
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(uri).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('Connected to Mongo');

  },
  err => {
    /** handle initial connection error */
    console.log('error connecting to Mongo: ')
    console.log(err);

  }
);

// Sessions
app.use(
  session({
    secret: 'rock-chalk', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, //required
    saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes);
app.use("/user", user)
app.use("/customers", routes);
app.use("/dispatch", routes);
app.use("/sms", routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
