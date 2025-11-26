import React from "react";
/* eslint-disable */

export default function HRVBarChart({ data }) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div>
      
      <svg width="250" height="90" style={{margin: 0, padding: 0}}>
        {data.map((item, idx) => {
          const barWidth = 12;
          const gap = 4;
          const x = idx * (barWidth + gap);

          const barHeight = (item.value / maxValue) * 80;
          const y = 100 - barHeight;

          const hour = new Date(item.ts).getHours(); 

          return (
            <g  key={idx}>
              {/* 막대 */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="6"
                fill="#ff6f61"
              />

              
            </g>
          );
        })}
      </svg>
    </div>
  );
}