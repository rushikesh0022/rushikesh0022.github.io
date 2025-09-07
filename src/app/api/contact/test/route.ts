import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the contact form submission for development
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json({ 
      data: { id: 'test-email-id-' + Date.now() },
      message: 'Test email sent successfully (development mode)',
      development: true
    });
  } catch (err) {
    console.error('Test route error:', err);
    return NextResponse.json({ error: 'Server error occurred' }, { status: 500 });
  }
} 