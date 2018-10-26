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
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user');
const accountSid = 'AC9be4c10a22363fe6a4958f5f30b7ddc5'; 
const authToken = 'a0839055e32cb426ce45dd1f41fad469'; 
const client = require('twilio')(accountSid, authToken); 
// const uri = 'mongodb://localhost:27017/FAST-project3';
const uri = "mongodb://wustix:otis13jhawkhalo@ds141623.mlab.com:41623/fredtow";

app.set("view engine");
app.set("views", path.join(__dirname, "../client"));
// app.use(express.static(path.join(__dirname, "../client")));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://wustix:otis13jhawkhalo@ds141623.mlab.com:41623/fredtow";

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
app.use("/user", user)
app.use("/customers", routes);
app.use("/dispatch", routes);


app.post('/sendsms', bodyParser.json(), (req, res) => {
  client.messages
    .create({
      body: req.body.text,
      from: '+17857894312',
      to: req.body.number
    })
    .then(message => console.log(message.sid))
    .done();
})

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;



