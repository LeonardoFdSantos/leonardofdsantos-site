# leonardofdsantos-site

Portfólio pessoal — mesma stack usada nos sites de cliente (Astro +
Tailwind), mas hospedado na **Vercel** por ser projeto pessoal/hobby, sem
fins comerciais diretos (a restrição de não usar o plano grátis da
Vercel, descrita no `CLAUDE.md` da raiz, vale só pra sites de clientes
pagantes — não se aplica aqui).

## Antes de publicar

Edite `src/site.config.ts` e preencha:

- `personal.whatsapp` — está com um número placeholder
  (`5555999999999`), troque pelo seu número real (só dígitos, com DDI:
  `55` + DDD + número).
- `contact.web3formsKey` — crie uma chave grátis em
  [web3forms.com](https://web3forms.com) pra receber as mensagens do
  formulário de contato no seu e-mail.
- `portfolio[].url` — assim que cada demo em `../site-clientes/` estiver
  publicada (Netlify/Cloudflare), cole o link aqui pra virar um "Ver
  site →" clicável.

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Suba esta pasta como repositório no GitHub (pode ser o mesmo
   repositório do projeto todo, ou um separado só pra esse site).
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project**
   e importe o repositório.
   - Se este projeto estiver numa subpasta de um repo maior (ex:
     `leonardofdsantos-site/` dentro de `RendaExtra_Leonardo`), configure
     o **Root Directory** pra apontar pra essa subpasta em
     "Project Settings → General".
3. A Vercel detecta o Astro automaticamente (build: `astro build`,
   output: `dist/`) — não precisa mexer em nada, é só confirmar.
4. Depois do primeiro deploy, vá em **Project Settings → Domains** e
   adicione `leonardofdsantos.com.br`.
5. A Vercel mostra os registros DNS que você precisa criar no
   **Registro.br** (geralmente um registro `A` apontando pro IP da
   Vercel e um `CNAME` pro `www`). Leva de minutos a algumas horas pra
   propagar.

Depois disso, qualquer `git push` na branch principal atualiza o site
sozinho.
