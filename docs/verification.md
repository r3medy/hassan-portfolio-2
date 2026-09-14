# Final verification

Completed on 14 September 2026 by the implementation, QA, and parent agents.

## Build and routes

- `npm run build`, `npm run lint`, and `npm run typecheck` pass.
- The production prerender manifest marks the homepage and six project pages as static.
- Production HTTP checks return 200 for all seven pages and 404 for an unknown project slug.
- All six case study titles and descriptions are distinct.
- Dependency installation reports zero known vulnerabilities.

## Browser checks

- Inspected the desktop homepage and project gallery.
- Inspected the homepage and retail case study at 390 pixels.
- Checked the homepage and all six case studies at 320 pixels; no horizontal overflow occurred.
- Improved mobile chart labels and values to 11 pixels with labels above each bar.
- Confirmed mobile navigation state, Escape handling, focus return, and close after navigation.
- Confirmed empty and whitespace-only names and descriptions fail validation and receive focus.
- Confirmed invalid email addresses fail validation and receive focus.
- Confirmed service links populate the contact context.
- Confirmed valid submission triggers the email handoff state without claiming delivery.
- Confirmed copy success, its live announcement, and the exact clipboard email address.
- Inspected WhatsApp and LinkedIn destinations and the live soccer project interface.

Reduced-motion behavior, clipboard failure handling, and mailto encoding were verified through source review. A configured external email application was not tested. No email was sent. No public deployment was made.

## Data and content

`docs/verify_source_data.py` reproduces the retail and employee chart aggregates. Raw CSVs stay outside public assets. Project text preserves cleaning-only and work-in-progress distinctions. Unverified notebook methods and libraries remain explicitly pending.

## Preview

The production preview runs at http://127.0.0.1:3001. The development server runs at http://127.0.0.1:3000. Both bind to the local computer. Preview logs are ignored under `.preview/`.

The QA agent found no release-blocking defect. The site retains the approved portrait, resume, Smart Cities, Power BI, and detailed-outcome placeholders.
