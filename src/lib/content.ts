import { supabase } from "./supabase";
import { defaultSiteConfig, type SiteConfig } from "../site.config";

const ROW_ID = "main";

export async function getSiteContent(): Promise<SiteConfig> {
	if (!supabase) return defaultSiteConfig;

	try {
		const { data, error } = await supabase
			.from("site_content")
			.select("data")
			.eq("id", ROW_ID)
			.maybeSingle();

		if (error || !data?.data) {
			return defaultSiteConfig;
		}

		const content = data.data as SiteConfig;
		if (!content.blogPosts || content.blogPosts.length === 0) {
			content.blogPosts = defaultSiteConfig.blogPosts;
		}
		return content;
	} catch {
		return defaultSiteConfig;
	}
}

export async function saveSiteContent(content: SiteConfig) {
	if (!supabase) {
		throw new Error("Supabase não configurado — defina PUBLIC_SUPABASE_URL e PUBLIC_SUPABASE_ANON_KEY.");
	}

	const { error } = await supabase
		.from("site_content")
		.upsert({ id: ROW_ID, data: content, updated_at: new Date().toISOString() });

	if (error) throw error;
}
