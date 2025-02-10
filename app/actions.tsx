"use server";

import nodemailer from "nodemailer";

export async function joinWaitlist({ name, email } : {name: string, email: string}) {
    try {
      console.log(name,email)
    if (!email) throw new Error("Recipient email is missing");

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Replace with actual password
      },
      secure: false, // Use TLS
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate errors
      },
    });
        const mailOptions = {
        from: "support@murtabit.com",
        to: email, // Ensure only the email is passed
        bcc: "kareem.khaled.fares@gmail.com", // Add BCC recipient
        subject: "Welcome to the Murtabit Waitlist!",
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
            <img src="https://murtabit.com/logo_murta.png" alt="Murtabit Logo" style="max-width: 100px; margin-bottom: 20px;">
            <h2>Welcome to the Murtabit Waitlist, ${name}!</h2>
            <p>Thank you for signing up. We appreciate your interest and will keep you updated with our latest news and developments.</p>
            <p>Stay tuned!</p>
            <br>
            <p>Best Regards,</p>
            <p><strong>The Murtabit Team</strong></p>
            </div>
        `,
        };


    const info = await transporter.sendMail(mailOptions);

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return { success: false, error: error.message };
  }
}
