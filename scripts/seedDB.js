const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_t631vvjm:heroku_t631vvjm@ds137703.mlab.com:37703/heroku_t631vvjm"
);

const CustomerSeed = [
  {
    Name: "Joe B",
    Phone: 9133332988,
    Email: "example@gmail.com",
    Location: "KS",
    Issue: "Tire",
    Comments: "North Interstate"
    // Date: new Date(Date.now())
  }
];

db.Customer.remove({})
  .then(() => db.Customer.collection.insertMany(CustomerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
