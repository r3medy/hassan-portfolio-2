import type { Metadata } from "next";
import "@fontsource-variable/archivo/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Hassan Ahmed — Freelance Data Analyst",
    template: "%s — Hassan Ahmed",
  },
  description:
    "Hassan Ahmed helps small businesses and startups clean data, find useful patterns, and build clear dashboards.",
  openGraph: {
    type: "website",
    title: "Hassan Ahmed — Freelance Data Analyst",
    description:
      "Make your data easier to act on. Data cleaning, analysis, and Power BI dashboards for small teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
