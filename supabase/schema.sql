-- Schema do admin do leonardofdsantos-site.
-- Rode isso inteiro uma vez no SQL Editor do seu projeto Supabase
-- (supabase.com -> seu projeto -> SQL Editor -> New query -> colar -> Run).

-- ============================================================
-- site_content: uma única linha (id = 'main') com todo o
-- conteúdo do site em JSON. O /admin lê e escreve aqui; a home
-- lê a cada request (SSR) e cai pro conteúdo padrão do
-- site.config.ts se essa linha não existir ainda.
-- ============================================================
create table if not exists site_content (
	id text primary key,
	data jsonb not null,
	updated_at timestamptz not null default now()
);

alter table site_content enable row level security;

-- Qualquer visitante pode ler (necessário pra a home renderizar).
create policy "site_content: leitura pública"
	on site_content for select
	using (true);

-- Só usuário autenticado (você, logado no /admin) pode gravar.
create policy "site_content: escrita autenticada"
	on site_content for insert
	with check (auth.role() = 'authenticated');

create policy "site_content: atualização autenticada"
	on site_content for update
	using (auth.role() = 'authenticated');

-- ============================================================
-- leads: cada envio do formulário de contato vira uma linha.
-- Só você (autenticado) consegue ler ou apagar; qualquer
-- visitante pode inserir (é o formulário público enviando).
-- ============================================================
create table if not exists leads (
	id uuid primary key default gen_random_uuid(),
	name text not null,
	phone text not null,
	message text not null,
	created_at timestamptz not null default now()
);

alter table leads enable row level security;

create policy "leads: inserção pública"
	on leads for insert
	with check (true);

create policy "leads: leitura autenticada"
	on leads for select
	using (auth.role() = 'authenticated');

create policy "leads: exclusão autenticada"
	on leads for delete
	using (auth.role() = 'authenticated');

-- ============================================================
-- Semente inicial do conteúdo (opcional). Sem isso, o site usa o
-- fallback de site.config.ts até você salvar algo pelo /admin —
-- então rodar isso não é obrigatório, só evita a linha ficar
-- vazia antes do primeiro save.
-- ============================================================
-- insert into site_content (id, data)
-- values ('main', '{}'::jsonb)
-- on conflict (id) do nothing;
