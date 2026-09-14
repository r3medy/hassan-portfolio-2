# Project source evidence

Inspected on 14 September 2026. PRD.md is the authority for Hassan's completed work and project status.

## Shared files

The [Cleaned folder](https://drive.google.com/drive/folders/1bXcLzbHpVDepvPtoqRbP0Dfhi0eqtrNB) contains four readable CSV files. Original files are kept in the ignored `.source-data/` folder for local verification. The website must not serve these files or expose download links.

| Project | Shared filename | Drive file ID | Rows |
| --- | --- | --- | ---: |
| Retail | Cleaned_retail_store_sales.csv | 12fYkDGuDIY1KodYBRXW3wIAFLMpqjaoa | 11,971 |
| Employee | Cleaned_Employee_dataset.csv | 15bKQCZTvdd2IiJGunwWC7j5uqPMKr4u9 | 1,020 |
| Netflix | netflix_titles_cleaned.csv | 18ytJN_YAg5fRQ8UfHFXiZG452nAT0K6s | 8,794 |
| Crime | cleaned_crime_incidents_processed.csv | 1M-35cVtY6calCP8azpoGACbHIN8NaW38 | 5,050 |

The public folder did not expose a parent folder link. Related notebooks were not inspected. Do not infer exact original cleaning operations or per-project libraries from the output CSV alone.

## Website visuals

`chart-evidence.json` contains the exact aggregates used for new retail and employee visuals. `verify_source_data.py` reproduces them using Python's standard library.

- Retail: group all supplied rows by `Category`, then sum `Total Spent` with decimal arithmetic. The file does not specify a currency. Use recorded units without a currency symbol. Do not treat this as a real client's revenue result.
- Employee: count supplied rows by `Department`. These are records, not verified unique employees. Do not publish names, salaries, or other individual details.
- Netflix and Crime remain cleaning-only projects. Do not turn a new visualization into a claim that Hassan completed an analysis.
- Smart Cities scope comes from the PRD. Its visuals and findings remain pending.
- Project cover illustrations and hero network marks are decorative, not measured data.

## Supported output descriptions

Retail includes transaction dates and derived month/year columns alongside category, quantity, unit price, total spent, payment method, location, and discount fields. Employee includes department, region, employment status, join date, and work arrangement fields. Netflix includes separate duration and duration-unit columns, added-date fields, and explicit Unknown values. Crime includes incident date, location, case status, resolution, arrest count, and property loss fields.

These facts describe the supplied outputs. They do not prove a particular transformation or quantified cleaning improvement.

## Motion reference

The [Yan Holtz portfolio](https://www.yan-holtz.com/) was inspected in a browser. Its hero uses sparse drifting dots with connecting lines. The implementation adapts that visual idea to the approved dark palette and preserves text contrast.

## Live soccer project

The [Soccer Match Scraper](https://match-day-gray.vercel.app/) loads as “Match Finder.” The observed page contains a Match date field and Get matches action. Its description covers fixtures, scores, and status. The browser check confirms the destination and date-based interface, not the scraper's implementation or backend availability for every date.
