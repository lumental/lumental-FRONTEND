import React from "react";

export default function HRVBarChart({ data }) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div>
      
      <svg width="90%" height="100">
  {data.map((item, idx) => {
    const barWidth = 14;
    const gap = 8;
    const x = idx * (barWidth + gap);

    const barHeight = (item.value / maxValue) * 80;
    const y = 100 - barHeight;

    const hour = new Date(item.ts).getHours(); // 10, 11, 12...

    return (
      <g key={idx}>
        {/* 막대 */}
        <rect
          x={x}
          y={y}
          width={barWidth}
          height={barHeight}
          rx="6"
          fill="#ff6f61"
        />

        {/* 아래 시간 라벨 */}
        <text
          x={x + barWidth / 2}
          y={125}
          textAnchor="middle"
          fontSize="10"
          fill="#888"
        >
          {hour}
        </text>
      </g>
    );
  })}
</svg>
    </div>
  );
}