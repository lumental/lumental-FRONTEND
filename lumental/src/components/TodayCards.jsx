import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function TodayCards() {
  const [hrData, setHrData] = useState(null);
  const [hrvData, setHrvData] = useState(null);
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    async function loadCharts() {
      try {
        const hrRes = await axios.get("/report/hrv");
        const actRes = await axios.get("/report/activity");

        setHrData({
          avgHR: hrRes.data.avgHR, 
        });

        const hrvValue = hrRes.data.hrv;
        setHrvData(
          Array.from({ length: 12 }).map((_, i) => ({
            time: i,
            value: Math.max(10, hrvValue + (Math.random() * 10 - 5)),
          }))
        );

    
        setActivityData({
          steps: actRes.data.steps,
        });
      } catch (error) {
        console.error("API 오류:", error);
      }
    }

    loadCharts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >

        <div
          style={{
            background: "white",
            borderRadius: 23.4,
            border: "0.5px solid rgba(255,104,84,0.30)",
            boxShadow: "0 0 10px rgba(255,104,84,0.30)",
            height: 102,
            padding: 10,
          }}
        >
          <p style={{ fontSize: 14, margin: 0, color: "#555" }}>심박수</p>

          {hrData ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ResponsiveContainer width="70%" height={60}>
                <LineChart data={[{ x: 1, y: 80 }, { x: 2, y: hrData.avgHR }]}>
                  <Line type="monotone" dataKey="y" stroke="#ff5e57" strokeWidth={2}/>
                </LineChart>
              </ResponsiveContainer>
              <div style={{ fontSize: 18, color: "#ff5e57" }}>
                {hrData.avgHR} <span style={{ fontSize: 12 }}>BPM</span>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>


        <div
          style={{
            background: "white",
            borderRadius: 23.4,
            border: "0.5px solid rgba(255,104,84,0.30)",
            boxShadow: "0 0 10px rgba(255,104,84,0.15)",
            height: 102,
            padding: 10,
          }}
        >
          <p style={{ fontSize: 14, margin: 0, color: "#555" }}>HRV</p>

          {hrvData ? (
            <ResponsiveContainer width="100%" height={70}>
              <BarChart data={hrvData}>
                <Bar dataKey="value" fill="#ff7664" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

   
      <div
        style={{
          width: "45%",
          height: 220,
          background: "white",
          borderRadius: 21.92,
          border: "0.5px solid rgba(255,178,41,0.30)",
          boxShadow: "0 0 10px rgba(255,178,41,0.30)",
          padding: 10,
        }}
      >
        <p style={{ fontSize: 14, margin: 0, color: "#555" }}>걸음수</p>

        {activityData ? (
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={[
                  { name: "steps", value: activityData.steps },
                  { name: "remain", value: Math.max(10000 - activityData.steps, 0) },
                ]}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                <Cell fill="#ffb73a" />
                <Cell fill="#eee" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading...</p>
        )}

        <p style={{ textAlign: "center", marginTop: -30, fontSize: 18 }}>
          {activityData?.steps} steps
        </p>
      </div>
    </div>
  );
}
