# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow

**Always commit and push changes after completing a task.** Follow these rules:

1. After making code changes, always commit with a descriptive message
2. Push commits to the current feature branch
3. **NEVER push directly to `main`** - always use feature branches and PRs

### Starting a New Task

Branch from `main`:

```bash
git checkout main && git pull origin main && git checkout -b <branch-name>
```

### Completing a Task

After pushing changes, create a PR against `main`:

```bash
gh pr create --base main
```

## Build Commands

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server on port 5173
pnpm build          # Production build
pnpm preview        # Preview production build
```

## Architecture

- **Vocs** documentation framework
- `docs/pages/` - MDX documentation pages
- `vocs.config.ts` - Sidebar navigation and site config

### Project Structure

```
recoup-docs/
├── docs/
│   └── pages/          # MDX documentation pages
│       ├── index.mdx   # Homepage
│       ├── getting-started.mdx
│       └── [category]/
│           └── [endpoint].mdx
├── vocs.config.ts      # Sidebar navigation and site config
└── package.json
```

## Adding New Documentation

### 1. Create the MDX File

Create a new `.mdx` file in `docs/pages/`. Use nested folders for categorization:

```
docs/pages/conversations/create.mdx  → /conversations/create
docs/pages/chat/stream.mdx           → /chat/stream
```

### 2. MDX File Template

Every documentation file should follow this structure:

```mdx
---
title: Endpoint Name
description: Brief description of what this endpoint does.
---

# Endpoint Name

Short introduction paragraph.

## Endpoint

\`\`\`http
POST https://api.recoupable.com/api/endpoint
\`\`\`

### Authentication

| Header    | Type   | Required | Description                                                                                               |
| --------- | ------ | -------- | --------------------------------------------------------------------------------------------------------- |
| x-api-key | string | Yes      | Your Recoup API key. See [Getting Started](/getting-started#-api-keys) for how to create and manage keys. |

## Parameters

| Name      | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| paramName | string | Yes      | Description of param  |

## Request Examples

:::code-group

\`\`\`bash [cURL]
curl -X POST "https://api.recoupable.com/api/endpoint" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"key": "value"}'
\`\`\`

\`\`\`javascript [JavaScript]
const response = await fetch("https://api.recoupable.com/api/endpoint", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY",
  },
  body: JSON.stringify({ key: "value" }),
});
\`\`\`

:::

## Response

\`\`\`json
{
  "success": true,
  "data": {}
}
\`\`\`
```

### 3. Update Sidebar Navigation

Add the new page to `vocs.config.ts` in the sidebar configuration:

```typescript
{
  text: "Category Name",
  items: [
    {
      text: "Endpoint Name",
      link: "/category/endpoint",
    },
  ],
},
```

## Conventions

- **File naming**: Use kebab-case for file and folder names
- **Code groups**: Use `:::code-group` for multi-language examples (cURL, JavaScript, TypeScript, Python)
- **Tables**: Use markdown tables for parameters and headers
- **Links**: Use relative links for internal docs (e.g., `/getting-started`)
- **accountId**: Do NOT add `accountId` as a parameter if it can be inferred from the API key. The API key is used to identify the account, so `accountId` should only be documented when explicitly required.
- **Base URLs**:
  - Recoup-Chat endpoints: `https://api.recoupable.com/api`
  - Chat streaming endpoints: `https://chat.recoupable.com/api`
  - recoup-api endpoints: `https://recoup-api.vercel.app/api`
