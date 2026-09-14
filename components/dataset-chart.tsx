type ChartItem = { label: string; value: number };

type DatasetChartProps = {
  title: string;
  measure: string;
  items: ChartItem[];
  valueLabel: string;
  rowCount: number;
};

export function DatasetChart({
  title,
  measure,
  items,
  valueLabel,
  rowCount,
}: DatasetChartProps) {
  const maximum = Math.max(...items.map((item) => item.value));
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  });

  return (
    <figure className="dataset-chart">
      <div className="chart-heading">
        <div>
          <span className="eyebrow">From the cleaned dataset</span>
          <h3>{title}</h3>
        </div>
        <span className="chart-unit">{valueLabel}</span>
      </div>
      <div
        className="chart-plot"
        role="img"
        aria-label={`${title}. ${items.map((item) => `${item.label}: ${formatter.format(item.value)}`).join("; ")}. Bars start at zero.`}
      >
        {items.map((item) => (
          <div className="chart-row" key={item.label} aria-hidden="true">
            <span className="chart-label">{item.label}</span>
            <div className="chart-track">
              <span
                className="chart-bar"
                style={{ width: `${(item.value / maximum) * 100}%` }}
              />
            </div>
            <span className="chart-value">{formatter.format(item.value)}</span>
          </div>
        ))}
        <div className="chart-axis" aria-hidden="true">
          <span>0</span>
          <span>{formatter.format(maximum)}</span>
        </div>
      </div>
      <figcaption>
        {measure}. Calculated from {formatter.format(rowCount)} rows in the
        shared cleaned Kaggle dataset. Bars start at zero.
      </figcaption>
    </figure>
  );
}
