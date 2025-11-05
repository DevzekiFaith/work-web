import { Resend } from 'resend'

const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'

// Email function using Resend
export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured. Email not sent:', { to, subject })
      return { success: false, error: 'Email service not configured' }
    }

    const resend = new Resend(resendApiKey)
    
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}




