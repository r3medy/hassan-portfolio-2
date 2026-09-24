# Notebook Chart Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` or `executing-plans` to implement this plan task by task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Retail case study chart with five notebook views, add four Smart Cities notebook charts, and mark Smart Cities complete.

**Architecture:** Compute and verify Retail chart aggregates from the local cleaned CSV, then render them in a client chart component. Extract saved PNG outputs for Smart Cities from the supplied notebook and show them with captions and text alternatives. Keep project copy in `lib/projects.ts` and route presentation in existing App Router pages.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Recharts, Python standard library for evidence generation.

---

## File map

- `components/retail-charts.tsx` — client-side Recharts panels for the five Retail aggregates.
- `components/notebook-figures.tsx` — reusable responsive `<Image>` figures for Smart Cities chart outputs.
- `public/images/smart-cities-*.png` — four selected images extracted from the local notebook.
- `docs/chart-evidence.json` — verified grouped Retail values and row count.
- `docs/verify_source_data.py` — reproduce and compare each published Retail grouping.
- `lib/projects.ts` — update Retail chart notes and Smart Cities completed copy, methods, tools, and outcomes.
- `app/projects/[slug]/page.tsx` — render the Retail chart collection and Smart Cities figures; show completed status.
- `app/page.tsx` — update the Smart Cities experience text. Preserve unrelated local edits in this file.
- `app/globals.css` — responsive styles for the new chart grid and notebook figures. Preserve unrelated local edits.
- `package.json` and `package-lock.json` — add Recharts with npm.

## Task 1: Read the installed Next.js guidance and verify source notebook structure

**Files:** Read only `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`, `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`, and the installed Recharts documentation through Context7.

- [ ] Read the local Next.js guides before editing app code. Resolve Recharts through Context7 and query its current guidance for accessible responsive BarChart and LineChart usage.
- [ ] Confirm the four Smart Cities output cells and image data: cell 30, cell 177, cell 233, and cell 277 in `C:\Users\remedy\Downloads\Smart-Cities.ipynb`.
- [ ] Inspect the current working tree and `app/page.tsx` diff. Preserve all pre-existing edits, including the résumé link, service content, profile links, and contact styles.
- [ ] Confirm `public/Hassan_Ahmed_CV.pdf` remains untouched.

## Task 2: Add reproducible Retail chart evidence

**Files:** Modify `docs/chart-evidence.json`, `docs/verify_source_data.py`.

- [ ] Extend the evidence with five named groupings computed from `.source-data/retail.csv` using the notebook's fields and operations:
  - `categorySpend`: `Category` grouped with sum of `Total Spent`.
  - `topItemsByQuantity`: `Category` and `Item` grouped with sum of `Quantity`, descending, first 20.
  - `locationSpend`: `Location` grouped with sum of `Total Spent`.
  - `paymentTransactions`: `Payment Method` grouped with count of `Transaction ID`.
  - `monthlySpend`: `Transaction Year` and `Transaction Month` grouped with sum of `Total Spent`, ordered by year and calendar month.
- [ ] Store each grouping as `{ "label": string, "value": number }[]`. Use combined year-month labels such as `YYYY Jan` for monthly values. Keep currency unspecified.
- [ ] Update the verification script to reproduce all five groupings. Compare exact keys and Decimal totals. Keep the existing Employee verification.
- [ ] Run `python docs/verify_source_data.py`. Expected output: Retail and Employee aggregates verified.

## Task 3: Extract the selected Smart Cities notebook images

**Files:** Create four files under `public/images/`.

- [ ] Decode each saved `image/png` output from the matching notebook cell into these files:
  - Cell 30 → `public/images/smart-cities-hourly-traffic.png`
  - Cell 177 → `public/images/smart-cities-emergency-traffic.png`
  - Cell 233 → `public/images/smart-cities-aqi-congestion.png`
  - Cell 277 → `public/images/smart-cities-weather-events.png`
- [ ] Use a one-off Python command. Do not add the notebook or source datasets to `public/`.
- [ ] Open each PNG and confirm its title and labels before using it.

## Task 4: Build chart presentation components

**Files:** Create `components/retail-charts.tsx`, `components/notebook-figures.tsx`, and update `app/globals.css`.

- [ ] Add Recharts through `npm install recharts`. Keep npm as the package manager. Do not modify the untracked pnpm files.
- [ ] Create a `"use client"` Retail chart component. Accept only the chart evidence fields as props. Render five responsive charts with visible titles, category labels, values, and legends where needed.
- [ ] Use recorded spend units in spend chart titles, axes, tooltips, and captions. Never add a currency symbol. Keep captions clear that these are summaries of the shared cleaned dataset.
- [ ] Create a Smart Cities figures component. Use `next/image` with the extracted local images, descriptive alt text, notebook chart titles, and short captions.
- [ ] Add responsive grid styling. Keep the existing dark palette, prevent chart labels from clipping on mobile, and support keyboard and screen-reader access.

## Task 5: Update project copy and route rendering

**Files:** Modify `lib/projects.ts`, `app/projects/[slug]/page.tsx`, and `app/page.tsx`.

- [ ] Set the Smart Cities status to `Completed` and update its process, output, tools, outcome, and visual note from supported notebook content. Identify Pandas, NumPy, Matplotlib, and Seaborn only where the notebook imports or uses them.
- [ ] Update Retail's project outcome and tools note to match its notebook. Do not describe recorded spend as revenue or dollars.
- [ ] In the case study route, show the Retail chart collection in the existing results section. Keep the Employee chart unchanged.
- [ ] In the Smart Cities case study, show the four selected notebook figures. Use a completed heading instead of the current `Still in progress` heading.
- [ ] Ensure the case status reads `Completed` in the hero and overview.
- [ ] Update the home page's Smart Cities experience description to remove pending visuals and findings. Keep all unrelated home page content intact.

## Task 6: Verify the finished case studies

**Files:** Review the files above and `docs/qa-review.md`.

- [ ] Run `python docs/verify_source_data.py`.
- [ ] Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- [ ] Review both routes at desktop and mobile widths. Confirm the charts fit, text alternatives exist, and notebook images load.
- [ ] Check that Smart Cities shows `Completed` on the card and case study. Search the changed copy for stale `Work in progress` and `still in progress` text.
- [ ] Review `git diff --check` and the final changed-file list. Stage only task files. Do not stage the user's pre-existing changes.

## Coverage review

- Retail's five notebook views, recorded-unit labels, verified values, and customer-ID exclusion map to Tasks 2 and 4.
- Smart Cities' four notebook graphs and completed status map to Tasks 3 and 5.
- Card, hero, overview, result heading, and home experience copy map to Task 5.
- Accessibility, responsiveness, source fidelity, and app verification map to Tasks 4 and 6.
- No separate test framework is added.
