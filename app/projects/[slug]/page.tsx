import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import chartEvidence from "@/docs/chart-evidence.json";
import { DatasetChart } from "@/components/dataset-chart";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";
import { NotebookFigures } from "@/components/notebook-figures";
import { ProjectArtwork } from "@/components/project-artwork";
import { RetailCharts } from "@/components/retail-charts";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: `${project.summary} Read the case study by Hassan Ahmed.`,
    openGraph: {
      title: `${project.title} — Hassan Ahmed`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];
  const retailChart =
    slug === "retail-store-sales" ? chartEvidence.retail : null;
  const employeeChart =
    slug === "messy-employee-dataset" ? chartEvidence.employee : null;

  return (
    <main id="main" className="case-page">
      <div className="container case-top">
        <Link className="back-link" href="/#projects">
          <ArrowLeft size={17} /> All projects
        </Link>
        <span className="case-count">CASE STUDY {project.number} / 06</span>
      </div>
      <header className="container case-hero">
        <div className="case-title-block">
          <span className="eyebrow">{project.eyebrow}</span>
          <h1>
            {project.title}
            <span className="teal-period">.</span>
          </h1>
          <p>{project.summary}</p>
          {project.status ? (
            <span className="case-status">
              <span className="status-dot" />
              {project.status}
            </span>
          ) : null}
        </div>
        <ProjectArtwork slug={slug} large />
      </header>
      <div className="container case-body">
        <div className="case-aside">
          <span className="eyebrow">Project overview</span>
          <dl>
            <div>
              <dt>Scope</dt>
              <dd>{project.eyebrow}</dd>
            </div>
            <div>
              <dt>Source</dt>
              <dd>{project.source}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                {project.status ??
                  (slug === "soccer-match-scraper" ? "Live" : "Shared project")}
              </dd>
            </div>
          </dl>
        </div>
        <div className="case-story">
          <section>
            <span className="case-section-number">01 / THE QUESTION</span>
            <h2>What was the question?</h2>
            <p className="case-lede">{project.question}</p>
          </section>
          <section>
            <span className="case-section-number">02 / THE WORK</span>
            <h2>How I approached it</h2>
            <p>{project.goal}</p>
            <ol className="process-list">
              {project.process.map((step, stepIndex) => (
                <li key={step}>
                  <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <span className="case-section-number">03 / WHAT IS READY</span>
            <h2>
              {slug === "smart-cities"
                ? "What the analysis shows"
                : project.status
                  ? "Still in progress"
                : slug === "netflix-titles" || slug === "crime-incidents"
                  ? "A cleaner starting point"
                  : "What the project shows"}
            </h2>
            <p>{project.outcome}</p>
            {retailChart ? (
              <RetailCharts
                categorySpend={retailChart.categorySpend}
                topItemsByQuantity={retailChart.topItemsByQuantity}
                locationSpend={retailChart.locationSpend}
                paymentTransactions={retailChart.paymentTransactions}
                monthlySpend={retailChart.monthlySpend}
                rowCount={retailChart.rowCount}
              />
            ) : null}
            {employeeChart ? (
              <DatasetChart
                title={employeeChart.title}
                measure={employeeChart.measure}
                items={employeeChart.data}
                valueLabel="Records"
                rowCount={employeeChart.rowCount}
              />
            ) : null}
            {slug === "smart-cities" ? <NotebookFigures /> : null}
            {!retailChart && !employeeChart ? (
              <div className="case-visual-note">
                <span className="eyebrow">Visual note</span>
                <p>{project.visualNote}</p>
              </div>
            ) : null}
            {project.liveUrl ? (
              <a
                className="button button-primary case-live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live project <ArrowUpRight size={18} />
              </a>
            ) : null}
          </section>
          <section>
            <span className="case-section-number">
              04 / TOOLS & SOURCE FORMAT
            </span>
            <h2>Working materials</h2>
            <p>{project.output}</p>
            <div className="case-visual-note">
              <span className="eyebrow">Tool details</span>
              <p>{project.toolsNote}</p>
            </div>
          </section>
        </div>
      </div>
      <div className="container case-bottom">
        <div>
          <span className="eyebrow">Next case study</span>
          <Link href={`/projects/${nextProject.slug}`}>
            {nextProject.title} <ArrowRight size={26} />
          </Link>
        </div>
        <Link className="button button-outline" href="/#contact">
          Discuss a project <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
