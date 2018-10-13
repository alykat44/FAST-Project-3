const router = require("express").Router();
const customersController = require("../../controllers/customerController");

const transporter = require("./transporter");
// Matches with "/api/customers"
router
  .route("/")
  .post(customersController.create)
  .get(customersController.findAll);

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: "FAST",
    to: "israelrojasshema@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

// router
//   .route("/customers")
//   .post(customersController.create)
//   .get(customersController.findAll);

// router
//   .route("/:Issue")
//   .get(customersController.findById)
//   .put(customersController.update)
//   .delete(customersController.remove);

module.exports = router;
