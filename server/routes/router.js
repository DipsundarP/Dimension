const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
  const { fullName, email, countryCode, phone, message } = req.body;

  if (!fullName || !email || !countryCode || !phone) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `<${process.env.EMAIL}>`,
      to: email,
      subject: "Thank you for getting in touch!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #333;">Hi ${fullName},</h2>
          <p>Thank you for contacting us! Here’s what you submitted:</p>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Country Code:</strong> ${countryCode}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${
              message ? message : "No message provided"
            }</li>
          </ul>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return res.status(201).json({
      status: 201,
      message: "Email sent successfully",
      info,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      status: 500,
      message: "Failed to send email",
      error,
    });
  }
});


router.post("/contact", async (req, res) => {
  const { firstName, lastName, phoneNumber, emailAddress, message } = req.body;

  // Validate fields
  if (!firstName || !lastName || !phoneNumber || !emailAddress || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: emailAddress, // sending email to the user's email address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email Address:</strong> ${emailAddress}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return res
      .status(201)
      .json({ status: 201, message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Failed to send email", error });
  }
});

router.post("/enquiry", async (req, res) => {
  const { name, email, phone, date, destination, guest } = req.body;

  if (!name || !email || !phone || !date || !destination || !guest) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // your gmail address (admin)
        pass: process.env.PASSWORD, // your gmail password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL, // Admin email
      to: email, // <-- send to client email
      subject: "Thank you for your Enquiry!",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your enquiry with the following details:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Travel Date:</strong> ${date}</li>
          <li><strong>Destination:</strong> ${destination}</li>
          <li><strong>Number of Guests:</strong> ${guest}</li>
        </ul>
        <p>We will contact you shortly to assist you with your travel plans.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Your Company Name</strong></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation Email sent to client: " + info.response);

    return res
      .status(201)
      .json({
        status: 201,
        message: "Confirmation email sent to client",
        info,
      });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Failed to send email", error });
  }
});





module.exports = router;
