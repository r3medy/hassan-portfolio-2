import Image from "next/image";

const notebookFigures = [
  {
    src: "/images/smart-cities-hourly-traffic.png",
    width: 1390,
    height: 590,
    title: "Traffic conditions by hour",
    alt: "Two line charts showing average traffic volume and average congestion index for each hour from 0 through 23.",
    caption:
      "Average Traffic Volume by Hour and Average Congestion Index by Hour, plotted against the Hour field.",
  },
  {
    src: "/images/smart-cities-emergency-traffic.png",
    width: 1790,
    height: 590,
    title: "Traffic conditions by emergency type",
    alt: "Three bar charts comparing traffic volume, congestion index, and average speed across six emergency types.",
    caption:
      "Traffic Volume by Emergency Type, Congestion Index by Emergency Type, and Average Speed by Emergency Type.",
  },
  {
    src: "/images/smart-cities-aqi-congestion.png",
    width: 842,
    height: 606,
    title: "Air quality by congestion level",
    alt: "Line chart showing average air quality index across binned congestion index levels.",
    caption:
      "Average AQI by Congestion Level, using binned Congestion Index values on the horizontal axis.",
  },
  {
    src: "/images/smart-cities-weather-events.png",
    width: 990,
    height: 590,
    title: "Weather event frequency",
    alt: "Bar chart showing counts for all weather event categories, including None, heatwave, heavy rain, storms, and combined events.",
    caption:
      "Frequency of Weather Events, showing Count by the Weather Event field.",
  },
] as const;

export function NotebookFigures() {
  return (
    <div className="notebook-figures">
      {notebookFigures.map((figure) => (
        <figure className="notebook-figure" key={figure.src}>
          <div className="notebook-figure-heading">
            <span className="eyebrow">Notebook output</span>
            <h3>{figure.title}</h3>
          </div>
          <div className="notebook-figure-media">
            <Image
              src={figure.src}
              width={figure.width}
              height={figure.height}
              sizes="(max-width: 650px) calc(100vw - 70px), (max-width: 850px) calc(100vw - 108px), (max-width: 1100px) calc(100vw - 410px), (max-width: 1275px) calc(91vw - 400px), 760px"
              alt={figure.alt}
            />
          </div>
          <figcaption>{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
