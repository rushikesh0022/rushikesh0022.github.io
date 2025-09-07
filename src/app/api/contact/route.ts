import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from './email-template';

export const dynamic = "force-static";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxxx') {
      console.log('Resend API key not configured, logging contact form submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({ 
        data: { id: 'dev-email-id-' + Date.now() },
        message: 'Contact form received (development mode - no email sent)',
        development: true,
        note: 'Configure RESEND_API_KEY in .env.local to enable actual email sending'
      });
    }

    // Environment variables with fallbacks for development
    const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
    const toEmail = process.env.TO_EMAIL || 'vanipenta.rushikesh2023@vitstudent.ac.in';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio Contact from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ data, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Server error occurred' }, { status: 500 });
  }
}
