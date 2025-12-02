import React, { useEffect, useRef, useState } from "react";

export default function HeartRateGraph({
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

  // 데이터가 없을 경우에 대한 방어 코드
  if (!data || data.length === 0) {
    return <div style={{ width: width, height: height }}>데이터 없음</div>;
  }

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const scaleY = (value) => {
    if (maxValue === minValue) return height / 2; // 값이 모두 같을 경우 중앙에 위치
    return (
      height -
      ((value - minValue) / (maxValue - minValue)) * (height - padding * 2) -
      padding
    );
  };

  // 데이터 포인트가 1개일 경우를 대비한 gapX 계산
  const gapX = data.length > 1 ? realWidth / (data.length - 1) : 0;

  const points = data
    .map((item, idx) => `${idx * gapX},${scaleY(item.value)}`)
    .join(" ");

  // --- 가로 그리드 선을 위한 값 계산 ---
  const gridCount = 5; // 가로선을 몇 개 그릴지 설정 (예: 5개)
  const gridValues = [];
  if (maxValue !== minValue && gridCount > 1) {
    const step = (maxValue - minValue) / (gridCount - 1);
    for (let i = 0; i < gridCount; i++) {
      gridValues.push(minValue + i * step);
    }
  } else if (gridCount > 0) {
      // 최대값과 최소값이 같거나 데이터가 하나뿐인 경우 하나의 선만 그림
      gridValues.push(minValue);
  }
  // ------------------------------------

  return (
    <div ref={containerRef} style={{ width: width }}>
      <svg width={realWidth} height={height}>
        {/* ✔ 세로 회색선 (기존 코드 유지, padding 적용) */}
        {data.length > 1 && data.map((_, idx) => {
          const x = idx * gapX;
          return (
            <line
              key={`v-grid-${idx}`}
              x1={x}
              y1={padding}
              x2={x}
              y2={height - padding}
              stroke="#eee" // 조금 더 연한 회색으로 변경
              strokeWidth="1"
            />
          );
        })}

        {/* ✔ 가로 회색선 추가 (새로 추가된 부분) */}
        {gridValues.map((value, idx) => {
          const y = scaleY(value);
          return (
            <line
              key={`h-grid-${idx}`}
              x1={0}
              y1={y}
              x2={realWidth}
              y2={y}
              stroke="#eee" // 세로선과 같은 연한 회색
              strokeWidth="1"
            />
          );
        })}

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
          // 데이터가 1개일 때는 중앙에 점을 찍음
          const finalX = data.length > 1 ? x : realWidth / 2;
          return <circle key={idx} cx={finalX} cy={y} r={2} fill="#ff6f61" />;
        })}
      </svg>
    </div>
  );
}