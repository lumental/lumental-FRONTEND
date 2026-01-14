import { useNavigate } from 'react-router-dom';
import report from '../assets/온보딩_리포트.png';


export default function OnboardingReport() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_solution3");
  };

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
    
        <img className='onimg' src={report} alt="온보딩 리포트"  />

        <button 
        onClick= {handleFinishOnboarding}
        className="Next"
        >
            다음
        </button>

      
    </main>
  );
}