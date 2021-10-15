const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  secure: false,
  requireTLS: true,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: "krauchankakiryl@gmail.com",
    pass: "krav4enkokirill20028032",
  },
});

function send(message) {
  transport.sendMail({
    from: "krauchankakiryl@gmail.com",
    to: "krauchankamikita@gmail.com",
    subject: "Test mail",
    text: message,
  });
}

module.exports = send;