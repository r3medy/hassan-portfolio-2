import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { NetworkArt } from "@/components/network-art";
import { ProjectArtwork } from "@/components/project-artwork";
import { projects } from "@/lib/projects";

const services = [
  {
    number: "01",
    title: "Data cleaning + simple analysis",
    description:
      "Fix data quality issues and get a basic summary of the cleaned data.",
    detail:
      "A useful first step when your records need attention before your team can rely on them.",
  },
  {
    number: "02",
    title: "Data cleaning + analysis",
    description:
      "Clean the data, explore patterns, and get relevant visuals with clear findings.",
    detail:
      "For teams that need to understand what the data says and what to look at next.",
  },
  {
    number: "03",
    title: "Data cleaning + analysis + dashboard",
    description:
      "Complete the analysis and bring key measures into a Power BI dashboard.",
    detail:
      "For teams that need a clear view they can return to. Dashboard sample in progress.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section id="top" className="hero" aria-labelledby="hero-heading">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-pulse" /> Available for freelance
              projects <span className="availability-divider">/</span> Remote
              worldwide
            </div>
            <p className="hero-kicker">Data analyst · Cairo, Egypt</p>
            <h1 id="hero-heading">
              Make your data <em>easier</em> to act on
              <span className="teal-period">.</span>
            </h1>
            <p className="hero-description">
              I help small businesses and startups clean their data, find useful
              patterns, and build clear dashboards.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#contact">
                Let&apos;s work together <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" href="#projects">
                Explore my work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <NetworkArt />
        </div>
        <div className="container hero-bottom">
          <span>01 / 07 — INTRODUCTION</span>
          <span>
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section
        id="about"
        className="section about-section"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">02 / ABOUT</span>
            <span className="section-rule" />
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">A little about me</p>
              <h2 id="about-heading">
                The person behind the{" "}
                <span className="accent-text">patterns.</span>
              </h2>
              <p className="body-large">
                I&apos;m Hassan Ahmed, a student and freelance data analyst. I
                help small businesses and startups make sense of their data.
              </p>
              <p>
                I clean datasets, investigate patterns, and build reports or
                Power BI dashboards when clients need them. I want each project
                to help a team decide what to do next.
              </p>
              <div className="about-meta">
                <span>Based in Cairo, Egypt</span>
                <span>Working remotely worldwide</span>
              </div>
              <div className="resume-status">
                <span className="resume-icon" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <strong>Résumé PDF is being prepared</strong>
                  <span>A download will appear here when it is ready.</span>
                </div>
              </div>
            </div>
            <div
              className="portrait-frame"
              role="img"
              aria-label="Portrait placeholder for Hassan Ahmed; photo coming soon"
            >
              <div className="portrait-mark">
                HA<span>.</span>
              </div>
              <div className="portrait-caption">
                <span>Hassan Ahmed</span>
                <span>Portrait coming soon</span>
              </div>
              <span className="portrait-corner corner-top" />
              <span className="portrait-corner corner-bottom" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section services-section"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">03 / SERVICES</span>
            <span className="section-rule" />
          </div>
          <div className="section-intro">
            <div>
              <p className="eyebrow">What I can help with</p>
              <h2 id="services-heading">
                From messy records
                <br />
                to <span className="accent-text">clear direction.</span>
              </h2>
            </div>
            <p>
              Every dataset and business question is different. Choose the
              support that fits your project, and I&apos;ll put together a
              custom quote.
            </p>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-detail">{service.detail}</span>
                </div>
                <Link
                  className="service-cta"
                  href={`/?service=${encodeURIComponent(service.title)}#contact`}
                  aria-label={`Get a custom quote for ${service.title}`}
                >
                  <span>Get a custom quote</span>
                  <ArrowUpRight size={18} />
                </Link>
              </article>
            ))}
          </div>
          <div className="tools-context">
            <span className="eyebrow">Tools I work with</span>
            <p>
              Python <span>·</span> Pandas <span>·</span> NumPy <span>·</span>{" "}
              SQL <span>·</span> Excel <span>·</span> Power BI <span>·</span>{" "}
              Matplotlib <span>·</span> Seaborn
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="section projects-section"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">04 / PROJECTS</span>
            <span className="section-rule" />
          </div>
          <div className="section-intro projects-intro">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-heading">
                Questions, data,
                <br />
                <span className="accent-text">clearer answers.</span>
              </h2>
            </div>
            <p>
              Six projects across data preparation, analysis, and a live web
              tool. Each case study shows the scope and what is ready to share.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <Link
                className="project-card"
                href={`/projects/${project.slug}`}
                key={project.slug}
                aria-label={`Read ${project.title} case study`}
              >
                <ProjectArtwork slug={project.slug} />
                <div className="project-card-top">
                  <span>{project.number} / 06</span>
                  {project.status ? (
                    <span className="project-status">
                      <span className="status-dot" />
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <div className="project-card-bottom">
                  <div>
                    <span className="project-eyebrow">{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <span className="project-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="section experience-section"
        aria-labelledby="experience-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">05 / EXPERIENCE</span>
            <span className="section-rule" />
          </div>
          <div className="experience-grid">
            <div>
              <p className="eyebrow">Where I&apos;ve applied my skills</p>
              <h2 id="experience-heading">
                Learning by <span className="accent-text">doing.</span>
              </h2>
            </div>
            <div className="experience-item">
              <div className="experience-item-top">
                <span className="eyebrow">Recent project</span>
                <span>DEPI</span>
              </div>
              <h3>Smart Cities data task</h3>
              <p className="experience-org">
                Digital Egypt Pioneers Initiative
              </p>
              <p>
                Completed cleaning and analysis across eight related tables,
                covering about 528,000 rows and 90 columns. The completed
                notebook includes selected views of traffic, air quality, and
                weather events.
              </p>
              <Link className="inline-link" href="/projects/smart-cities">
                View the case study <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="section education-section"
        aria-labelledby="education-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">06 / EDUCATION</span>
            <span className="section-rule" />
          </div>
          <div className="education-grid">
            <div>
              <p className="eyebrow">Always learning</p>
              <h2 id="education-heading">
                A foundation in{" "}
                <span className="accent-text">engineering.</span>
              </h2>
            </div>
            <div className="education-item">
              <span className="education-year">Expected 2028</span>
              <h3>Software Engineering</h3>
              <p>Helwan University</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-index">07 / CONTACT</span>
            <span className="section-rule" />
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-heading">
                Have data.
                <br />
                Need <span className="accent-text">clarity?</span>
              </h2>
              <p>
                Tell me what you&apos;re working with and what decisions you
                need to make. I&apos;ll be glad to discuss the next step.
              </p>
              <div className="contact-links">
                <a
                  href="https://wa.me/201224926110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hassannahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
