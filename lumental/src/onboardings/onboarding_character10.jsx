import { useNavigate } from 'react-router-dom';
import flame from '../assets/flame.png';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function OnboardingCharacter() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {

    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_yourname11");
    };

    useEffect(() => {
          const code = new URL(window.location.href).searchParams.get("code");
    
          if (!code) return;
    
          const getKakaoAccessToken = async () => {
            try {
              const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
              const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT;
              
              const params = new URLSearchParams();
              params.append("grant_type", "authorization_code");
              params.append("client_id", REST_API_KEY);
              params.append("redirect_uri", REDIRECT_URI);
              params.append("code", code);
    
              const response = await axios.post(
                "https://kauth.kakao.com/oauth/token", 
                params,
                
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                }
              );
    
              const accessToken = response.data.access_token;
              console.log("카카오 Access Token:", accessToken);
    
              const api = import.meta.env.VITE_API_URL;
              await axios.post(`${api}/auth/login/social`, {
                provider: "kakao",
                token: accessToken,
              });
    
            } catch (error) {
              console.error("카카오 로그인 처리 중 오류:", error);
            }
          };
    
          getKakaoAccessToken();
        }, []);


    const [character, setCharacter] = useState("");

    const onChange = (e) => {
      setCharacter(e.target.value);
      localStorage.setItem("character", e.target.value);
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

        <div style={{fontSize: 24, color: 'white', marginTop: '15%', marginBottom: '10%'}}><p>이 아이의 이름을 지어주세요</p></div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img className='startlogo' src={flame} alt="귀요미" style={{height: 330, width: 240, boxSizing: 'content-box', marginTop: 50, marginLeft: 15}}  /></div>
        
        <div style={{height: 50}}></div>


        <div className='glass-card' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input 
              name='character'
              className='name' 
              type='text' 
              placeholder='이 아이의 이름을 입력해주세요.' 
              value={character}
              onChange={onChange}
              style={{background: 'none', border: 'none', height: 60, width: '100%'}} 
            />
        </div>

        <div>
            <button 
            onClick= {handleFinishOnboarding}
            className="Next"
            
            >
                다음
            </button>
        </div>
        

        

      
    </main>
  );
}