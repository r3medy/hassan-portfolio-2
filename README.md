# Hassan Ahmed portfolio

A React portfolio built with Next.js App Router and TypeScript. The homepage presents services, six projects, experience, education, and contact details. Each project has a separate static case study route.

## Run locally

Install a current Node.js LTS release, then run:

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). After the initial installation, use `npm ci` for reproducible installs from the lockfile.

## Check the project

```sh
npm run lint
npm run build
npm run typecheck
```

Preview the production build:

```sh
npm run start
```

## Content and behavior

- `PRD.md` contains the approved content requirements.
- `lib/projects.ts` stores case study content and route slugs.
- `app/` contains pages, metadata, and shared styles.
- `components/` contains navigation, contact, charts, and decorative graphics.
- `docs/source-evidence.md` records source inspection and chart methodology.
- `docs/chart-evidence.json` stores verified retail and employee aggregates.

The contact form opens an email draft addressed to Hassan. The visitor must send the draft from their email application. No email service, API key, database, or environment variable is required. A copy-email action provides a fallback.

The portrait remains a clear placeholder. The Smart Cities case study is Completed and includes selected descriptive notebook figures. The Power BI sample is pending. Netflix and Crime Incidents present cleaning work only. The résumé PDF is available from the About section.

The Services section links to the current Python data analysis listing on Khamsat. The Contact section links to Hassan's WhatsApp, LinkedIn, Mostaql, Khamsat, and Nafezly profiles.

The site never publishes source CSVs or notebooks. `.source-data/` contains local verification copies and is excluded from Git. With those copies present, reproduce chart checks using `python docs/verify_source_data.py`.

## Deploy to Vercel

Push the project to your own Git repository. Import that repository into Vercel and select its Next.js framework preset. Use the project root and the default Next.js build settings. No custom server or email credentials are needed.

This workspace does not include a public deployment. See the [Next.js deployment documentation](https://nextjs.org/docs/app/getting-started/deploying) for hosting options.

## Later content updates

Replace the portrait placeholder when a photo is ready. Update project status, methods, and findings when supporting work is available. Preserve the source distinction between dataset summaries and verified client outcomes.
