const router = require("express").Router();
const customersController = require("../../controllers/customerController");
var nodemailer = require("nodemailer");
const creds = require("./gmailcredentials");

// Matches with "/api/customers"
router
  .route("/")
  .post(customersController.create)
  .get(customersController.findAll)
  .delete(customersController.remove);

router.route("/:id").delete(customersController.remove);

module.exports = router;
