import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// @route   POST /api/contact
// @desc    Send contact form email
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // User's email for easy reply
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #4ade80; border-bottom: 2px solid #4ade80; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong> 
              <span style="color: #666;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong> 
              <span style="color: #666;">${email}</span>
            </p>
          </div>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong style="color: #333;">Message:</strong>
            <p style="color: #666; margin-top: 10px; line-height: 1.6;">
              ${message}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #999; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: "Message sent successfully! I'll get back to you soon." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      message: "Failed to send message. Please try again later." 
    });
  }
});

export default router;
