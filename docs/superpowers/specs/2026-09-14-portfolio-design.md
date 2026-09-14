# Hassan Ahmed portfolio design

The user delegates design decisions. The PRD remains the content authority.

## Direction

Use an editorial portfolio with charcoal backgrounds, warm white text, and restrained teal accents. Set large, closely spaced headings in a distinctive sans-serif. Use monospaced section indexes and fine rules for analytical detail. Avoid dashboard chrome, invented metrics, and excessive panels.

The hero uses a left-aligned promise and a decorative drifting network on the right. Display a small availability label and two clear links. A wide container, substantial section spacing, and a six-project gallery provide a clear reading rhythm. Project illustrations are abstract and carry no numerical claims. A portrait placeholder uses initials and explicitly says a photo is pending.

Alternative approaches considered: a dashboard layout would distract from the service promise; a text-only layout would undersell the analytical work. The editorial approach combines clear copy with relevant visual detail.

## Architecture and content

Use Next.js App Router, React, TypeScript, local content, and static case study routes. Keep client code limited to navigation, motion, and contact interaction. The homepage follows the exact PRD section order. Case studies distinguish cleaning, analysis, and work in progress. Include evidence-based visuals only when source files can be inspected.

The contact form validates name, email, and project description. It opens a prefilled mailto URL and explains the visitor must send the email. Include a copy-email fallback, WhatsApp, and LinkedIn. Service links carry their service name into the contact area. Portrait, resume, Power BI sample, and unfinished project details use honest status text.

## Accessibility and verification

Use semantic landmarks, visible keyboard focus, labeled fields, mobile navigation, and adequate contrast. Reduced-motion mode stops animated network motion and entrance effects. Content remains visible without animation or JavaScript. Verify all seven routes, page metadata, contact behavior, links, mobile overflow, keyboard access, and production build. A QA agent reviews requirements first, then implementation quality.
