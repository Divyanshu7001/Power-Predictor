import nodemailer from "nodemailer";
import "dotenv/config";

export async function sendMail(receiverEmail, nameOfReceiver, otpNumber) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  const backgroundColor = "#4CAF50";

  const mailOptions = {
    from: process.env.GMAIL,
    to: receiverEmail,
    subject: `One Time Password for Account Creation: Power Predictor`,
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: ${backgroundColor};
              color: #ffffff;
              text-align: center;
              padding: 10px 0;
            }
            .content {
              font-size: 16px;
              line-height: 1.6;
              color: #333333;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              text-align: center;
              color: #999999;
            }
            @media screen and (max-width: 600px) {
              .container {
                padding: 10px;
              }
              .content {
                font-size: 14px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Account Creation OTP Number</h2>
            </div>
            <div class="content">
              <p>Dear ${nameOfReceiver},</p>
              <p>We have recieved a Request of Account Creation on our platform Power Predictor by this email. <br />
              
              Here is your OTP Number valid for 5 minutes: ${otpNumber} <br />
              
              Please dont Share this with anyone.<br />
              Thank you for Registering with us.</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Power Predictor. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
