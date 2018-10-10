const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  Name: { type: String, required: true },
  Phone: { type: Number, required: true },
  Email: String,
  Location: String,
  Issue: String,
  Message: String
  // Date: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
