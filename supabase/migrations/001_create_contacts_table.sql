-- Migration: Create contacts table
-- Description: Table to store contact form submissions

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(read);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Add RLS (Row Level Security) policies
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from anonymous users (contact form)
CREATE POLICY "Allow anonymous inserts" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can read
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update
CREATE POLICY "Allow authenticated updates" ON contacts
  FOR UPDATE
  USING (auth.role() = 'authenticated');
