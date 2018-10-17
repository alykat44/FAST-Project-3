const router = require("express").Router();
const customersController = require("../../controllers/customerController");
var nodemailer = require("nodemailer");
const creds = require("./gmailcredentials");

//Matches with "/api/customers"
router
  .route("/")
  .post(customersController.create)
  .get(customersController.findAll);

module.exports = router;
