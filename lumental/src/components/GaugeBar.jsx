import React from "react";

export default function GaugeBar({ value, isCleared }) {
    if(isCleared){
        value = 10
    }
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{fontSize: '18px', color: 'white', marginRight: '20px',}}>LV.1  </span>
        <div style={{
        width: "80%",
        height: "10px",
        background: "#ddd",
        borderRadius: "10px",
        overflow: "hidden"
        }}>
            <div 
                style={{
                width: `${value}%`,
                height: "100%",
                background: "#FFAC19",
                transition: "width 0.3s ease"
                }}
            >

            </div>
        </div>
    </div>
    
  );
}