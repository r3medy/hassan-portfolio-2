# Portfolio acceptance checklist

Use this checklist after the implementation is complete. The PRD is the content authority.

## Information architecture and content

- [ ] Home page sections appear in this order: Hero, About, Services, Projects, Experience, Education, Contact.
- [ ] Hero states the data-cleaning and analysis offer, links to Contact, and may link to Projects.
- [ ] About identifies Hassan as a student and freelance data analyst. The portrait states that a photo is pending.
- [ ] Services show the current Python data analysis listing on Khamsat and state that more services are coming soon.
- [ ] The service link opens the supplied Khamsat listing in a new tab.
- [ ] No launch copy advertises ML, AI, predictive modeling, testimonials, a blog, project filters, or GitHub.
- [ ] Experience names the DEPI Smart Cities task without an exact date or unverified outcome.
- [ ] Education states Software Engineering, Helwan University, with expected graduation in 2028.
- [ ] Résumé download links to the supplied PDF.

## Projects and evidence

- [ ] Six project cards exist, with Retail Store Sales first and Smart Cities second.
- [ ] Each project card links to one readable, static case-study route. The six routes are unique and shareable.
- [ ] Every case study explains source, goal, process, tools, and scoped work without fabricated findings, impact, or tool use.
- [ ] Retail, Employee, Netflix, and Crime identify Kaggle as the source. No page exposes datasets or notebook downloads.
- [ ] Smart Cities is marked Completed and includes selected descriptive notebook figures without causal claims.
- [ ] Netflix Titles and Crime Incidents state cleaning-only scope. They do not imply completed analysis.
- [ ] Retail and Employee charts match `docs/chart-evidence.json`; Retail shows no currency and Employee labels counts as records.
- [ ] Soccer Match Scraper accurately describes match dates and results, including unstarted matches, and its live link targets the approved URL.
- [ ] Only evidence-supported tools appear. Tool lists use the approved set: Python, Pandas, NumPy, SQL, Excel, Power BI, Matplotlib, and Seaborn.

## Contact and conversion

- [ ] Contact has labeled, required Name, Email, and Project description fields.
- [ ] Leading and trailing whitespace fails validation where the submitted value would otherwise be blank.
- [ ] Invalid email input prevents submission and gives an understandable error.
- [ ] Valid submission opens `mailto:hassan0ahmed17@gmail.com` with URL-encoded subject and body values.
- [ ] The page tells visitors that their email application must send the message.
- [ ] The fallback exposes the email address and provides a copy action when no mail client exists.
- [ ] Clipboard failures show an error or recovery state; success feedback is announced without relying only on color.
- [ ] WhatsApp opens a chat for `+20 1224926110` without printing the number beside its button.
- [ ] LinkedIn targets `https://www.linkedin.com/in/hassannahmed/`.
- [ ] Mostaql, Khamsat, and Nafezly profile links target the supplied URLs and open in new tabs.

## Accessibility, responsive behavior, and performance

- [ ] Header, navigation, main content, sections, footer, headings, links, buttons, and form controls use suitable semantic elements.
- [ ] Keyboard focus is visible. All navigation, CTAs, form controls, and copy action work with a keyboard.
- [ ] Mobile navigation opens and closes by keyboard, exposes its state, moves focus predictably, and closes after a link activates.
- [ ] Escape closes the mobile menu and returns focus to its toggle.
- [ ] `prefers-reduced-motion: reduce` stops the hero network and entrance effects while leaving content visible.
- [ ] The home page and case studies have no horizontal overflow at common mobile widths.
- [ ] Motion does not delay readable content. Decorative graphics are hidden from assistive technology where suitable.

## Routes, metadata, and release checks

- [ ] Home plus six case-study routes render statically; unknown case-study slugs show a 404 page.
- [ ] Each route has a distinct, meaningful title and description.
- [ ] `npm run typecheck`, `npm run lint`, and `npm run build` complete successfully after implementation settles.
- [ ] Browser checks cover the home page, all six case studies, mobile layout, keyboard navigation, reduced motion, contact validation, mailto encoding, clipboard failure handling, and external links.

## Final QA record — 14 September 2026

- Source review passed for PRD content, metadata, static routes, contact validation, mailto encoding, accessibility semantics, mobile navigation, and reduced-motion rules.
- `python docs/verify_source_data.py` reproduced the published Retail and Employee chart aggregates from the retained source data.
- The implementation owner reported passing `npm run typecheck`, `npm run lint`, and `npm run build`.
- Browser review covered the home page, all six case studies, 320 px and 390 px layouts, mobile menu keyboard behavior, form validation and focus, mailto fallback wording, and clipboard copy feedback.

## Known launch limitations

- The site has no automated interaction test suite. Repeat the manual browser checks above after contact, navigation, or route changes.
- Scroll entrance effects use CSS view timelines when the browser supports them. Other browsers show the same content without the effect.
- Smart Cities is Completed and includes selected descriptive notebook figures. The portrait and detailed project outcomes remain approved placeholders or work in progress. The Power BI sample remains pending. The résumé PDF is supplied.
