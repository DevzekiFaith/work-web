import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Log subscription (in production, you would save to database or send to email service)
    console.log('Newsletter Subscription:', { email, timestamp: new Date().toISOString() });

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Add to email marketing service (Mailchimp, ConvertKit, etc.)

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
