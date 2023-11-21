const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karenouattara2@gmail.com',
    pass: ''
  }
});


let mailOptions = {
  from: 'karenouattara2@gmail.com',
  to: '',
  subject: 'Test d\'e-mail avec Node.js',
  text: 'Ceci est un test d\'e-mail envoyé depuis Node.js!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
