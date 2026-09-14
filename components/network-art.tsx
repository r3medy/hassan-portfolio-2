const points = [
  [76, 267],
  [125, 119],
  [169, 303],
  [191, 198],
  [226, 83],
  [250, 389],
  [286, 254],
  [315, 143],
  [354, 327],
  [378, 53],
  [412, 220],
  [452, 370],
  [470, 124],
  [521, 280],
  [559, 89],
  [597, 209],
  [631, 340],
  [664, 146],
  [710, 261],
];

const connections = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 5],
  [2, 6],
  [3, 4],
  [3, 6],
  [4, 7],
  [4, 9],
  [5, 6],
  [5, 8],
  [6, 7],
  [6, 8],
  [6, 10],
  [7, 9],
  [7, 10],
  [8, 10],
  [8, 11],
  [9, 12],
  [9, 14],
  [10, 12],
  [10, 13],
  [11, 13],
  [11, 16],
  [12, 14],
  [12, 15],
  [13, 15],
  [13, 16],
  [13, 17],
  [14, 17],
  [15, 17],
  [15, 18],
  [16, 18],
  [17, 18],
];

export function NetworkArt() {
  return (
    <div className="network-art" aria-hidden="true">
      <div className="network-glow" />
      <svg
        viewBox="0 0 760 450"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="network-lines">
          {connections.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={points[from][0]}
              y1={points[from][1]}
              x2={points[to][0]}
              y2={points[to][1]}
            />
          ))}
        </g>
        <g className="network-points">
          {points.map(([x, y], index) => (
            <circle
              key={index}
              className={index % 4 === 0 ? "point-bright" : ""}
              cx={x}
              cy={y}
              r={index % 4 === 0 ? 4 : 2.5}
            />
          ))}
        </g>
        <circle className="network-ring ring-one" cx="286" cy="254" r="25" />
        <circle className="network-ring ring-two" cx="521" cy="280" r="21" />
      </svg>
      <span className="network-coordinate coordinate-one">CAI / 30.04°N</span>
      <span className="network-coordinate coordinate-two">DATA → DECISION</span>
    </div>
  );
}
