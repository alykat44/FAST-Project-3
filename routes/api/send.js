var nodemailer = require("nodemailer");
const router = require("express").Router();
const creds = require("./gmailcredentials");

router.post("/send", function(req, res, next) {
  var transport = {
    host: "smtp.gmail.com",
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  const mailOptions = {
    from: `FAST`,
    to: req.body.email,
    subject: "Hey " + req.body.name,
    text:
      `We are working fast to get you moving. We are confirming that your Issue is ` +
      "(" +
      req.body.issue +
      ")" +
      ".",
    replyTo: `israelrojasshema@gmail.com`
  };
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
});

module.exports = router;