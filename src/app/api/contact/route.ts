import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  // Log or handle message (e.g., send email with Nodemailer or external service)
  console.log('Send Email:', { name, email, message });

  return NextResponse.json({ success: true });
}
