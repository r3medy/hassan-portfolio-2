# Notebook Case Study Chart Replacements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Employee department chart and add accurate notebook-based count charts to the Employee, Netflix, and Crime case studies.

**Architecture:** Derive chart evidence from the locally retained cleaned CSVs and verify each grouping with the existing Python verifier. Render the Employee time series and three categorical count charts with the existing Recharts dependency, scoped to their matching routes.

**Tech Stack:** Next.js 16, React 19, TypeScript, Recharts 3, Python standard library, JSON.

---

## File map

- `docs/chart-evidence.json`: Public aggregate values for project charts. No raw rows or personal fields.
- `docs/verify_source_data.py`: Recomputes evidence values from `.source-data/*.csv` and checks labels, order, values, and row coverage.
- `docs/source-evidence.md`: Records the reviewed notebook support, chart limits, and current Smart Cities status.
- `docs/verification.md`: Records the verified notebook summaries and keeps remaining unknown details qualified.
- `components/case-study-charts.tsx`: Accessible Employee, Netflix, and Crime charts. It owns the chart rendering and shared tooltip/axis styles.
- `app/projects/[slug]/page.tsx`: Selects evidence for the current route and replaces the old Employee-only graph and the Netflix/Crime visual notes.
- `lib/projects.ts`: Names the selected count views and keeps project statuses and outcome claims accurate.
- `app/globals.css`: Adds only the styles needed by the new figures and narrow screens.

## Task 1: Add and verify notebook summary evidence

**Files:**
- Modify: `docs/chart-evidence.json`
- Modify: `docs/verify_source_data.py`

- [ ] **Step 1: Extend Employee evidence.** Replace the Employee department `data` with `monthlyHiring` and `ageDistribution` arrays. Keep `rowCount` at 1,020. Group `Join_Date` by calendar month in ascending order, label each point `YYYY Mon`, and count rows. Count age values as the four numeric labels `25`, `30`, `35`, and `40`, in ascending order.
- [ ] **Step 2: Add Netflix evidence.** Add a `netflix` object with `rowCount` 8,794 and `byType` entries in this order: `Movie` 6,128, `TV Show` 2,666.
- [ ] **Step 3: Add Crime evidence.** Add a `crime` object with `rowCount` 5,050 and severity entries in this order: `Low` 1,032, `Medium` 1,349, `High` 990, `Critical` 1,337, `Unknown` 342.
- [ ] **Step 4: Extend the verifier.** Use `csv.DictReader` and `Counter` for each grouping. Parse Employee join dates as `%Y-%m-%d`, normalize age labels without a decimal suffix, and validate the expected category labels, ordering, values, row counts, and total coverage. Validate severity using the fixed order above. Keep Retail checks unchanged. Raise explicit errors through `require()` so the checks also run under `python -O`.
- [ ] **Step 5: Verify the aggregates.** Run `python docs/verify_source_data.py`.

Expected output includes successful Retail, Employee, Netflix, and Crime aggregate checks. The script exits with status 0.

- [ ] **Step 6: Commit the evidence.** Run `git add docs/chart-evidence.json docs/verify_source_data.py` and commit with `feat: add notebook count evidence`.

## Task 2: Render charts on the three case-study routes

**Files:**
- Create: `components/case-study-charts.tsx`
- Modify: `app/projects/[slug]/page.tsx`
- Modify: `lib/projects.ts`
- Modify: `app/globals.css`
- Modify: `docs/source-evidence.md`
- Modify: `docs/verification.md`
- Retire use of: `components/dataset-chart.tsx` if no route uses it after integration.

- [ ] **Step 1: Add shared accessible chart figures.** Define data items as `{ label: string; value: number }`. Export one component that accepts nullable Employee, Netflix, and Crime evidence. Use `LineChart` for Employee `monthlyHiring`, with month labels and a whole-record count axis. Use horizontal `BarChart` figures for Employee age, Netflix type, and Crime severity. Disable animation. Add each chart's visible heading, unit, tooltip, text alternative, and caption. Captions must include the corresponding row count and state that each value counts records.
- [ ] **Step 2: Add route evidence selection.** In `app/projects/[slug]/page.tsx`, select only the evidence for `messy-employee-dataset`, `netflix-titles`, or `crime-incidents`. Render `CaseStudyCharts` for those routes. Remove the old Employee department `DatasetChart` rendering. Keep Retail and Smart Cities rendering unchanged.
- [ ] **Step 3: Update project descriptions.** In `lib/projects.ts`, describe the Employee chart as monthly record counts and age counts. Describe Netflix as counts by Movie and TV Show. Describe Crime as record counts by severity, including Unknown. Keep Netflix and Crime cleaning-only; do not claim completed broader analysis or causation. Identify Plotly Express for Employee charts only if the notebook code supports it; do not claim chart libraries for Netflix or Crime.
- [ ] **Step 4: Update source documentation.** In `docs/source-evidence.md` and `docs/verification.md`, record the 26 September 2026 notebook review, the supported Employee, Netflix, and Crime summaries, the limits on the website charts, and the completed Smart Cities status. Keep unknown project details qualified.
- [ ] **Step 5: Style the new figures.** Add scoped styles that match the existing chart cards, preserve readable labels, stack figures on narrow screens, and contain any chart scrolling inside its figure. Do not change unrelated contact, navigation, or hero styles.
- [ ] **Step 6: Run project checks.** Run `python docs/verify_source_data.py`, `npm run lint`, `npm run typecheck`, and `npm run build`. All commands must exit with status 0.
- [ ] **Step 7: Review the pages.** Open the Employee, Netflix, and Crime routes at desktop and 390-pixel viewport widths. Confirm chart titles, category labels, tooltips, captions, and no page-level horizontal overflow.
- [ ] **Step 8: Commit the implementation.** Stage only chart evidence, verifier, chart component, route, project copy, chart styles, and source-evidence documentation. Commit with `feat: replace case study charts with notebook summaries`.

## Self-review

- Employee month labels use chronological order and its age chart uses the four discrete values.
- Netflix and Crime figures use the exact existing notebook summaries and contain aggregates only.
- The project route shows each chart only for its matching case study.
- Raw CSV files remain ignored and are not copied into `public/`.
- Current project statuses and all unrelated local changes remain intact.
