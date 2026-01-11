/* eslint-disable */
import { useEffect, useState } from "react";

export default function TutorialSpotlight({ targetId, onClose }) {
  const [pos, setPos] = useState(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    });
  }, [targetId]);

  if (!pos) return null;

  return (
    <>
      {/* 전체 dim 처리 */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          zIndex: 100
        }}
      ></div>

      {/* ✨ 사각형 spotlight 부분 */}
      <div
        style={{
          position: "absolute",
          top: pos.top - 8,
          left: pos.left - 8,
          width: pos.width + 16,
          height: pos.height + 16,
          borderRadius: 28,         // ← 캐릭터 카드 모서리 둥글게 따라감
          background: "transparent",
          boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          zIndex: 200
        }}
      ></div>

      {/* 말풍선 */}
      <div
        style={{
          position: "absolute",
          top: pos.top + pos.height + 24,  // spotlight 아래에 위치
          left: pos.left + 10,
          background: "white",
          padding: "14px 18px",
          borderRadius: 16,
          boxShadow: "0px 4px 16px rgba(0,0,0,0.25)",
          fontSize: 15,
          zIndex: 300,
          width: pos.width - 20
        }}
      >
        <p style={{ margin: 0 }}>
          나를 터치하면 함께 <span style={{ color: "#468AF0", fontWeight: "600" }}>대화</span>할 수 있어!
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: 10,
            border: "none",
            background: "none",
            color: "#468AF0",
            fontWeight: 600,
            cursor: "pointer",
            float: "right"
          }}
        >
          확인
        </button>
      </div>
    </>
  );
}
