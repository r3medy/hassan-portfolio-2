import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 / Page not found</span>
      <h1>This page went missing.</h1>
      <p>
        The project may have moved. Head back to the portfolio to keep
        exploring.
      </p>
      <Link className="button button-primary" href="/">
        <ArrowLeft /> Back to home
      </Link>
    </main>
  );
}
