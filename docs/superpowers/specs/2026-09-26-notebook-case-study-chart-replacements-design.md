# Notebook charts for Employee, Netflix, and Crime

## Goal

Replace the Employee department chart with views from its notebook. Add selected count views for Netflix and Crime from summaries in their notebooks. Keep each project's current status and describe the charts as limited descriptive views.

## Approved chart selection

The Employee page will show monthly hiring counts as a line chart and record counts by age as bars. The notebook's age histogram cell has a warning comment, so use its age field as four discrete values rather than copying its questionable binning.

The Netflix page will show cleaned record counts by `type` (Movie and TV Show), matching the notebook's `value_counts()` summary.

The Crime page will show cleaned incident-record counts by `severity`, including Unknown, matching the notebook's severity count summary. Do not display personal fields or individual records.

## Implementation shape

Use the existing Recharts dependency and portfolio chart styling. Add verified grouped values to `docs/chart-evidence.json`. Reuse or extend the existing chart components where that keeps the labels and captions accurate. Render the charts only on their matching case-study routes.

Update project copy only as needed to identify the selected count views. Keep Netflix and Crime in their current cleaning-only status. Do not claim a broader analysis or causal result. Keep raw CSV files outside public assets and do not expose notebook downloads.

## Data and display rules

- Reproduce values from the corresponding cleaned local CSVs with explicit labels and stable ordering.
- Employee values count records. Monthly hiring counts group `Join_Date` by calendar month. Age counts use the four supplied age values.
- Netflix values count cleaned rows by title type.
- Crime values count cleaned rows by severity. Do not publish names, phone numbers, IDs, or other person-level fields.
- Give each chart an accessible title, text alternative, unit label, and caption that names the counted rows and source context.
- Keep charts readable on mobile and prevent page-level horizontal overflow.

## Verification

Check grouped values against the cleaned CSVs and notebook operations. Run the source-data verifier, lint, typecheck, and production build. Review all three case-study pages at desktop and mobile widths.

## Self-review

- The selected views match the approved design.
- The incorrect age histogram binning is not copied.
- Netflix and Crime remain cleaning-only projects.
- The charts show aggregate counts only.
