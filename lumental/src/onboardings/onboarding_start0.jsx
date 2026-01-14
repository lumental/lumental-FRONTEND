import { useNavigate } from 'react-router-dom';
import startlogo from '../assets/startlogo.png';
import onlyLlogo from '../assets/Llogo.png';


export default function OnboardingStart() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {

    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_aichat1");
  };

  return (
    <main style={{ 
      maxWidth: 430, 
      margin: '0 auto', 
      padding: '16px 16px 88px', 
      borderLeft: '1px solid rgba(0,0,0,0.08)',
      borderRight: '1px solid rgba(0,0,0,0.08)', 
      background: 'linear-gradient(135deg, black 0%, #011635 43%, #468AF0 86%)', 
      height: '100dvh', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
      }}
    >

        <div>
          <img 
            className='startlogo' 
            src={startlogo} 
            alt="시작화면 로고" 
            style={{height: 90, width: 240, boxSizing: 'content-box', marginTop: 50, marginLeft: 15}}  
          />
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={onlyLlogo} style={{width: 150, height: 150, boxSizing: 'content-box', marginTop: 150, marginBottom: 150}}></img>
        </div>

        <div style={{height: 50}}></div>

        <div>
            <button 
            onClick= {handleFinishOnboarding}
            className="Next"
            
            >
                시작하기
            </button>
        </div>
        

        

      
    </main>
  );
}