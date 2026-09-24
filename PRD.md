# Hassan Ahmed Portfolio — Product Requirements

## Purpose

Build an English portfolio for Hassan Ahmed with React. The main goal is freelance inquiries. Job interviews are a secondary goal.

Hassan is a student and freelance data analyst in Cairo, Egypt. He accepts freelance projects now and works remotely with clients outside Egypt.

The main audience is small businesses and startups with data but no dedicated analyst. Relevant clients include e-commerce and retail teams, service companies, marketing agencies, restaurants, cafés, and small sales teams.

The site should show how Hassan turns messy data into clear answers. It should help a visitor understand his services, inspect his work, and contact him.

## Positioning and copy

The site should lead with data cleaning and analysis for business decisions. It should also offer Power BI dashboards. Machine learning and AI services are deferred until Hassan approves them.

Suggested hero headline: **Make your data easier to act on.**

Suggested supporting line: **I help small businesses and startups clean their data, find useful patterns, and build clear dashboards.**

Approved About copy:

> I'm Hassan Ahmed, a student and freelance data analyst. I help small businesses and startups make sense of their data. I clean datasets, investigate patterns, and build reports or Power BI dashboards when clients need them. I want each project to help a team decide what to do next.

Use a voice that is professional, friendly, direct, and technically credible. Explain client value before naming tools. Do not claim paid client results or completed AI work without evidence.

## Services

Show services that Hassan lists on freelance platforms. The current listing is **Data analysis using Python** on [Khamsat](https://khamsat.com/data/data-analytics/4463794-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%A8-%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D9%84%D8%BA%D8%A9-%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86). Link to the listing and state that more services are coming soon. Do not invent additional listings or prices.

Do not advertise predictive modeling, ML preparation, or other AI services at launch. These can be added later.

List these current tools where they support a project or service: Python, Pandas, NumPy, SQL, Excel, Power BI, Matplotlib, and Seaborn. Avoid a long tool list in the opening section.

## Information architecture

The site has one scrolling home page and a separate case study page for each project.

The home page contains these sections, in order:

1. Hero with a clear service promise and a main contact button.
2. About with a portrait placeholder.
3. Services with listed freelance-platform services and a link to each listing.
4. Projects with six selected case studies.
5. Experience with the DEPI project.
6. Education.
7. Contact.

The main button scrolls to Contact. A second hero link can lead to Projects. The header uses a wordmark based on **Hassan Ahmed**. It links to the main sections.

Do not add a blog, project filters, a GitHub link, or a testimonial section at launch.

## Projects and case studies

Show all six projects. Lead the gallery with **Retail Store Sales** and **Smart Cities**.

| Project | Current scope | Source or status |
| --- | --- | --- |
| Retail Store Sales | Cleaning, analysis, and visuals | Kaggle dataset; shared notebook and cleaned CSV |
| Smart Cities | Cleaning and analysis across eight tables | DEPI internship task; about 528,000 rows and 90 columns; visuals are incomplete |
| Messy Employee Dataset | Cleaning, analysis, and visuals | Kaggle dataset; shared notebook and cleaned CSV |
| Netflix Titles | Cleaning | Kaggle dataset; shared notebook and cleaned CSV |
| Crime Incidents | Cleaning | Kaggle dataset; shared notebook and cleaned CSV |
| Soccer Match Scraper | Match dates and results, including matches that have not started | [Live project](https://match-day-gray.vercel.app/) |

Use the four cleaned CSVs in the shared [Cleaned folder](https://drive.google.com/drive/folders/1bXcLzbHpVDepvPtoqRbP0Dfhi0eqtrNB). Related notebooks are in the parent Drive folder. Some other project files remain on another computer.

Each case study should explain both the business question and the technical work. Show the data source, goal, process, tools, visuals, and supported findings. Name Kaggle as the source where applicable. Do not label those projects as "practice projects."

Create new charts from shared data when they help explain the work. Do not invent findings, business impact, or numerical results. Hassan has deferred detailed outcome figures.

Mark the Smart Cities case study **Work in progress** until its visuals and findings are ready. Cleaning-only projects must not imply that a full analysis was completed.

Visitors can read case studies and view selected visuals. Do not offer dataset or notebook downloads. The soccer case study can link to its live project.

## Experience and education

Show the DEPI (**Digital Egypt Pioneers Initiative**) smart cities task in Experience. Describe its scope without adding an exact date or unverified outcome. Hassan described it as recent.

Show **Software Engineering, Helwan University** in Education. The expected graduation year is **2028**.

Do not add testimonials or endorsements. None are available now.

## Visual direction

Use a dark, minimal design with teal accents. The site should feel creative and analytical. Charts and data marks can guide the visual language without making the page look like a software dashboard.

Use the opening of [Yan Holtz's portfolio](https://www.yan-holtz.com/) as a motion reference. Adapt its drifting dots and connecting lines for the hero background. Keep the text readable above the animation. Add restrained entrance motion to later sections as visitors scroll.

Use a portrait placeholder until Hassan supplies a photo. Use a text wordmark instead of a logo. The site should work on mobile and desktop. Respect reduced-motion settings and keyboard navigation.

## Contact and conversion

The Contact section includes a form with three required fields: **name**, **email**, and **project description**.

Submitting the form opens the visitor's email application. Prefill an email to **hassan0ahmed17@gmail.com** with the form details. Tell visitors that they must send the message from their email application. Do not claim that the site sent the email itself. The site needs no email service, email API, or email library.

If the visitor has no email application configured, show the email address with a copy action as a fallback.

Also show:

- A WhatsApp chat button for **+20 1224926110**. Do not print the number beside the button.
- [Hassan's LinkedIn profile](https://www.linkedin.com/in/hassannahmed/).

Show Hassan's freelance profiles alongside WhatsApp and LinkedIn:

- [Mostaql](https://mostaql.com/u/HasSan7_Ahmed)
- [Khamsat](https://khamsat.com/user/hassan7_ahmed)
- [Nafezly](https://nafezly.com/u/hassan0ahmed)

## Résumé and placeholders

The supplied résumé PDF is available from the About section. Keep the portrait placeholder clear and do not present a broken image.

The following content remains pending: the portrait, completed Smart Cities visuals, final Power BI sample, and detailed project outcomes. The site can launch with the approved placeholders and accurate project descriptions.

## Technical direction

Build with React and deploy to Vercel. Use a React framework that supports the home page and separate case study routes. The recommended choice is Next.js with statically rendered content. Keep project content local to the site until a content system becomes necessary.

Use normal browser behavior for the email handoff. Libraries may support charts and animation. No external library or service should send contact email.

Give each page a clear title and description. Make case study links shareable. Keep the page responsive, accessible, and fast enough that motion does not delay content.

## Launch acceptance criteria

- The home page explains Hassan's offer and leads visitors to Contact.
- The Services section links to the current Khamsat listing and says more services are coming soon.
- Six project cards lead to six readable case study pages.
- Retail and Smart Cities appear first. Smart Cities shows its work-in-progress status.
- Project text distinguishes completed cleaning from completed analysis. It does not invent outcomes.
- The contact form validates its required fields and opens a prefilled email in the visitor's email application.
- WhatsApp, LinkedIn, Mostaql, Khamsat, and Nafezly links lead to the supplied destinations.
- The supplied résumé PDF has a working download link, and the portrait placeholder is clear.
- The site works on mobile, supports keyboard use, and reduces motion when requested.
- The production build succeeds and can deploy to Vercel.
