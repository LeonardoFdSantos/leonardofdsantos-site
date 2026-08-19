# leonardofdsantos-site

Portfólio pessoal — mesma stack usada nos sites de cliente (Astro +
Tailwind), mas hospedado na **Vercel** por ser projeto pessoal/hobby, sem
fins comerciais diretos (a restrição de não usar o plano grátis da
Vercel, descrita no `CLAUDE.md` da raiz, vale só pra sites de clientes
pagantes — não se aplica aqui).

Tem um painel administrativo em `/admin` pra editar o conteúdo do site
(textos, portfólio, planos) e ver os leads do formulário de contato sem
precisar mexer em código — os dados ficam num banco Supabase.

## Antes de publicar

Edite `src/site.config.ts` (o conteúdo daqui é o **fallback**: o que
aparece antes de você configurar o Supabase, ou se ele ficar fora do
ar):

- `contact.web3formsKey` — crie uma chave grátis em
  [web3forms.com](https://web3forms.com) pra receber as mensagens do
  formulário de contato no seu e-mail.
- `about.photos` — hoje aponta pra fotos placeholder grátis
  ([picsum.photos](https://picsum.photos)). Troque pelas suas fotos reais
  quando tiver — pode ser uma URL de qualquer imagem pública (a primeira
  do array é a foto principal). Dá pra trocar direto pelo `/admin`
  também, sem precisar editar código.
- `portfolio[].url` — assim que cada demo em `../site-clientes/` estiver
  publicada (Netlify/Cloudflare), cole o link aqui pra virar um "Ver
  site →" clicável.

## Rodar localmente

```bash
npm install
npm run dev
```

Sem o Supabase configurado (próxima seção), o site funciona normal
usando o conteúdo de `site.config.ts` — o painel `/admin` mostra um
aviso pra configurar antes de logar.

## Configurar o painel administrativo (Supabase)

O `/admin` precisa de um banco Supabase (gratuito) pra guardar o
conteúdo editável e os leads. Passo a passo:

1. **Criar o projeto** — crie uma conta em
   [supabase.com](https://supabase.com) e um projeto novo (a criação da
   conta e do projeto é sua, eu não crio isso por você).
2. **Rodar o schema** — abra o projeto → **SQL Editor** → **New query**,
   cole o conteúdo de [`supabase/schema.sql`](supabase/schema.sql) e
   rode. Isso cria as tabelas `site_content` (conteúdo do site) e
   `leads` (mensagens do formulário), já com as regras de segurança
   (RLS): qualquer visitante pode ler o conteúdo e enviar uma mensagem,
   mas só você (logado) pode editar conteúdo ou ver/apagar leads.
3. **Criar seu usuário administrador** — no projeto Supabase, vá em
   **Authentication → Users → Add user** e crie com seu e-mail e uma
   senha. É esse login que o `/admin` vai pedir.
4. **Pegar a URL e a chave do projeto** — em **Project Settings → API**,
   copie a **Project URL** e a **anon public key**.
5. **Configurar as variáveis de ambiente:**
   - Local: copie `.env.example` para `.env` e cole os dois valores.
   - Vercel: em **Project Settings → Environment Variables**, adicione
     `PUBLIC_SUPABASE_URL` e `PUBLIC_SUPABASE_ANON_KEY` com os mesmos
     valores, e faça um novo deploy (Redeploy) pra elas entrarem em
     efeito.

A chave `anon` é segura pra expor publicamente (é assim que o Supabase
funciona no navegador) — a proteção real é o RLS configurado no passo 2.

### Usando o painel

Acesse `/admin`, faça login com o e-mail/senha criados no passo 3.

- **Aba Conteúdo:** campos simples de texto pros dados principais
  (nome, hero, sobre, contato) e caixas de texto com JSON pras listas
  (estatísticas, diferenciais, portfólio, planos) — edite o JSON
  mantendo o formato de colchetes/chaves e clique em **Salvar
  alterações**. O site reflete a mudança na hora, sem precisar de novo
  deploy.
- **Aba Leads:** lista as mensagens recebidas pelo formulário de
  contato, com opção de excluir.

Se algum campo JSON ficar com formato inválido, o botão de salvar avisa
em vez de gravar algo quebrado.

## Deploy na Vercel

1. Suba esta pasta como repositório no GitHub (pode ser o mesmo
   repositório do projeto todo, ou um separado só pra esse site).
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project**
   e importe o repositório.
   - Se este projeto estiver numa subpasta de um repo maior (ex:
     `leonardofdsantos-site/` dentro de `RendaExtra_Leonardo`), configure
     o **Root Directory** pra apontar pra essa subpasta em
     "Project Settings → General".
3. A Vercel detecta o adaptador `@astrojs/vercel` automaticamente e
   builda o site em modo SSR (funções serverless) — não precisa mexer
   em nada, é só confirmar.
4. Adicione as variáveis `PUBLIC_SUPABASE_URL` e
   `PUBLIC_SUPABASE_ANON_KEY` (ver seção acima) antes ou depois do
   primeiro deploy — sem elas o site funciona normal com o conteúdo
   padrão, só o `/admin` fica inativo.
5. Depois do primeiro deploy, vá em **Project Settings → Domains** e
   adicione `leonardofdsantos.com.br`.
6. A Vercel mostra os registros DNS que você precisa criar no
   **Registro.br** (geralmente um registro `A` apontando pro IP da
   Vercel e um `CNAME` pro `www`). Leva de minutos a algumas horas pra
   propagar.

Depois disso, qualquer `git push` na branch principal atualiza o site
sozinho.
