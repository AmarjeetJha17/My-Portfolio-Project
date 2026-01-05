-- Migration: Create blog posts table
-- Description: Table to store blog posts

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(300) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image VARCHAR(500) NOT NULL,
  author_id UUID NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  category VARCHAR(50) NOT NULL DEFAULT 'technology',
  published_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reading_time INTEGER NOT NULL DEFAULT 5,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Add RLS policies
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public reads for published posts
CREATE POLICY "Allow public reads for published" ON blog_posts
  FOR SELECT
  USING (published = true);

-- Policy: Authenticated users can read all posts
CREATE POLICY "Allow authenticated reads all" ON blog_posts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can insert/update/delete
CREATE POLICY "Allow authenticated inserts" ON blog_posts
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated updates" ON blog_posts
  FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated deletes" ON blog_posts
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Trigger for auto-updating updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
