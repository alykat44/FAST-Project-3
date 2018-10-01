// Dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8001;
const app = express();
const axios = require("axios");
const router = require("router");
const mongoose = require("mongoose");


app.set('view engine');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/FAST-project3";


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

app.use("/", router);


module.exports=app;