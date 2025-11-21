/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import loginlogo from '../assets/loginlogo.png';



export default function OnboardingLogin() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    // 로컬 스토리지에 '봤음' 표시
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_wearable7");
  };

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)', background: 'linear-gradient(135deg, black 0%, #011635 43%, #468AF0 86%)'  }}>

      <div style={{width: 240, height: 240}}><img src={loginlogo} alt='로그인 화면'></img></div>

        
    
        

        
        <button className='loginbutton'>카카오 로그인</button>
        <button className='loginbutton'>네이버 로그인</button>
        <button className='loginbutton'>구글 로그인</button>
        

      
    </main>
  );
}