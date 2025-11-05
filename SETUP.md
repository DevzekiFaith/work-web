# Setup Guide for Event Registration System

## Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)
- An email service account (Resend recommended, or SendGrid/Nodemailer)

## Step 1: Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings** > **API** and copy:
   - Project URL
   - Anon/public key

3. Run the database schema:
   - Go to **SQL Editor** in Supabase dashboard
   - Copy and paste the contents of `supabase-schema.sql`
   - Click **Run** to create the table

## Step 2: Environment Variables

Create a `.env.local` file in the `work-web` directory with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Admin Email for Notifications
ADMIN_EMAIL=your_admin_email@example.com

# Email Service (choose one)
# Option 1: Resend (Recommended)
RESEND_API_KEY=your_resend_api_key_here

# Option 2: SendGrid
# SENDGRID_API_KEY=your_sendgrid_api_key_here

# Option 3: Nodemailer (SMTP)
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your_email@example.com
# SMTP_PASS=your_password_here
```

## Step 3: Email Service Setup (Resend - Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add `RESEND_API_KEY` to `.env.local`
4. Install Resend package (if not already installed):
   ```bash
   npm install resend
   ```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Run Development Server

```bash
npm run dev
```

## Features Implemented

✅ **Toast Notifications** - Better user feedback with error/success messages
✅ **Supabase Integration** - Database storage for registrations
✅ **Email Notifications** - User confirmation and admin alerts
✅ **Payment Tracking** - Status tracking (pending/verified/cancelled)
✅ **API Routes** - Secure backend for form submissions

## Next Steps

- Set up admin dashboard to view registrations
- Implement payment verification system
- Add export functionality (CSV/Excel)
- Set up analytics tracking



