-- Event Registrations Table
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id INTEGER NOT NULL,
  event_type VARCHAR(50) NOT NULL CHECK (event_type IN ('MASTERCLASS', 'ACADEMY')),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  payment_method VARCHAR(20) NOT NULL CHECK (payment_method IN ('naira', 'dollar')),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'verified', 'cancelled')),
  reflection_answers JSONB,
  academy_reflection_answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_event_registrations_email ON event_registrations(email);
CREATE INDEX IF NOT EXISTS idx_event_registrations_event_id ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_event_registrations_payment_status ON event_registrations(payment_status);
CREATE INDEX IF NOT EXISTS idx_event_registrations_created_at ON event_registrations(created_at);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_event_registrations_updated_at BEFORE UPDATE
    ON event_registrations FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for registration)
CREATE POLICY "Allow public insert" ON event_registrations
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Policy: Allow authenticated users to read (for admin dashboard)
-- Note: You'll need to set up authentication for this
CREATE POLICY "Allow authenticated read" ON event_registrations
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Allow authenticated users to update payment status (for admin)
CREATE POLICY "Allow authenticated update payment status" ON event_registrations
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);




