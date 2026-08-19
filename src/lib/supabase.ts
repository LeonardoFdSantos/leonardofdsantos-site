import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// null quando as variáveis de ambiente não estão configuradas — o resto do
// app (src/lib/content.ts, páginas públicas) trata isso como "sem admin
// ativo ainda" e cai pro conteúdo padrão do site.config.ts.
export const supabase: SupabaseClient | null = isSupabaseConfigured
	? createClient(url, anonKey)
	: null;
