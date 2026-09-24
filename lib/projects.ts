export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  status?: string;
  summary: string;
  question: string;
  source: string;
  goal: string;
  process: string[];
  output: string;
  toolsNote: string;
  outcome: string;
  visualNote: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "retail-store-sales",
    number: "01",
    title: "Retail Store Sales",
    eyebrow: "Cleaning · Analysis · Visuals",
    summary:
      "Making a retail sales dataset easier to inspect, compare, and discuss.",
    question:
      "What can a retail team learn from its sales records once the data is ready to analyze?",
    source:
      "Kaggle dataset; project notebook and cleaned CSV shared by Hassan.",
    goal: "Prepare the sales data for analysis and use visuals to explore useful patterns.",
    process: [
      "Clean the source dataset and prepare it for exploration.",
      "Analyze the cleaned records and create visuals to make patterns easier to inspect.",
    ],
    output:
      "The shared cleaned CSV contains transaction date and month/year fields, category, quantity, unit price, total spent, payment method, location, and discount fields.",
    toolsNote:
      "The Colab notebook uses Python, NumPy, Pandas, Seaborn, Matplotlib, and Plotly Express for data preparation, analysis, and visualisation.",
    outcome:
      "The cleaned records support comparing total spend by category and location, item quantities, payment transaction counts, and monthly spend. Spend values use recorded units because the cleaned file does not specify a currency.",
    visualNote:
      "Abstract visual inspired by aligned sales records. It does not depict a measured result.",
  },
  {
    slug: "smart-cities",
    number: "02",
    title: "Smart Cities",
    eyebrow: "Cleaning · Analysis · Visuals",
    status: "Completed",
    summary:
      "Preparing and exploring a multi-table city dataset for the DEPI initiative.",
    question:
      "How can data spread across several city-related tables become useful for analysis?",
    source: "Digital Egypt Pioneers Initiative (DEPI) internship task.",
    goal: "Clean and analyze eight related tables, spanning about 528,000 rows and 90 columns.",
    process: [
      "Clean and prepare eight related tables for analysis.",
      "Explore traffic, emergency, air quality, and weather fields with descriptive summaries.",
      "Create notebook charts for selected patterns with Matplotlib and Seaborn.",
    ],
    output:
      "The completed notebook covers eight related tables and about 528,000 rows across 90 columns, as described by Hassan, with selected chart outputs from the analysis.",
    toolsNote:
      "The notebook uses Python, Pandas, and NumPy for data preparation and analysis, with Matplotlib and Seaborn for visualisation.",
    outcome:
      "The completed analysis includes descriptive views of traffic by hour and emergency type, average air quality by congestion level, and weather event frequency. These views summarize the supplied tables without claiming causal effects.",
    visualNote:
      "These figures are saved outputs from the project notebook. They show selected descriptive views, not every table or analysis result.",
  },
  {
    slug: "messy-employee-dataset",
    number: "03",
    title: "Messy Employee Dataset",
    eyebrow: "Cleaning · Analysis · Visuals",
    summary:
      "Turning a messy employee dataset into a clearer base for exploration.",
    question:
      "What becomes easier to understand after inconsistent employee records are cleaned?",
    source:
      "Kaggle dataset; project notebook and cleaned CSV shared by Hassan.",
    goal: "Clean the dataset, explore the prepared records, and communicate the analysis with visuals.",
    process: [
      "Clean and prepare the source records.",
      "Explore the cleaned dataset and create visuals for the analysis.",
    ],
    output:
      "The shared cleaned CSV includes department, region, employment status, join date, and work arrangement fields.",
    toolsNote:
      "The related notebook has not been reviewed, so project-specific libraries are not listed yet.",
    outcome:
      "The cleaned records support comparing record counts by department. The chart below summarizes the shared dataset; it does not count verified unique employees.",
    visualNote:
      "Abstract visual inspired by a table becoming ordered. It does not depict employee metrics.",
  },
  {
    slug: "netflix-titles",
    number: "04",
    title: "Netflix Titles",
    eyebrow: "Data cleaning",
    summary: "Preparing a titles dataset for reliable downstream analysis.",
    question:
      "How can a catalogue of titles be made more consistent before analysis?",
    source:
      "Kaggle dataset; project notebook and cleaned CSV shared by Hassan.",
    goal: "Clean the source dataset and produce a more usable table.",
    process: ["Clean and prepare the title records in the shared notebook."],
    output:
      "The shared cleaned CSV has separate duration and duration-unit fields, added-date fields, and explicit Unknown values.",
    toolsNote:
      "The related notebook has not been reviewed, so project-specific libraries are not listed yet.",
    outcome:
      "A cleaned CSV is available. A full analysis and findings are not presented for this project.",
    visualNote:
      "Abstract sequence of catalogue tiles. It does not depict title counts.",
  },
  {
    slug: "crime-incidents",
    number: "05",
    title: "Crime Incidents",
    eyebrow: "Data cleaning",
    summary:
      "Making incident records more consistent and ready for further work.",
    question:
      "How can incident records be prepared so later analysis starts from clearer data?",
    source:
      "Kaggle dataset; project notebook and cleaned CSV shared by Hassan.",
    goal: "Clean the source dataset and prepare a usable output table.",
    process: ["Clean and prepare the incident records in the shared notebook."],
    output:
      "The shared cleaned CSV includes incident date, location, case status, resolution, arrest count, and property loss fields. Personal details are not shown here.",
    toolsNote:
      "The related notebook has not been reviewed, so project-specific libraries are not listed yet.",
    outcome:
      "A cleaned CSV is available. A full analysis and findings are not presented for this project.",
    visualNote:
      "Abstract location grid. It does not depict incident locations or counts.",
  },
  {
    slug: "soccer-match-scraper",
    number: "06",
    title: "Soccer Match Scraper",
    eyebrow: "Live project",
    summary:
      "A date-based view of match fixtures and results, including games that have not started.",
    question:
      "How can visitors check match dates and results in one simple view?",
    source: "Hassan's live project.",
    goal: "Let visitors choose a match date and see fixtures, scores, and statuses together.",
    process: [
      "Select a date in the live project to request the matches for that day.",
      "Present fixtures, scores, and match statuses, including games that have not started.",
    ],
    output:
      "The live page has a match-date field and a Get matches action for requesting that day's fixtures.",
    toolsNote:
      "The live interface is verified. Its implementation libraries have not been reviewed.",
    outcome: "The project is live and can be explored through the link below.",
    visualNote: "Abstract pitch markings. It does not depict a match result.",
    liveUrl: "https://match-day-gray.vercel.app/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
