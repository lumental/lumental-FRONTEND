import React, { useEffect, useRef, useState } from "react";

export default function HeartRateGraph({
  data,
  width = "90%",   // 숫자 or 퍼센트 모두 허용
  height = 100,
  padding = 10,
}) {
  const containerRef = useRef(null);
  const [realWidth, setRealWidth] = useState(
    typeof width === "number" ? width : 200 // 초기값
  );

  // width가 % 문자열인 경우 → 부모 요소 크기 측정
  useEffect(() => {
    if (typeof width === "number") {
      setRealWidth(width);
      return;
    }

    // width="100%" 같은 경우
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
        <polyline
          points={points}
          fill="none"
          stroke="#ff6f61"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((item, idx) => {
          const x = idx * gapX;
          const y = scaleY(item.value);
          return <circle key={idx} cx={x} cy={y} r={2} fill="#ff6f61" />;
        })}
      </svg>
    </div>
  );
}