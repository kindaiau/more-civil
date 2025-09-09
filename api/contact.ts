import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, message, website, timestamp } = req.body;

  // Honeypot check
  if (website) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  // Enhanced rate limiting check
  const submissionTime = parseInt(timestamp);
  const now = Date.now();
  if (now - submissionTime < 3000) { // Less than 3 seconds = suspicious
    console.warn(`Suspicious fast submission from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
    return res.status(429).json({ message: 'Please take your time filling out the form' });
  }

  // Check for excessively old timestamps (possible replay attack)
  if (now - submissionTime > 3600000) { // More than 1 hour old
    return res.status(400).json({ message: 'Form session expired, please refresh and try again' });
  }

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate input lengths
  if (name.length > 100 || email.length > 100 || phone.length > 50 || message.length > 2000) {
    return res.status(400).json({ message: 'Input too long' });
  }

  if (company && company.length > 200) {
    return res.status(400).json({ message: 'Company name too long' });
  }

  try {
    // Initialize DOMPurify with JSDOM
    const window = new JSDOM('').window;
    const purify = DOMPurify(window as any);
    
    // Sanitize all inputs
    const sanitizedName = purify.sanitize(name);
    const sanitizedCompany = company ? purify.sanitize(company) : '';
    const sanitizedEmail = purify.sanitize(email);
    const sanitizedPhone = purify.sanitize(phone);
    const sanitizedMessage = purify.sanitize(message.replace(/\n/g, '<br>'));

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

    // Email content with sanitized inputs
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'ops@morecivil.com.au',
      subject: `[More Civil Website] New enquiry from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        ${sanitizedCompany ? `<p><strong>Company:</strong> ${sanitizedCompany}</p>` : ''}
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Adelaide' })}</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission (without sensitive data)
    console.log(`Contact form submitted successfully from ${sanitizedEmail} at ${new Date().toISOString()}`);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Enhanced error logging
    console.error('Contact form error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });
    res.status(500).json({ message: 'Unable to send message at this time. Please try again later.' });
  }
}