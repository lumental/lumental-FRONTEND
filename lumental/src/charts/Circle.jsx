import React from "react";

export default function Circle({ steps, goal = 15000 }) {
  const radius = 60;  
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(steps / goal, 1); 
  const offset = circumference - progress * circumference;

  return (
    <svg width="160" height="160">
      
      <circle
        cx="80"
        cy="80"
        r={radius}
        stroke="#d3d3d3"
        strokeWidth="14"
        fill="none"
      />

      
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
        transform="rotate(-90 80 80)" 
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      ></circle>
    </svg>
  );
}
