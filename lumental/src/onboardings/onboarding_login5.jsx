/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import loginlogo from '../assets/loginlogo.png';
import naver from '../assets/네이버.png';
import kakao from '../assets/카카오.png';
import google from '../assets/구글.png';



export default function OnboardingLogin() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    // 로컬 스토리지에 '봤음' 표시
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_wearable7");
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

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'content-box', marginTop: 200, marginBottom: 100}}><img src={loginlogo} alt='로그인 화면' style={{width: 250, height: 260}}></img></div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
        <div><button onClick={handleFinishOnboarding} className='loginbutton' style={{width: '100%', height: 60, borderRadius: '20px', background: '#03C75A', borderColor: '#03C75A',}}><img  style={{width: 15, height: 15, boxSizing: 'content-box', marginRight: 7, }} src={naver}/><span style={{fontSize: 18, color: 'white'}}>네이버 로그인</span></button></div>
        <div><button className='loginbutton' style={{width: '100%', height: 60, borderRadius: '20px', background: '#FEE500', borderColor: '#FEE500',}}><img  style={{width: 15, height: 15, boxSizing: 'content-box', marginRight: 7}} src={kakao}/><span style={{fontSize: 18, color: 'black'}}>카카오 로그인</span></button></div>
        <div><button className='loginbutton' style={{width: '100%', height: 60, borderRadius: '20px', background: '#F8F8F8', borderColor: 'white',}}><img  style={{width: 15, height: 15, boxSizing: 'content-box', marginRight: 15}} src={google}/><span style={{fontSize: 18, color: '#313131'}}>구글 로그인</span></button></div> 
      </div>

      

        
    
        

        
  
        
        
  
    </main>
  );
}