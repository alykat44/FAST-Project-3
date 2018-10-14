const router = require("express").Router();
const smsRoute = require("./sms");


router.use("/sms", smsRoute);
console.log('sms route hit');

module.exports = router;
