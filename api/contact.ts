import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, message, website, timestamp } = req.body;

  // Honeypot check
  if (website) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  // Rate limiting check (basic timestamp validation)
  const submissionTime = parseInt(timestamp);
  const now = Date.now();
  if (now - submissionTime < 3000) { // Less than 3 seconds = suspicious
    return res.status(429).json({ message: 'Too fast' });
  }

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter (configure with your SMTP settings)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'ops@morecivil.com.au',
      subject: `[More Civil Website] New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Adelaide' })}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}