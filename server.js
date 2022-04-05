const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path'); 
const app = express();

require('dotenv').config();

app.use(bodyparser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.post('/send', (req, res) => {
  const { name, email, number, message } = req.body;

  const mailOptions = {
      from: `${name} ${email}`,
      to: 'administration@thegrovenursery.co.uk',
      subject: "New Message from Contact Form",
      text: `Name: ${name}\nNumber: ${number == "" ? 'n/a' : number}\nEmail: ${email}\n\n${message}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) res.error('failed to submit message');
      else res.sendStatus(200);
  });
 
})

app.listen(process.env.EXPRESS_PORT, () => console.log(`App listening on port: ${process.env.EXPRESS_PORT}`));

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 465,
  secure: true,
  auth:
  {
      type: "login",
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
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