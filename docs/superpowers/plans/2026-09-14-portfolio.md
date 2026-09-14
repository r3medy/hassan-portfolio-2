# Hassan Ahmed Portfolio Implementation Plan

> Execute with software-engineer and qa-engineer agents. The user authorizes design decisions and implementation.

**Goal:** Build the React portfolio described in PRD.md.

**Architecture:** Next.js App Router with local case study content and static routes. Small client components handle interaction.

**Tech Stack:** Next.js, React, TypeScript, CSS, browser mailto and Clipboard APIs.

## Tasks

- [x] Implement project configuration, homepage, and six static case study pages through software-engineer.
  - Own package.json, TypeScript/Next/ESLint config, app/, components/, lib/, and public/.
  - Follow the design specification and PRD. Use restrained decorative SVG project graphics without invented data.
  - Export static route parameters and unique metadata. Handle unknown slugs with a proper 404.
  - Build accessible navigation, reduced motion, and a validated email handoff with a copy fallback.
- [x] Inspect the shared source folder. Incorporate charts only when source data supports them.
  - Record source access and evidence in docs/source-evidence.md.
- [x] Run production build, TypeScript, lint, and browser checks.
  - Visit the home page and all six project URLs.
  - Test desktop and mobile layout, keyboard access, invalid contact input, mailto contents, and clipboard fallback.
- [x] Review PRD compliance and code quality through qa-engineer. Resolve material defects through software-engineer.
- [x] Update README.md with setup, checks, content maintenance, and Vercel deployment instructions. Record final verification.

No public deployment is required to complete this local project.

