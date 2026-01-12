import React from "react";

export default function Circle({ steps, goal = 15000 }) {
  const radius = 60;  
  const circumference = 2 * Math.PI * radius;
  // 목표치보다 많이 걸었을 때 그래프가 깨지지 않게 1로 제한
  const progress = Math.min(steps / goal, 1); 
  const offset = circumference - progress * circumference;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      
      {/* 1. 회색 배경 원 */}
      <circle
        cx="80"
        cy="80"
        r={radius}
        stroke="#E5E5E5" // 배경색을 연한 회색으로 변경 (사진 참고)
        strokeWidth="14"
        fill="none"
      />

      {/* 2. 주황색 진행 원 */}
      <circle
        cx="80"
        cy="80"
        r={radius}
        stroke="#FFC358"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round" // 끝부분 둥글게
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 80 80)" 
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      ></circle>

      {/* 3. 중앙 텍스트 (걸음 수) */}
      <text
        x="80"      // 가로 중심 (160의 절반)
        y="75"      // 세로 중심보다 살짝 위
        textAnchor="middle"       // 가로 가운데 정렬
        dominantBaseline="middle" // 세로 가운데 정렬
        fill="#FFAC19"            // 글자색 (주황)
        fontSize="24"             // 글자 크기
        fontWeight="bold"
      >
        {steps}
      </text>

      {/* 4. 중앙 텍스트 (단위: steps) */}
      <text
        x="80"      // 가로 중심
        y="100"     // 세로 중심보다 살짝 아래
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#828282"            // 글자색 (회색)
        fontSize="14"
      >
        steps
      </text>
      
    </svg>
  );
}