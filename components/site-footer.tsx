import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link className="footer-wordmark" href="/">
            Hassan Ahmed<span>.</span>
          </Link>
          <p>Clearer data. Better questions. More confident decisions.</p>
        </div>
        <Link href="/#top" className="back-top">
          Back to top <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hassan Ahmed</span>
        <span>Cairo, Egypt · Working remotely</span>
      </div>
    </footer>
  );
}
