# AGENTS.md

## Visão geral

Monorepo pnpm (`pnpm-workspace.yaml`) com duas aplicações:

- `apps/web` — frontend React 19 + Vite (JSX), lint com oxlint.
- `apps/api` — backend NestJS 12, ESM, TypeScript, testes com Vitest, lint com oxlint, formatação com Prettier. Veja `apps/api/AGENTS.md` para orientações específicas do NestJS.

### Comandos

```bash
pnpm dev            # sobe web + api em paralelo
pnpm dev:web        # somente o frontend
pnpm dev:api        # somente o backend
pnpm build          # build de todos os apps
pnpm lint           # lint em todos os apps
pnpm test           # testes em todos os apps
```

Dentro de `apps/api`: `pnpm test` (unit), `pnpm test:e2e`, `pnpm test:cov`, `pnpm format`.

## Frontend (`apps/web`)

### Atomic Design

Toda a UI é organizada seguindo Atomic Design, em `src/components/`:

- `atoms/` — elementos indivisíveis: `Button`, `Input`, `Label`, `Icon`, `Text`.
- `molecules/` — composições simples de átomos: `SearchBar`, `FormField`, `Card`.
- `organisms/` — seções complexas e autocontidas: `Header`, `PostList`, `LoginForm`.
- `templates/` — estruturas de página sem dados reais (layout + placeholders).
- `pages/` — instâncias concretas dos templates, conectadas a dados/rotas.

Regras:

- Um componente só pode depender de níveis iguais ou inferiores (organism → molecule → atom). Nunca o contrário.
- Componente novo vai no menor nível possível; só promova a um nível superior quando houver composição real.
- Componentes não fazem fetch de dados diretamente, exceto `pages/` — dados chegam via props/hooks injetados pelo nível acima.
- Arquivos legados fora dessa estrutura (ex.: `App.jsx`) devem ser migrados ao serem tocados.

### TailwindCSS

- Estilização exclusivamente com utility classes do Tailwind. Não criar arquivos `.css` por componente nem CSS-in-JS.
- Tokens de design (cores, espaçamento, tipografia) ficam centralizados na configuração/tema do Tailwind — nunca hardcode valores de cor/hex nas classes; use os tokens definidos.
- Para variações de um componente, prefira props que mapeiam para classes (ex.: `variant="primary"`), evitando strings de classes gigantes duplicadas.
- Classes dinâmicas devem ser compostas de forma que o Tailwind consiga gerá-las (nada de concatenação que impeça o scan, ex.: `` `bg-${color}-500` ``).

### Testes de componentes

- **Todo componente** (atom, molecule, organism, template) precisa de um teste cobrindo seu uso essencial: renderização correta e a principal interação/contrato de props.
- Testes ficam colocalizados: `Button.jsx` → `Button.test.jsx` no mesmo diretório.
- Stack: Vitest + `@testing-library/react` + `jsdom` (configure no `vite.config.js` se ainda não estiver).
- Escreva os testes pela perspectiva do usuário (`screen.getByRole`, `userEvent`), não por detalhes de implementação.
- Mínimo esperado por teste: (1) renderiza com props essenciais; (2) responde à interação principal (click, input, submit) quando aplicável.

## Backend (`apps/api`)

A API deve ser aderente aos princípios REST:

- **URIs orientadas a recursos**: substantivos no plural, kebab-case, hierárquicos — `GET /users`, `GET /users/:id/posts`. Nunca verbos na URI (`/getUsers` é proibido; exceções de ação não-CRUD usam sub-recurso ou verbo controlado, ex.: `POST /users/:id/reset-password`).
- **Verbos HTTP corretos**: `GET` (leitura, seguro/idempotente), `POST` (criação/ações), `PUT` (substituição completa, idempotente), `PATCH` (atualização parcial), `DELETE` (remoção).
- **Status codes semânticos**: `200` OK, `201` Created (com `Location` quando fizer sentido), `204` No Content, `400` validação, `401`/`403` auth, `404` não encontrado, `409` conflito, `422` entidade improcessável, `500` erro interno. Nunca retornar `200` com erro no body.
- **Stateless**: nenhum estado de sessão no servidor; autenticação via token (Bearer/JWT) em cada request.
- **Versionamento**: prefixe as rotas com versão (`/v1/...`) via `app.setGlobalPrefix` ou `enableVersioning` do Nest.
- **Contratos**: entrada validada por DTO/schema (pipe de validação), saída serializada de forma consistente. Nunca vaze entidades de persistência diretamente na resposta.
- **Erros**: formato único e previsível (ex.: `{ statusCode, message, error, path, timestamp }`), via `ExceptionFilter` global — controllers não montam resposta de erro na mão.
- **Coleções**: paginação (`?page=&limit=` ou cursor), filtros e ordenação via query string; resposta paginada com metadados (`total`, `page`, etc.).
- **Representação**: JSON como formato padrão, `Content-Type: application/json`; nomes de campos em `camelCase` (ou o padrão já adotado — mantenha consistência).
- **Camadas Nest**: controller fino (HTTP only) → service (regra de negócio) → repository/persistência. Sem lógica de negócio em controller e sem HTTP em service.

## Git — Conventional Commits

Todos os commits deste repositório (web e api) seguem [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo opcional>): <descrição curta no imperativo>

[corpo opcional]
[footer opcional: BREAKING CHANGE, refs]
```

- **Tipos**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Escopo**: prefira `web` ou `api` quando a mudança for de um app só — ex.: `feat(web): add Button atom`, `fix(api): return 404 on missing user`. Commits transversais podem omitir o escopo.
- Descrição em minúsculas, sem ponto final, imperativo ("add", não "added").
- `!` após o tipo/escopo ou footer `BREAKING CHANGE:` para mudanças incompatíveis — ex.: `feat(api)!: rename /posts to /articles`.
- Não comitar `node_modules`, `dist`, `.env` ou segredos.
