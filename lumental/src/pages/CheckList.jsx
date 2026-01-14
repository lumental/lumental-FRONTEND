import { useState, useEffect, useRef } from "react";
import Stairs from "../components/Stairs";
import GaugeBar from "../components/GaugeBar";

function TutorialOverlay({
  anchorRect,
  onClose,
  text,
  buttonText = "다음",
  bubblePlacement = "bottom", 
  spotPaddingTop = 0,
  spotPaddingBottom = 0,
}) {
  if (!anchorRect) return null;

  const bubbleWidth = 280;

  
  const r = 18;
  const overlayColor = "rgba(11, 11, 11, 0.55)";

  
  const x = Math.max(0, anchorRect.left);
  const y = Math.max(0, anchorRect.top - spotPaddingTop);
  const w = Math.min(window.innerWidth, anchorRect.right) - x;
  const h =
    Math.min(window.innerHeight, anchorRect.bottom + spotPaddingBottom) - y;

  
  const bubbleLeft = Math.max(
    16,
    Math.min(
      anchorRect.left + anchorRect.width / 2 - bubbleWidth / 2,
      window.innerWidth - bubbleWidth - 16
    )
  );

  
  const topY = Math.max(16, y  - 120); 
  const bottomY = Math.min(y + h + 14, window.innerHeight - 180);

  const bubbleTop = bubblePlacement === "top" ? topY : bottomY;

  const maskId = "tutorial-mask-checklist";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
     
      <svg
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="white" />
            <rect x={x} y={y} width={w} height={h} rx={r} ry={r} fill="black" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={overlayColor}
          mask={`url(#${maskId})`}
        />
      </svg>

      
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: w,
          height: h,
          borderRadius: r,
          outline: "2px solid rgba(255,255,255,0.18)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          pointerEvents: "none",
        }}
      />

     
      <div
        style={{
          position: "absolute",
          left: bubbleLeft,
          top: bubbleTop,
          width: bubbleWidth,
          background: "#FFFFFF",
          borderRadius: 16,
          padding: "14px 14px 12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#222",
            lineHeight: "24px",
          }}
        >
          {text}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFAC19",
              fontWeight: 800,
              fontSize: 14,
              padding: "6px 8px",
            }}
          >
            {buttonText}
          </button>
        </div>


        <div
          style={{
            position: "absolute",
            left: Math.max(
              18,
              Math.min(
                anchorRect.left + anchorRect.width / 2 - bubbleLeft - 8,
                bubbleWidth - 26
              )
            ),
            ...(bubblePlacement === "top"
              ? {
                  bottom: -8, 
                  top: "auto",
                  boxShadow: "6px 6px 14px rgba(0,0,0,0.08)",
                }
              : {
                  top: -8, 
                  bottom: "auto",
                  boxShadow: "-6px -6px 14px rgba(0,0,0,0.08)",
                }),
            width: 16,
            height: 16,
            background: "#fff",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    </div>
  );
}


export default function CheckList() {
  const [input, setInput] = useState({
    checklist1: "",
    checklist2: "",
    checklist3: "",
    checklist4: "",
    checklist5: "",
  });

  const [check, setCheck] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheck = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const [character, setCharacter] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const savedCharacter = localStorage.getItem("character");
    const savedName = localStorage.getItem("name");
    setCharacter(savedCharacter);
    setName(savedName);
  }, []);

  const isCleared = Object.values(check).every(Boolean);

  useEffect(() => {
    const saved = localStorage.getItem("recommendedCards");
    if (!saved) return;

    const cards = JSON.parse(saved);

    setInput((prev) => ({
      ...prev,
      checklist1: cards[0]?.title || "",
      checklist2: cards[1]?.title || "",
      checklist3: cards[2]?.title || "",
      checklist4: cards[3]?.title || "",
      checklist5: cards[4]?.title || "",
    }));
  }, []);


  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [anchorRect, setAnchorRect] = useState(null);

  const progressRef = useRef(null); 
  const checklistRef = useRef(null); 

  useEffect(() => {
    const done = localStorage.getItem("checklistTutorialDone");
    if (!done) {
      setShowTutorial(true);
      setTutorialStep(0);
    }
  }, []);

 
  const getCurrentRef = () => {
    if (tutorialStep === 0) return checklistRef;
    return progressRef;
  };

  useEffect(() => {
    if (!showTutorial) return;

    const update = () => {
      const ref = getCurrentRef();
      if (!ref?.current) return;
      setAnchorRect(ref.current.getBoundingClientRect());
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [showTutorial, tutorialStep]);

  const nextTutorial = () => {

    if (tutorialStep === 0) {
      setTutorialStep(1);
      return;
    }

    setShowTutorial(false);
    localStorage.setItem("checklistTutorialDone", "1");
  };

  const tutorialText =
    tutorialStep === 0 ? (
      <>
        채팅 중 추천된 솔루션을{" "}
        <span style={{ color: "#FFAC19", fontWeight: 800 }}>체크리스트</span>로 볼 수 있어!
      </>
    ) : (
      <>
        체크리스트를 완수하면 나와 함께{" "}
        <span style={{ color: "#FFAC19", fontWeight: 800 }}>성장</span>할 수 있어!
      </>
    );

  const tutorialButtonText = tutorialStep === 0 ? "다음" : "확인";

  return (
    <main
      style={{
        maxWidth: 430,
        margin: "0 auto",
        padding: "16px 16px 88px",
        borderLeft: "1px solid rgba(0,0,0,0.08)",
        borderRight: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      
      {showTutorial && (
        <TutorialOverlay
          anchorRect={anchorRect}
          onClose={nextTutorial}
          text={tutorialText}
          buttonText={tutorialButtonText}
          
          bubblePlacement={tutorialStep === 0 ? "top" : "bottom"}
          
          spotPaddingTop={tutorialStep === 1 ? 40 : 0}
          spotPaddingBottom={tutorialStep === 1 ? 35 : 0}
        />
      )}

      <h1
        style={{
          margin: 0,
          fontSize: 30,
          fontWeight: 700,
          color: "#000",
        }}
      >
        SOLUTION
      </h1>

      <div
        style={{
          margin: 0,
          padding: 0,
          color: "#828282",
          fontSize: 18,
          fontWeight: "500",
          wordWrap: "break-word",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        {name}님, 오늘도 {character}와(과) 함께해요!
      </div>

      <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            height: 700,
            background: "linear-gradient(180deg, #010710 0%, #468AF0 100%)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         
          <div ref={progressRef} style={{ overflow: "hidden", width: "90%", height: 270 }}>
            <GaugeBar value={0} isCleared={isCleared} />
            <Stairs isCleared={isCleared} />
          </div>

         
          <div
            ref={checklistRef}
            style={{
              width: "90%",
              height: 270,
              background: "#f8f8f8",
              borderRadius: 18,
              boxSizing: "border-box",
              marginTop: 50,
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: 18,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
                marginLeft: 20,
              }}
            >
              오늘의 도전
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
              <input
                type="checkbox"
                name="checkbox1"
                checked={check.checkbox1}
                onChange={onChangeCheck}
                className="CheckBox"
              />
              <input
                type="text"
                className="check-input"
                placeholder="오늘의 도전을 추가해보세요."
                name="checklist1"
                value={input.checklist1}
                onChange={onChange}
                style={{ width: 250 }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
              <input
                type="checkbox"
                name="checkbox2"
                checked={check.checkbox2}
                onChange={onChangeCheck}
                className="CheckBox"
              />
              <input
                type="text"
                className="check-input"
                placeholder="오늘의 도전을 추가해보세요."
                name="checklist2"
                value={input.checklist2}
                onChange={onChange}
                style={{ width: 250 }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
              <input
                type="checkbox"
                name="checkbox3"
                checked={check.checkbox3}
                onChange={onChangeCheck}
                className="CheckBox"
              />
              <input
                type="text"
                className="check-input"
                placeholder="오늘의 도전을 추가해보세요."
                name="checklist3"
                value={input.checklist3}
                onChange={onChange}
                style={{ width: 250 }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
              <input
                type="checkbox"
                name="checkbox4"
                checked={check.checkbox4}
                onChange={onChangeCheck}
                className="CheckBox"
              />
              <input
                type="text"
                className="check-input"
                placeholder="오늘의 도전을 추가해보세요."
                name="checklist4"
                value={input.checklist4}
                onChange={onChange}
                style={{ width: 250 }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
              <input
                type="checkbox"
                name="checkbox5"
                checked={check.checkbox5}
                onChange={onChangeCheck}
                className="CheckBox"
              />
              <input
                type="text"
                className="check-input"
                placeholder="오늘의 도전을 추가해보세요."
                name="checklist5"
                value={input.checklist5}
                onChange={onChange}
                style={{ width: 250 }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
