"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface RetailChartItem {
  label: string;
  value: number;
}

export interface RetailChartsProps {
  categorySpend: RetailChartItem[];
  topItemsByQuantity: RetailChartItem[];
  locationSpend: RetailChartItem[];
  paymentTransactions: RetailChartItem[];
  monthlySpend: RetailChartItem[];
  rowCount: number;
}

interface HorizontalBarFigureProps {
  caption: string;
  data: RetailChartItem[];
  id: string;
  title: string;
  valueLabel: string;
  yAxisWidth: number;
  tall?: boolean;
}

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

const axisTick = {
  fill: "#c4cec6",
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: 10,
};

const lineColors = ["#9ae7c3", "#e0b96d", "#8ba6ff", "#dc88af"];
const lineDashes = [undefined, "7 4", "3 3", "10 4 2 4"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function HorizontalBarFigure({
  caption,
  data,
  id,
  title,
  valueLabel,
  yAxisWidth,
  tall = false,
}: HorizontalBarFigureProps) {
  return (
    <figure
      className={`retail-chart${tall ? " retail-chart-wide" : ""}`}
      aria-labelledby={`${id}-title ${id}-caption`}
    >
      <div className="retail-chart-heading">
        <span className="eyebrow">From the cleaned dataset</span>
        <h3 id={`${id}-title`}>{title}</h3>
      </div>
      <div
        className="retail-chart-scroll"
        role="region"
        aria-label={`${title} chart. Scroll horizontally on narrow screens.`}
        tabIndex={0}
      >
        <div
          className={`retail-chart-plot${tall ? " retail-chart-plot-tall" : ""}`}
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
                domain={[0, "dataMax"]}
                tick={axisTick}
                tickFormatter={(value: number) => numberFormatter.format(value)}
                label={{
                  value: valueLabel,
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
                  valueLabel,
                ]}
                contentStyle={{
                  background: "#101514",
                  border: "1px solid rgba(154, 231, 195, 0.35)",
                  borderRadius: 0,
                  color: "#ecefe7",
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 11,
                }}
                cursor={{ fill: "rgba(154, 231, 195, 0.06)" }}
                itemStyle={{ color: "#9ae7c3" }}
                labelStyle={{ color: "#ecefe7", marginBottom: 4 }}
              />
              <Bar
                dataKey="value"
                name={valueLabel}
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

function createMonthlySeries(items: RetailChartItem[]) {
  const years = Array.from(
    new Set(items.map((item) => item.label.split(" ")[0])),
  );
  const values = new Map(items.map((item) => [item.label, item.value]));
  const data = months.map((month) => {
    const point: Record<string, string | number | null> = { month };

    for (const year of years) {
      point[year] = values.get(`${year} ${month}`) ?? null;
    }

    return point;
  });

  return { data, years };
}

export function RetailCharts({
  categorySpend,
  topItemsByQuantity,
  locationSpend,
  paymentTransactions,
  monthlySpend,
  rowCount,
}: RetailChartsProps) {
  const rows = numberFormatter.format(rowCount);
  const monthlySeries = createMonthlySeries(monthlySpend);

  return (
    <div className="retail-charts">
      <HorizontalBarFigure
        id="retail-category-spend"
        title="Total recorded spend units by category"
        data={categorySpend}
        valueLabel="Recorded spend units"
        yAxisWidth={210}
        caption={`Sum of Total Spent by category across ${rows} cleaned rows. Values use recorded spend units because the source file does not specify a currency.`}
      />
      <HorizontalBarFigure
        id="retail-location-spend"
        title="Total recorded spend units by location"
        data={locationSpend}
        valueLabel="Recorded spend units"
        yAxisWidth={90}
        caption={`Sum of Total Spent by purchase location across ${rows} cleaned rows. Values use recorded spend units because the source file does not specify a currency.`}
      />
      <HorizontalBarFigure
        id="retail-payment-transactions"
        title="Transactions by payment method"
        data={paymentTransactions}
        valueLabel="Transaction count"
        yAxisWidth={112}
        caption={`Count of Transaction ID by payment method across ${rows} cleaned rows.`}
      />
      <HorizontalBarFigure
        id="retail-top-items"
        title="Top 20 items by quantity"
        data={topItemsByQuantity}
        valueLabel="Quantity"
        yAxisWidth={310}
        tall
        caption={`Sum of Quantity by category and item across ${rows} cleaned rows, sorted from highest to lowest and limited to 20 items.`}
      />
      <figure
        className="retail-chart retail-chart-wide"
        aria-labelledby="retail-monthly-spend-title retail-monthly-spend-caption"
      >
        <div className="retail-chart-heading">
          <span className="eyebrow">From the cleaned dataset</span>
          <h3 id="retail-monthly-spend-title">
            Monthly recorded spend units by year
          </h3>
        </div>
        <div
          className="retail-chart-scroll"
          role="region"
          aria-label="Monthly recorded spend units by year chart. Scroll horizontally on narrow screens."
          tabIndex={0}
        >
          <div className="retail-chart-plot retail-chart-plot-line">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlySeries.data}
                margin={{ top: 8, right: 24, bottom: 34, left: 18 }}
                accessibilityLayer
                title="Monthly recorded spend units by year"
              >
                <CartesianGrid
                  stroke="rgba(216, 238, 224, 0.13)"
                  strokeDasharray="3 4"
                />
                <XAxis
                  dataKey="month"
                  tick={axisTick}
                  label={{
                    value: "Transaction month",
                    position: "insideBottom",
                    offset: -20,
                    fill: "#9ba9a0",
                    fontSize: 10,
                  }}
                />
                <YAxis
                  domain={[0, "auto"]}
                  tick={axisTick}
                  tickFormatter={(value: number) =>
                    numberFormatter.format(value)
                  }
                  label={{
                    value: "Recorded spend units",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#9ba9a0",
                    fontSize: 10,
                  }}
                />
                <Tooltip
                  formatter={(value, name) => [
                    numberFormatter.format(Number(value)),
                    String(name),
                  ]}
                  contentStyle={{
                    background: "#101514",
                    border: "1px solid rgba(154, 231, 195, 0.35)",
                    borderRadius: 0,
                    color: "#ecefe7",
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 11,
                  }}
                  itemStyle={{ color: "#ecefe7" }}
                  labelStyle={{ color: "#9ae7c3", marginBottom: 4 }}
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{
                    color: "#c4cec6",
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 10,
                    paddingBottom: 12,
                  }}
                />
                {monthlySeries.years.map((year, index) => (
                  <Line
                    key={year}
                    type="monotone"
                    dataKey={year}
                    name={year}
                    stroke={lineColors[index % lineColors.length]}
                    strokeDasharray={lineDashes[index % lineDashes.length]}
                    strokeWidth={2}
                    dot={{ r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                    connectNulls={false}
                    isAnimationActive={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <figcaption id="retail-monthly-spend-caption">
          Sum of Total Spent by transaction month and year across {rows} cleaned
          rows. Values use recorded spend units because the source file does not
          specify a currency.
        </figcaption>
      </figure>
    </div>
  );
}
