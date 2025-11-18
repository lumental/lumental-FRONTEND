import watch from '../assets/온보딩_워치연동.png';
import { useNavigate } from "react-router-dom";

export default function OnboardingWearable() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    // 로컬 스토리지에 '봤음' 표시
    localStorage.setItem("hasSeenOnboarding", "true");
    // 홈으로 이동
    navigate("/home");
  };

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
    
        <img src={watch} alt="온보딩 워치 연동" style={{width: '100%', height: 500}} />

        <button 
        onClick={handleFinishOnboarding} 
        className="Next"
        >
            다음
        </button>

      
    </main>
  );
}