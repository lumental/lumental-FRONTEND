import React, { useEffect, useRef, useState } from "react";
//리포트 페이지 심박수, hrv

export default function SleepGraph({
  data,
  width = "90%",
  height = 100,
  padding = 10,
}) {
  const containerRef = useRef(null);
  const [realWidth, setRealWidth] = useState(
    typeof width === "number" ? width : 200
  );

  useEffect(() => {
    if (typeof width === "number") {
      setRealWidth(width);
      return;
    }

    const observer = new ResizeObserver(() => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.getBoundingClientRect().width;
      setRealWidth(parentWidth);
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [width]);

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const scaleY = (value) =>
    height -
    ((value - minValue) / (maxValue - minValue)) * (height - padding * 2) -
    padding;

  const gapX = realWidth / (data.length - 1);

  const points = data
    .map((item, idx) => `${idx * gapX},${scaleY(item.value)}`)
    .join(" ");

  return (
    <div ref={containerRef} style={{ width: width }}>
      <svg width={realWidth} height={height}>
        {/* ✔ 세로 회색선 추가 */}
        {data.map((_, idx) => {
          const x = idx * gapX;
          return (
            <line
              key={`grid-${idx}`}
              x1={x}
              y1={0}
              x2={x}
              y2={height}
              stroke="#ddd"
              strokeWidth="1"
            />
          );
        })}

        <polyline
          points={points}
          fill="none"
          stroke="#2C34C4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((item, idx) => {
          const x = idx * gapX;
          const y = scaleY(item.value);
          return <circle key={idx} cx={x} cy={y} r={2} fill="#2C34C4" />;
        })}
      </svg>
    </div>
  );
}
