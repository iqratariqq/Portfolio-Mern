const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transport = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENGRID,
    },
  })
);

// ✅ HELPER FUNCTION
const sendMailWithTimeout = (mailOptions, timeoutMs) => {
  return Promise.race([
    transport.sendMail(mailOptions),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("❌ Timeout: Email sending took too long!")), timeoutMs)
    ),
  ]);
};


// Controller function — now async!
const controler = async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body)

  if (!name || !email || !message) {
    return res.status(400).send({
      success: false,
      message: "Please provide all fields 🙂",
    });
  }

  try {
    console.log("📤 Sending email with 10 sec timeout...");

    await sendMailWithTimeout(
      {
        to: "iqrat269@gmail.com",
        from: "iqrat269@gmail.com",
        subject: "Regarding MERN Portfolio",
        html: `
          <h5>New Portfolio Message</h5>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
        `,
      },
      10000 // 10 seconds timeout
    );

    console.log("✅ Email sent successfully within timeout!");

    return res.status(200).send({
      success: true,
      message: "Message sent successfully ✅",
    });
  } catch (error) {
    console.log("❌ Email send failed:", error);

    return res.status(500).send({
      success: false,
      message: "API error — could not send email 😢",
      error: error.message,
    });
  }
};




module.exports = { controler };
