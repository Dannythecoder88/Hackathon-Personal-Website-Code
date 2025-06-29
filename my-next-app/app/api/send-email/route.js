import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const { to, from, subject, text } = await request.json();

    // Verify required fields
    if (!to || !from || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: to,
      replyTo: from, // So you can reply directly to the sender
      subject: subject,
      text: text,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${from.split('<')[0].trim()}</p>
        <p><strong>Email:</strong> ${from.match(/<([^>]+)>/)?.[1] || from}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
          ${text.replace(/\n/g, '<br>')}
        </div>
      </div>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
