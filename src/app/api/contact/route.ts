import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { username, email, subject, contact_message } = await request.json();

    if (!username || !email || !contact_message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the transporter
    // Assumes using Gmail (as specified by user)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      // Send the email to the hardcoded user email, but you could also send it to process.env.EMAIL_USER
      to: 'xheikhsalman4422@gmail.com', 
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${username}`,
      text: `
Name: ${username}
Email: ${email}
Subject: ${subject}

Message:
${contact_message}
      `,
      html: `
        <div style="font-family: 'Courier New', Courier, monospace; background-color: #050505; color: #ffffff; padding: 40px 20px; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #333; border-top: 4px solid #FFD300; padding: 30px; text-align: left; box-shadow: 0 0 20px rgba(255, 211, 0, 0.1);">
            <div style="border-bottom: 1px solid #333; padding-bottom: 20px; margin-bottom: 20px;">
              <h1 style="color: #FFD300; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Transmission</h1>
              <p style="color: #888; font-size: 12px; margin-top: 5px; text-transform: uppercase;">Source: Portfolio Secure Form</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; text-transform: uppercase; font-size: 12px; width: 100px;">Identifier</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold;">${username}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; text-transform: uppercase; font-size: 12px;">Comm Link</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #FFD300;"><a href="mailto:${email}" style="color: #FFD300; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; text-transform: uppercase; font-size: 12px;">Subject Vector</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${subject}</td>
              </tr>
            </table>

            <div style="background-color: #000; border: 1px solid #222; padding: 20px; margin-top: 30px;">
              <h3 style="color: #888; font-size: 12px; text-transform: uppercase; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">Data Payload</h3>
              <p style="color: #ddd; font-size: 15px; line-height: 1.6; margin: 0;">
                ${contact_message.replace(/\n/g, '<br/>')}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; font-size: 10px; color: #555; text-transform: uppercase; letter-spacing: 1px;">
              SYSTEM TIMESTAMP: ${new Date().toISOString()}<br/>
              TRANSMISSION RECEIVED OUTPOST TERMINAL.
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
