
import { useNavigate } from 'react-router-dom';
import loginlogo from '../assets/loginlogo.png';
import kakao from '../assets/카카오.png';


export default function OnboardingLogin() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
 
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_character10");
    };

    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    const kakaologin = () => {
      window.location.href = kakaoURL
    };

    console.log("REST:", REST_API_KEY);
    console.log("REDIRECT:", REDIRECT_URI);
    console.log("LOGIN URL:", kakaoURL);

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

      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        boxSizing: 'content-box', 
        marginTop: 200, marginBottom: 100
        }}
      >
        <img src={loginlogo} alt='로그인 화면' style={{width: 250, height: 270}}></img>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
        
        <div><button onClick={kakaologin} className='loginbutton' style={{width: '100%', height: 60, borderRadius: '20px', background: '#FEE500', borderColor: '#FEE500',}}><img  style={{width: 15, height: 15, boxSizing: 'content-box', marginRight: 7}} src={kakao}/><span style={{fontSize: 18, color: 'black'}}>카카오 로그인</span></button></div>
        <div >
              <button 
              onClick= {handleFinishOnboarding}
              className="Next"
              >
                  먼저 둘러보기
              </button>
          </div>
      </div>

      

        
    
        

        
  
        
        
  
    </main>
  );
}