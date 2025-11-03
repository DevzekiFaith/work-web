# Supabase Setup Guide

## Prerequisites
1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase

## Environment Variables

Create a `.env.local` file in the root of your project with the following:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin Email for Notifications
ADMIN_EMAIL=admin@example.com

# Email Service (see Email Setup below)
```

You can find your Supabase URL and Anon Key in:
- Supabase Dashboard → Project Settings → API

## Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `supabase-schema.sql` to create the `event_registrations` table

## Email Setup

Choose one of the following email services:

### Option 1: Resend (Recommended)
1. Sign up at https://resend.com
2. Get your API key
3. Install: `npm install resend`
4. Update `src/app/api/register/route.ts` to use Resend

### Option 2: SendGrid
1. Sign up at https://sendgrid.com
2. Get your API key
3. Install: `npm install @sendgrid/mail`
4. Update `src/app/api/register/route.ts` to use SendGrid

### Option 3: Nodemailer (SMTP)
1. Get SMTP credentials from your email provider
2. Install: `npm install nodemailer`
3. Update `src/app/api/register/route.ts` to use Nodemailer

## Testing

1. Start your development server: `npm run dev`
2. Navigate to an event registration page
3. Fill out and submit the registration form
4. Check Supabase dashboard to verify data was saved
5. Check your email inbox for confirmation emails


