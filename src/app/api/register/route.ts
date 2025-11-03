import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail } from '@/lib/email'

// Admin email for notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { success: false, error: 'Database not configured. Please contact support.' },
        { status: 500 }
      )
    }

    // Save registration to Supabase
    const { data: registration, error } = await supabase
      .from('event_registrations')
      .insert({
        event_id: data.eventId,
        event_type: data.eventType,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        payment_method: data.paymentMethod,
        payment_status: 'pending',
        reflection_answers: data.reflectionAnswers || null,
        academy_reflection_answers: data.academyReflectionAnswers || null,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to save registration' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Registration Confirmation</h2>
      <p>Dear ${data.firstName} ${data.lastName},</p>
      <p>Thank you for registering for ${data.eventTitle}!</p>
      <p>Your registration has been received and is pending payment confirmation.</p>
      <p><strong>Event Details:</strong></p>
      <ul>
        <li>Event: ${data.eventTitle}</li>
        <li>Date: ${data.eventDate}</li>
        <li>Location: ${data.eventLocation}</li>
      </ul>
      <p><strong>Payment Instructions:</strong></p>
      <p>Please complete your payment using the details provided on the registration page.</p>
      <p>After payment, please send a WhatsApp confirmation message.</p>
      <p>Best regards,<br>Event Team</p>
    `

    await sendEmail(data.email, 'Registration Confirmation', userEmailHtml)

    // Send notification email to admin
    const adminEmailHtml = `
      <h2>New Event Registration</h2>
      <p>A new registration has been received:</p>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Event:</strong> ${data.eventTitle}</li>
        <li><strong>Event Type:</strong> ${data.eventType}</li>
        <li><strong>Payment Method:</strong> ${data.paymentMethod}</li>
        <li><strong>Registration ID:</strong> ${registration.id}</li>
      </ul>
      <p>Please review and verify the payment when received.</p>
    `

    await sendEmail(ADMIN_EMAIL, 'New Event Registration', adminEmailHtml)

    return NextResponse.json({
      success: true,
      registration: {
        id: registration.id,
        email: data.email,
      },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}



