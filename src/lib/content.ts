import { supabase } from "./supabase";
import { defaultSiteConfig, type SiteConfig } from "../site.config";

const ROW_ID = "main";

// Busca o conteúdo salvo pelo /admin. Sem Supabase configurado, com a
// tabela ainda vazia, ou em caso de erro de rede: cai pro conteúdo
// padrão (defaultSiteConfig) — o site nunca fica quebrado por causa do
// admin.
export async function getSiteContent(): Promise<SiteConfig> {
	if (!supabase) return defaultSiteConfig;

	try {
		const { data, error } = await supabase
			.from("site_content")
			.select("data")
			.eq("id", ROW_ID)
			.maybeSingle();

		if (error || !data?.data) return defaultSiteConfig;
		return data.data as SiteConfig;
	} catch {
		return defaultSiteConfig;
	}
}

// Usado pelo /admin pra salvar edições. Faz upsert: cria a linha "main"
// na primeira vez que alguém salva, atualiza depois disso.
export async function saveSiteContent(content: SiteConfig) {
	if (!supabase) {
		throw new Error("Supabase não configurado — defina PUBLIC_SUPABASE_URL e PUBLIC_SUPABASE_ANON_KEY.");
	}

	const { error } = await supabase
		.from("site_content")
		.upsert({ id: ROW_ID, data: content, updated_at: new Date().toISOString() });

	if (error) throw error;
}
