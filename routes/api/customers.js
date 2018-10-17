const router = require("express").Router();
const customersController = require("../../controllers/customerController");
var nodemailer = require("nodemailer");
const creds = require("./gmailcredentials");

 lobster
//Matches with "/api/customers"
=======
// Matches with "/api/customers"
master
router
  .route("/")
  .post(customersController.create)
  .get(customersController.findAll);

module.exports = router;
