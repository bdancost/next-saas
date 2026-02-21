# Next.js SaaS + RBAC

![Stack](https://img.shields.io/badge/Next.js-v13-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Fastify](https://img.shields.io/badge/Fastify-Server-0098FF?style=for-the-badge&logo=fastify&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-TS-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Design-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-000000?style=for-the-badge&logo=turbo&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-Manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Descrição

- Projeto full-stack que demonstra um template SaaS multi-tenant com autenticação (JWT) e RBAC.
- Frontend: Next.js (app router). Backend: Fastify + Prisma + PostgreSQL.
- Monorepo gerenciado com Turborepo e pnpm.

Como rodar localmente

1. Instalar dependências:
   - pnpm i
2. Rodar API e Web em terminais separados:
   - cd apps/api && pnpm dev
   - cd apps/web && pnpm dev

Arquivos e localização chave

- apps/web — Frontend Next.js (app router)
- apps/api — Backend Fastify + Prisma
- packages/auth — Regras de autorização e criação de Ability (RBAC)
- apps/api/prisma/seed.ts — Seed inicial do banco
- apps/api/src/http/middlewares/auth.ts — Middleware JWT
- apps/web/src/app/(app)/page.tsx — Página inicial do app

Contribuição

- Abra issues e PRs.
- Siga eslint/prettier nas configs em config/.

Observações sobre os badges

- Os badges usam o estilo "for-the-badge" do shields.io para um visual profissional e consistente.
- Se quiser uma animação real (GIF/SVG animado) no topo, posso gerar instruções ou um exemplo de SVG animado para você incorporar ao README.

Licença

- Projeto de exemplo — verifique o repositório
