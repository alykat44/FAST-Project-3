const bodyParser = require("body-parser");
const router = require("express").Router();
var Nexmo = require('nexmo');
 
var nexmo = new Nexmo({
    apiKey: 'c42e7cf3',
    apiSecret: 'qBhKN2d1Kw1En3SJ',
    applicationId: '7077b5a3-133e-4d72-9f39-0b9436dde103',
    privateKey: 'a8996d64031adbf',
  }, options);

  router.get('/sms', (req, res) => {
    // res.send(req.body);
    // console.log(req.body);
    console.log(req);
    console.log(req.body)
    const { number, text } = req.body;
  
    nexmo.message.sendSms(
      '17858449914', number, text, { type: 'unicode' },
      (err) => {
        if(err) {
          console.log('nexmo error' + err);
        } 
      }
    );
  });

  module.exports = nexmo;