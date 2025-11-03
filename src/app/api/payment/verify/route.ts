import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail } from '@/lib/email'

// Admin-only endpoint to verify payment
// In production, add authentication middleware
export async function POST(request: NextRequest) {
  try {
    const { registrationId, status } = await request.json()

    if (!registrationId || !status) {
      return NextResponse.json(
        { success: false, error: 'Missing registrationId or status' },
        { status: 400 }
      )
    }

    if (!['pending', 'verified', 'cancelled'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment status' },
        { status: 400 }
      )
    }

    // Update payment status in Supabase
    const { data: registration, error } = await supabase
      .from('event_registrations')
      .update({ 
        payment_status: status,
        updated_at: new Date().toISOString()
      })
      .eq('id', registrationId)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to update payment status' },
        { status: 500 }
      )
    }

    // Send payment confirmation email to user if verified
    if (status === 'verified' && registration) {
      const emailHtml = `
        <h2>Payment Verified</h2>
        <p>Dear ${registration.first_name} ${registration.last_name},</p>
        <p>Great news! Your payment has been verified for ${registration.event_type}.</p>
        <p><strong>Registration ID:</strong> ${registration.id}</p>
        <p>You will receive further details about the event shortly.</p>
        <p>Best regards,<br>Event Team</p>
      `

      await sendEmail(
        registration.email,
        'Payment Verified - Event Registration',
        emailHtml
      )
    }

    return NextResponse.json({
      success: true,
      registration,
    })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

