"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface CaseStudyChartItem {
  label: string;
  value: number;
}

export interface EmployeeChartEvidence {
  monthlyHiring: CaseStudyChartItem[];
  ageDistribution: CaseStudyChartItem[];
  rowCount: number;
}

export interface NetflixChartEvidence {
  byType: CaseStudyChartItem[];
  rowCount: number;
}

export interface CrimeChartEvidence {
  severity: CaseStudyChartItem[];
  rowCount: number;
}

export interface CaseStudyChartsProps {
  employee: EmployeeChartEvidence | null;
  netflix: NetflixChartEvidence | null;
  crime: CrimeChartEvidence | null;
}

interface HorizontalBarFigureProps {
  caption: string;
  data: CaseStudyChartItem[];
  id: string;
  size: "compact" | "standard";
  title: string;
  yAxisWidth: number;
}

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const axisTick = {
  fill: "#c4cec6",
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: 10,
};

const tooltipStyle = {
  background: "#101514",
  border: "1px solid rgba(154, 231, 195, 0.35)",
  borderRadius: 0,
  color: "#ecefe7",
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: 11,
};

function formatTextAlternative(title: string, data: CaseStudyChartItem[]) {
  const values = data
    .map(
      (item) =>
        `${item.label}: ${numberFormatter.format(item.value)} records`,
    )
    .join("; ");

  return `${title}. ${values}.`;
}

function ChartHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="case-study-chart-heading">
      <div>
        <span className="eyebrow">From the cleaned dataset</span>
        <h3 id={`${id}-title`}>{title}</h3>
      </div>
      <span className="case-study-chart-unit">Unit: records</span>
    </div>
  );
}

function HorizontalBarFigure({
  caption,
  data,
  id,
  size,
  title,
  yAxisWidth,
}: HorizontalBarFigureProps) {
  return (
    <figure
      className="case-study-chart"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description ${id}-caption`}
    >
      <ChartHeading id={id} title={title} />
      <p className="sr-only" id={`${id}-description`}>
        {formatTextAlternative(title, data)}
      </p>
      <div className="case-study-chart-scroll">
        <div
          className={`case-study-chart-plot case-study-chart-plot-${size}`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 8, right: 24, bottom: 32, left: 8 }}
              accessibilityLayer
              title={title}
            >
              <CartesianGrid
                stroke="rgba(216, 238, 224, 0.13)"
                strokeDasharray="3 4"
                horizontal={false}
              />
              <XAxis
                type="number"
                allowDecimals={false}
                domain={[0, "dataMax"]}
                tick={axisTick}
                tickFormatter={(value: number) =>
                  numberFormatter.format(value)
                }
                label={{
                  value: "Record count",
                  position: "insideBottom",
                  offset: -18,
                  fill: "#9ba9a0",
                  fontSize: 10,
                }}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={yAxisWidth}
                tick={axisTick}
                interval={0}
              />
              <Tooltip
                formatter={(value) => [
                  numberFormatter.format(Number(value)),
                  "Record count",
                ]}
                contentStyle={tooltipStyle}
                cursor={{ fill: "rgba(154, 231, 195, 0.06)" }}
                itemStyle={{ color: "#9ae7c3" }}
                labelStyle={{ color: "#ecefe7", marginBottom: 4 }}
              />
              <Bar
                dataKey="value"
                name="Record count"
                fill="#9ae7c3"
                radius={[0, 2, 2, 0]}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <figcaption id={`${id}-caption`}>{caption}</figcaption>
    </figure>
  );
}

function EmployeeMonthlyFigure({
  data,
  rowCount,
}: {
  data: CaseStudyChartItem[];
  rowCount: number;
}) {
  const id = "employee-monthly-hiring";
  const title = "Employee records by join month";
  const sparseMonthTicks = data
    .filter((_, index) => index % 6 === 0 || index === data.length - 1)
    .map((item) => item.label);

  return (
    <figure
      className="case-study-chart"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description ${id}-caption`}
    >
      <ChartHeading id={id} title={title} />
      <p className="sr-only" id={`${id}-description`}>
        {formatTextAlternative(title, data)}
      </p>
      <div
        className="case-study-chart-scroll"
        role="region"
        aria-label={`${title} chart. Scroll horizontally on narrow screens.`}
        tabIndex={0}
      >
        <div className="case-study-chart-plot case-study-chart-plot-line">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 8, right: 24, bottom: 34, left: 18 }}
              accessibilityLayer
              title={title}
            >
              <CartesianGrid
                stroke="rgba(216, 238, 224, 0.13)"
                strokeDasharray="3 4"
              />
              <XAxis
                type="category"
                dataKey="label"
                ticks={sparseMonthTicks}
                tick={axisTick}
                label={{
                  value: "Join month",
                  position: "insideBottom",
                  offset: -20,
                  fill: "#9ba9a0",
                  fontSize: 10,
                }}
              />
              <YAxis
                type="number"
                allowDecimals={false}
                domain={[0, "auto"]}
                tick={axisTick}
                tickFormatter={(value: number) =>
                  numberFormatter.format(value)
                }
                label={{
                  value: "Record count",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9ba9a0",
                  fontSize: 10,
                }}
              />
              <Tooltip
                formatter={(value) => [
                  numberFormatter.format(Number(value)),
                  "Record count",
                ]}
                contentStyle={tooltipStyle}
                itemStyle={{ color: "#9ae7c3" }}
                labelStyle={{ color: "#ecefe7", marginBottom: 4 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                name="Record count"
                stroke="#9ae7c3"
                strokeWidth={2}
                dot={{ r: 2.5, strokeWidth: 0 }}
                activeDot={{ r: 5 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <figcaption id={`${id}-caption`}>
        Counts of Join_Date records by calendar month across{" "}
        {numberFormatter.format(rowCount)} cleaned rows. Each value counts
        records, not verified unique employees.
      </figcaption>
    </figure>
  );
}

export function CaseStudyCharts({
  employee,
  netflix,
  crime,
}: CaseStudyChartsProps) {
  if (!employee && !netflix && !crime) return null;

  return (
    <div className="case-study-charts">
      {employee ? (
        <>
          <EmployeeMonthlyFigure
            data={employee.monthlyHiring}
            rowCount={employee.rowCount}
          />
          <HorizontalBarFigure
            id="employee-age-counts"
            title="Employee records by age"
            data={employee.ageDistribution}
            yAxisWidth={72}
            size="standard"
            caption={`Counts of Age values across ${numberFormatter.format(employee.rowCount)} cleaned rows. Each value counts records, not verified unique employees.`}
          />
        </>
      ) : null}
      {netflix ? (
        <HorizontalBarFigure
          id="netflix-type-counts"
          title="Cleaned title records by type"
          data={netflix.byType}
          yAxisWidth={90}
          size="compact"
          caption={`Counts of cleaned title rows by type across ${numberFormatter.format(netflix.rowCount)} cleaned rows. Each value counts records.`}
        />
      ) : null}
      {crime ? (
        <HorizontalBarFigure
          id="crime-severity-counts"
          title="Cleaned incident records by severity"
          data={crime.severity}
          yAxisWidth={90}
          size="standard"
          caption={`Counts of cleaned incident rows by severity across ${numberFormatter.format(crime.rowCount)} cleaned rows. Each value counts records, and Unknown remains a source category.`}
        />
      ) : null}
    </div>
  );
}
