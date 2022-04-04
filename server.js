const bodyparser = require('body-parser')
const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path'); 
const app = express();

app.use(bodyparser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.post('/send', (req, res) => {
  const { name, email, number, message } = req.body;

  const mailOptions = {
      from: `${name} ${email}`,
      to: 'contact@thegrovenursery.co.uk',
      subject: "New Message from Contact Form",
      text: `Name: ${name}\nNumber: ${number == "" ? 'n/a' : number}\nEmail: ${email}\n\n${message}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) res.error('failed to submit message');
      else res.sendStatus(200);
  });
 
})

app.listen(7710, () => console.log('App listening on port: 7710'));

const transporter = nodemailer.createTransport({
  host: "mail.thegrovenursery.co.uk",
  port: 465,
  secure: true,
  auth:
  {
      type: "login",
      user: "contact@thegrovenursery.co.uk",
      pass: "zCwJT!GCF"
  },
  tls: {
      rejectUnauthorized: false
  }
});

transporter.verify(function (error, success) 
{
  if (error) {
    console.log(error);
  } else {
    console.log("Mail Server running");
  }
});