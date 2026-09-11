# Repository Guidelines

## Project Structure & Module Organization

This Astro 7 portfolio uses Tailwind CSS 4 and strict TypeScript 6. The homepage remains starter content; no backend or content collections exist.

- `src/pages/`: routes, including `index.astro`.
- `src/components/` and `src/layouts/`: reusable UI and document structure.
- `src/assets/` and `public/`: imported assets and static files.
- `src/styles/global.css`: Tailwind entry point; currently not imported by `Layout.astro`.
- `tests/e2e/`: browser scenarios and `pages/HomePage.ts`.
- `.github/workflows/quality.yml`: CI quality checks.

## Build, Test, and Development Commands

Use Node.js >=24.0.0 and pnpm; CI uses Node 24 and pnpm 10. Dependencies are already installed. Run `pnpm install` only for setup or dependency changes; include lockfile updates.

- `pnpm dev --background`: start development in the required background mode.
- `pnpm exec astro dev status` (or `logs`, `stop`): manage development.
- `pnpm build`: generate `dist/`; `pnpm preview`: serve it locally.
- `pnpm check`: Astro/TypeScript diagnostics.
- `pnpm lint`: ESLint; `pnpm format:check`: Prettier validation.
- `pnpm test:unit`: Vitest; currently permits an empty suite.
- `pnpm test:e2e`: build and run Playwright.
- `pnpm test`: run both suites.

## Coding Style & Naming Conventions

Use PascalCase components/layouts, lowercase routes, ES modules, and strict TypeScript. Follow Prettier’s default two-space indentation, Astro formatting, and Tailwind class sorting. Check formatting separately from ESLint. Avoid unrelated formatting changes.

## Testing Guidelines

Put logic tests in `tests/unit/**/*.test.ts` and browser tests in `tests/e2e/*.spec.ts`. No coverage threshold is configured. Prefer role-based locators and independent tests. Update `HomePage.ts` and assertions when replacing starter content.

Playwright requires Chromium binaries and owns preview port 4322 without server reuse. It checks desktop/mobile rendering, metadata, links, browser errors, overflow, and axe accessibility. Build before `pnpm test:e2e:ui`.

## Commit & Pull Request Guidelines

Follow history’s concise imperative subjects, such as “Integrate Tailwind CSS” and “Add Vitest config for unit tests.” Keep PRs focused; describe changes, link issues, report validation, and include screenshots for UI changes. Run `pnpm check`, `pnpm lint`, `pnpm format:check`, and `pnpm test` before opening a PR. Preserve existing work; exclude secrets, dependencies, and generated artifacts.

## Agent Documentation

Use Context7 for library/framework/SDK/API/CLI/cloud documentation: resolve the library ID, then query each concept separately. General programming and unrelated refactoring are exempt. Before related Astro work, consult official routing, components, framework integrations, content collections, styling, and internationalization guides.
