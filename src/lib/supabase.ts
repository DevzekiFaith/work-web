import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// You'll need to add these to your .env.local file:
// NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Supabase environment variables are not set. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file.')
  }
}

// Create Supabase client only if env vars are set, otherwise create a mock client
// This prevents errors during build time
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Database Types
export interface EventRegistration {
  id?: string
  event_id: number
  event_type: 'MASTERCLASS' | 'ACADEMY'
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  payment_method: 'naira' | 'dollar'
  payment_status: 'pending' | 'verified' | 'cancelled'
  reflection_answers?: {
    q1?: string
    q2?: string
    q3?: string
    q4?: string
    q5?: string
  } | null
  academy_reflection_answers?: {
    aq1?: string
    aq2?: string
    aq3?: string
    aq4?: string
    aq5?: string
  } | null
  created_at?: string
  updated_at?: string
}




