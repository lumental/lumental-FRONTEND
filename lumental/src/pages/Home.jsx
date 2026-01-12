import EmotionButtons from '../components/EmotionButtons';
import TodayCards from '../components/TodayCards';
import flameImg from '../assets/flame.png';
import { useEffect, useRef, useState } from 'react'; 
import axios from 'axios';
import Circle from '../charts/Circle';
import dummy from '../charts/dummy.json';
import HeartRateGraph from '../charts/Rate';
import TinyBarChart from '../charts/Bar2';
import { useNavigate } from 'react-router-dom';
/* eslint-disable */


function TutorialOverlay({ anchorRect, onClose, text }) {
  if (!anchorRect) return null;

  const bubbleWidth = 260;
  const bubbleLeft = Math.max(
    16,
    Math.min(
      anchorRect.left + anchorRect.width / 2 - bubbleWidth / 2,
      window.innerWidth - bubbleWidth - 16
    )
  );
  const bubbleTop = Math.min(anchorRect.bottom + 14, window.innerHeight - 140);

  
  const r = 28;

  const overlayColor = "rgba(11, 11, 11, 0.55)";


  const x = Math.max(0, anchorRect.left);
  const y = Math.max(0, anchorRect.top);
  const w = Math.min(window.innerWidth, anchorRect.right) - x;
  const h = Math.min(window.innerHeight, anchorRect.bottom) - y;

  
  const maskId = "tutorial-mask";

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
          boxShadow: "0 10px 30px rgba(9, 9, 9, 0.25)",
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
        <div style={{ fontSize: 14, fontWeight: 600, color: "#222", lineHeight: "24px" }}>
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
              fontWeight: 700,
              fontSize: 14,
              padding: "6px 8px",
            }}
          >
            확인
          </button>
        </div>

        
        <div
          style={{
            position: "absolute",
            left: Math.max(
              18,
              Math.min(anchorRect.left + anchorRect.width / 2 - bubbleLeft - 8, bubbleWidth - 26)
            ),
            top: -8,
            width: 16,
            height: 16,
            background: "#fff",
            transform: "rotate(45deg)",
            boxShadow: "-6px -6px 14px rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </div>
  );
}



export default function Home() {
  function MoodCard() {
    return (
      <div
        style={{
          width: '100%',
          height: 360,
          borderRadius: 28,
          background: 'linear-gradient(180deg, #010710 0%, #468AF0 100%)',
          padding: 16,
          position: 'relative',
          color: '#f8f8f8',
          boxShadow: '0 12px 24px rgba(0,0,0,0.18)',
        }}
      ></div>
    );
  }

  const [character, setCharacter] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  
  const [showTutorial, setShowTutorial] = useState(false);
  const flameAnchorRef = useRef(null);
  const [anchorRect, setAnchorRect] = useState(null);

  useEffect(() => {
    const savedCharacter = localStorage.getItem("character");
    const savedName = localStorage.getItem("name");
    const savedUserId = localStorage.getItem("userId");
    setCharacter(savedCharacter);
    setName(savedName);
    setId(parseInt(savedUserId));

    const already = localStorage.getItem("homeTutorialDone");
    if (!already) setShowTutorial(true);
  }, []);

  const Navigate = useNavigate();
  const ToChat = () => {
    Navigate('/aichat');
  };

  
  const closeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem("homeTutorialDone", "1");
  };

  
  useEffect(() => {
    if (!showTutorial) return;

    const update = () => {
      if (!flameAnchorRef.current) return;
      const rect = flameAnchorRef.current.getBoundingClientRect();
      setAnchorRect(rect);
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [showTutorial]);

  useEffect(() => {
    const fetchData = () => {
      async () => {
        try {
          const api = import.meta.env.VITE_API_URL;
          const res = await axios.get(`${api}/api/biometric/report/${id}/latest`);

          console.log(res.data);
        } catch (error) {
          alert("에러 발생");
        }
      }
    };
    fetchData();
  }, [id]);

  const getData = async () => {
    try {
      const api = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${api}/api/biometric/report/${id}/latest`);

      console.log(res.data);
    } catch (error) {
      alert("에러 발생");
    }
  };

  const step = dummy.data.stepCount.total;
  const hrv_data = dummy.data.hrv.data;
  const rate_data = dummy.data.heartRate.data;

  return (
    <main
      style={{
        maxWidth: 430,
        margin: '0 auto',
        padding: '16px 16px 88px',
        borderLeft: '1px solid rgba(0,0,0,0.08)',
        borderRight: '1px solid rgba(0,0,0,0.08)',
        position: 'relative', 
      }}
    >
      
      {showTutorial && (
        <TutorialOverlay
          anchorRect={anchorRect}
          onClose={closeTutorial}
          text={
          <>
            나를{" "}
            <span style={{ color: "#FFAC19", fontWeight: 700 }}>
              터치
            </span>
            하면 함께{" "}
            <span style={{ color: "#FFAC19", fontWeight: 700 }}>
              대화
            </span>
            할 수 있어!
            <br />
            아직 초기 단계라 대답이 느린 점 참고해줘!
          </>
          }
        />
      )}

      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 30, padding: 0 }}>안녕, {name}</h1>

        <div
          style={{
            margin: 0,
            padding: 0,
            color: '#FFAC19',
            fontSize: 18,
            fontWeight: '600',
            wordWrap: 'break-word',
            marginBottom: 0,
            paddingBottom: 0
          }}
        >
          오늘 기분은 어때?
        </div>

        <EmotionButtons />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px',
          }}
        >
          <div
            ref={flameAnchorRef}
            style={{
              width: '100%',
              height: 360,
              background: 'linear-gradient(180deg, #010710 0%, #468AF0 100%)',
              borderRadius: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              padding: '16px 20px',
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                alignSelf: 'flex-start',
                color: 'white',
                fontSize: 12,
                fontWeight: 500,
                lineHeight: '15.83px',
                marginBottom: 8,
              }}
            >
              {character}
            </p>

            <p
              style={{
                alignSelf: 'flex-start',
                color: '#FFE99E',
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '21.11px',
                wordWrap: 'break-word',
                marginBottom: 20,
                marginTop: 0
              }}
            >
              오늘 하루는 어땠어?
            </p>

  
            <div
              
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <button
                onClick={() => {

                  if (showTutorial) closeTutorial();
                  ToChat();
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <img
                  src={flameImg}
                  alt="불꽃캐릭터"
                  style={{
                    width: 180,
                    height: 251,
                    alignSelf: 'center',
                    marginTop: 'auto',
                    paddingTop: 10
                  }}
                />
              </button>
            </div>

          </div>
        </div>

      
        <div>
          <p
            style={{
              color: '#363636',
              fontSize: 20,
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            오늘의 하루
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
              alignItems: 'center',
              width: '100%',
              marginBottom: 20
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  width: '45%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '102px',
                    background: 'white',
                    border: '0.5px solid rgba(255, 104, 84, 0.30)',
                    boxShadow: '0px 0px 10px rgba(255, 104, 84, 0.30)',
                    borderRadius: '23.4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ color: '#828282', fontSize: '14px' }}>심박수</div>
                  <HeartRateGraph data={rate_data} height={70} />
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '102px',
                    background: 'white',
                    border: '0.5px solid rgba(255, 104, 84, 0.30)',
                    boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.15)',
                    borderRadius: '23.4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ color: '#828282', fontSize: '14px', marginBottom: "4px" }}>HRV</div>
                  <div style={{ width: '95%', height: '60px', display: 'flex', justifyContent: 'center' }}>
                    <TinyBarChart data={hrv_data} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '45%',
                  height: '220px',
                  background: 'white',
                  borderRadius: '21.92px',
                  border: '0.5px solid rgba(255, 178, 41, 0.30)',
                  boxShadow: '0px 0px 10px rgba(255, 178, 41, 0.30)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <div style={{ color: '#828282', fontSize: '14px' }}>걸음수</div>
                <div>
                  <Circle steps={step} />
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
