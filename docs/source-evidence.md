# Project source evidence

The shared files were first inspected on 14 September 2026. The three supplied notebooks were reviewed on 26 September 2026. PRD.md remains the authority for Hassan's completed work and project status.

## Shared files

The [Cleaned folder](https://drive.google.com/drive/folders/1bXcLzbHpVDepvPtoqRbP0Dfhi0eqtrNB) contains four readable CSV files. Original files are kept in the ignored `.source-data/` folder for local verification. The website must not serve these files or expose download links.

| Project | Shared filename | Drive file ID | Rows |
| --- | --- | --- | ---: |
| Retail | Cleaned_retail_store_sales.csv | 12fYkDGuDIY1KodYBRXW3wIAFLMpqjaoa | 11,971 |
| Employee | Cleaned_Employee_dataset.csv | 15bKQCZTvdd2IiJGunwWC7j5uqPMKr4u9 | 1,020 |
| Netflix | netflix_titles_cleaned.csv | 18ytJN_YAg5fRQ8UfHFXiZG452nAT0K6s | 8,794 |
| Crime | cleaned_crime_incidents_processed.csv | 1M-35cVtY6calCP8azpoGACbHIN8NaW38 | 5,050 |

The public folder did not expose a parent folder link. Do not infer exact original cleaning operations or per-project libraries from an output CSV alone.

## Notebook review — 26 September 2026

- Employee: the supplied notebook uses Python, Pandas, NumPy, and Plotly Express. It includes a monthly hiring plot. It also includes an age histogram that the notebook author flags as wrong. The website uses discrete age counts instead of reproducing that histogram.
- Netflix: the supplied notebook uses Pandas and NumPy for cleaning. It has no plotting calls. Its title-type `value_counts()` summary supports the selected Movie and TV Show counts.
- Crime: the supplied notebook uses Pandas and NumPy for cleaning. It has no plotting calls. Its severity `value_counts()` summary supports the selected severity counts, including Unknown.

The website charts use only selected aggregates from each matching cleaned CSV. Netflix and Crime remain cleaning-only projects. Their count charts do not claim a completed analysis or causal result.

## Website visuals

`chart-evidence.json` contains the exact aggregates used for the Retail, Employee, Netflix, and Crime visuals. `verify_source_data.py` reproduces them from the matching cleaned CSVs using Python's standard library.

- Retail: group all supplied rows by `Category`, then sum `Total Spent` with decimal arithmetic. The file does not specify a currency. Use recorded units without a currency symbol. Do not treat this as a real client's revenue result.
- Employee: count supplied rows by `Join_Date` calendar month and by the four discrete `Age` values. These are records, not verified unique employees. Do not publish names, salaries, or other individual details.
- Netflix: count supplied cleaned rows by `type`, matching the notebook's title-type summary. This limited count view does not change the project's cleaning-only status.
- Crime: count supplied cleaned rows by `severity`, including Unknown, matching the notebook's summary. This limited count view does not change the project's cleaning-only status.
- Smart Cities is Completed. The case study includes selected figures saved from its reviewed notebook.
- Project cover illustrations and hero network marks are decorative, not measured data.

## Supported output descriptions

Retail includes transaction dates and derived month/year columns alongside category, quantity, unit price, total spent, payment method, location, and discount fields. Employee includes age, department, region, employment status, join date, and work arrangement fields. Netflix includes separate duration and duration-unit columns, added-date fields, and explicit Unknown values. Crime includes incident date, location, case status, resolution, arrest count, and property loss fields.

These facts describe the supplied outputs. They do not prove a particular transformation or quantified cleaning improvement.

## Motion reference

The [Yan Holtz portfolio](https://www.yan-holtz.com/) was inspected in a browser. Its hero uses sparse drifting dots with connecting lines. The implementation adapts that visual idea to the approved dark palette and preserves text contrast.

## Live soccer project

The [Soccer Match Scraper](https://match-day-gray.vercel.app/) loads as “Match Finder.” The observed page contains a Match date field and Get matches action. Its description covers fixtures, scores, and status. The browser check confirms the destination and date-based interface, not the scraper's implementation or backend availability for every date.
