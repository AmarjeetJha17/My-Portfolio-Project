import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

const isConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Lazy initialization to avoid build-time errors when env vars aren't set
let _supabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (_supabaseClient) {
    return _supabaseClient;
  }

  if (!isConfigured) {
    console.warn('Supabase environment variables are not set. Database features will not work.');
  }

  _supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });

  return _supabaseClient;
}

// Export whether Supabase is properly configured
export const isSupabaseConfigured = isConfigured;

// Client-side Supabase client (with anon key) - accessed via getter
export const supabase = {
  get client() {
    return getSupabaseClient();
  },
  from: (table: string) => getSupabaseClient().from(table),
  rpc: (fn: string, params?: Record<string, unknown>) => getSupabaseClient().rpc(fn, params),
  auth: {
    get session() {
      return getSupabaseClient().auth.getSession();
    },
  },
};

// Server-side Supabase client (with service role key for admin operations)
export function createServerSupabaseClient() {
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!isConfigured || !supabaseServiceRoleKey) {
    throw new Error('Supabase environment variables are not set');
  }

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// Type definitions for database tables
export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          long_description: string | null;
          image: string;
          tags: string[];
          github_url: string | null;
          live_url: string | null;
          featured: boolean;
          category: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database['public']['Tables']['projects']['Row'],
          'id' | 'created_at' | 'updated_at'
        >;
        Update: Partial<Database['public']['Tables']['projects']['Insert']>;
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image: string;
          author_id: string;
          tags: string[];
          category: string;
          published_at: string | null;
          updated_at: string;
          reading_time: number;
          featured: boolean;
          published: boolean;
        };
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'id' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>;
      };
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          created_at: string;
          read: boolean;
        };
        Insert: Omit<Database['public']['Tables']['contacts']['Row'], 'id' | 'created_at' | 'read'>;
        Update: Partial<Database['public']['Tables']['contacts']['Insert']>;
      };
    };
  };
}
