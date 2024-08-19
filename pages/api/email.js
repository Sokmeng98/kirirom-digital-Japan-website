import nodemailer from "nodemailer";

const handler = function (req, res) {
  if (req.method === "POST") {
    if (!req.body.email) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: ` <p>First Name: ${req.body.firstName}</p>
              <p>Last Name: ${req.body.lastName}</p>
              <p>Company Name: ${req.body.companyName}</p>
              <p>Email: ${req.body.email}</p>
              <p>Phone Number: ${req.body.phoneNumber}</p>
              <p>${req.body.message}</p>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        res.send(400);
      }
    });

    res.status(201).json({ message: "Successfully sent message!" });
  } else {
    res.send(405);
  }
};

export default handler;
