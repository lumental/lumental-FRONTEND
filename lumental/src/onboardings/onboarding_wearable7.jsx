import watch from '../assets/온보딩_워치연동.png';
import { useNavigate } from "react-router-dom";

export default function OnboardingWearable() {
    const navigate = useNavigate();

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
    
        <img src={watch} alt="온보딩 워치 연동" style={{width: 778, height: 1570}} />

        <button 
        onClick={() => navigate("/home")} 
        className="Next"
        >
            다음
        </button>

      
    </main>
  );
}