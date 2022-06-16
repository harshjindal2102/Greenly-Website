var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harshvishujindal02@gmail.com',
    pass: 'jindalharsh21'
  }
});

var mailOptions = {
  from: 'harshvishujindal02@gmail.com',
  to: 'harshvishujindal21@gmail.com',
  subject: 'HJ Greenly',
  text: 'REgistered!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = transporter;