import { Stage, Layer, Circle, Line, Arrow } from "react-konva";
import type { utterances } from "~/data/api";

export default function Graph({
  utterances,
  selectedIdx,
}: {
  utterances: utterances;
  selectedIdx: number;
}) {
  const unit = 30;
  const circles = 5;
  const width = circles * unit * 2;
  const height = circles * unit * 2;
  const centerX = width / 2;
  const centerY = height / 2;

  const points = utterances
    .map((utterance, index) => {
      return getPolarPosition(
        index,
        utterances.length - 1,
        utterance.backward_intimacy * 5,
        unit
      );
    })
    .slice(0, -1);

  const linePoints = points.flatMap((point) => [
    centerX + point.x,
    centerY - point.y, // y축 반전
  ]);

  return (
    <div className="bg-white flex justify-center items-center">
      <Stage width={width} height={height}>
        <Layer>
          {/* x축 */}
          <Line
            points={[0, centerY, width, centerY]}
            stroke="black"
            strokeWidth={1}
          />

          {/* y축 */}
          <Line
            points={[centerX, 0, centerX, height]}
            stroke="black"
            strokeWidth={1}
          />

          {/* 동심원 */}
          {[1, 2, 3, 4, 5].map((r, idx) => (
            <Circle
              key={idx}
              x={centerX}
              y={centerY}
              radius={r * unit}
              stroke="lightgray"
              strokeWidth={1}
            />
          ))}

          {/* 점들 연결 선 */}
          <Arrow
            points={linePoints}
            stroke="lightblue"
            strokeWidth={2}
            lineJoin="round"
          />

          {/* 점들 표시 */}
          {points.map((p, idx) => (
            <Circle
              key={idx}
              x={centerX + p.x}
              y={centerY - p.y}
              radius={5}
              fill={idx === selectedIdx ? "red" : "black"}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

function getPolarPosition(index: number, total: number, r: number, unit = 50) {
  const thetaDeg = (index / total) * 360;
  const thetaRad = (90 - thetaDeg) * (Math.PI / 180); // y축 기준
  const radius = r * unit;

  const x = radius * Math.cos(thetaRad);
  const y = radius * Math.sin(thetaRad);

  return { x, y };
}
