import aichat from '../assets/온보딩_챗봇.png';
import {useNavigate} from 'react-router-dom';


export default function OnboardingChat() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
      
    localStorage.setItem("hasSeenOnboarding", "true");
    navigate("/onboarding_report2");
  };

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
    
        <img src={aichat} alt="온보딩 챗봇" className='onimg' />

        <button 
        onClick={handleFinishOnboarding} 
        className="Next"
        >
            다음
        </button>

      
    </main>
  );
}