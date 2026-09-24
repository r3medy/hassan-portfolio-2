# Notebook charts for Retail and Smart Cities

## Goal

Replace the current Retail Store Sales chart with a set of chart views from its Colab notebook. Mark Smart Cities complete and add selected charts from its local notebook. Keep all claims tied to notebook code, notebook output, or verified cleaned data.

## Approved chart selection

Retail Store Sales will show five views:

1. Total spend by category.
2. Quantity by the top 20 items.
3. Total spend by location.
4. Transaction count by payment method.
5. Monthly total spend by year.

The top-customer chart will not appear because it shows customer IDs. Spend values will use recorded units because the cleaned file does not name a currency. The notebook's dollar labels will not be copied.

Smart Cities will show four selected notebook charts:

1. Average traffic volume and congestion by hour.
2. Traffic volume, congestion, and average speed by emergency type.
3. Average AQI by congestion level.
4. Frequency of weather events.

Use saved chart outputs from the notebook where available. Add meaningful alternative text and captions. Do not imply that the charts show every city table or all project findings.

## Status and copy

Change Smart Cities status from `Work in progress` to `Completed`. Update the project card, case study status, case study section heading, experience text, process, outcome, and tool notes. Describe only work shown in the notebook. Keep its eight-table scope and approximate row and column counts as currently documented.

## Implementation shape

Use Recharts for the five Retail charts. Add verified grouped values to `docs/chart-evidence.json`, based on the local cleaned Retail CSV and the notebook's grouping logic. Keep row-count and unit context in each chart caption.

Store selected Smart Cities notebook images under `public/` and display them in a reusable, responsive notebook-figure component. Give each figure a specific alt text and a caption that names the measured fields and chart context. Do not expose notebook or dataset downloads.

Update the shared project content in `lib/projects.ts` and the rendering in `app/projects/[slug]/page.tsx`. Update the Smart Cities home experience copy in `app/page.tsx`. Keep changes within these routes, chart components, evidence, styles, assets, and this design record.

## Data and display rules

- Derive Retail chart values from the supplied cleaned CSV. Do not infer currency.
- Use the notebook's item, location, payment, category, and month/year groupings.
- Do not publish customer IDs or customer-level chart data.
- Preserve the notebook's Smart Cities chart images and their underlying labels. Do not rewrite chart values from pixels.
- Keep charts readable on mobile and provide text alternatives.

## Verification

Check the changed project content, chart captions, status, and responsive layout. Run the project's existing lint, typecheck, and production build commands. Do not add a separate test framework.

## Self-review

- No placeholders remain.
- Retail values have an identified source and unit rule.
- Smart Cities completion copy is supported by the supplied notebook.
- Customer IDs stay out of the public page.
- The selected charts match the user's approved option 1.
