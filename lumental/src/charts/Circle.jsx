import React from "react";

export default function Circle({ steps, goal = 15000 }) {
  const radius = 60;  
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(steps / goal, 1); // 최대 100%
  const offset = circumference - progress * circumference;

  return (
    <svg width="160" height="160">
      {/* 배경 원 */}
      <circle
        cx="80"
        cy="80"
        r={radius}
        stroke="#d3d3d3"
        strokeWidth="14"
        fill="none"
      />

      {/* 진행 원 */}
      <circle
        cx="80"
        cy="80"
        r={radius}
        stroke="#FFC358"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 80 80)" // 시작점을 위로 이동
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      ></circle>
    </svg>
  );
}
