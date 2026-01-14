import calendar from '../assets/온보딩_캘린더.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

export default function OnboardingCalendar() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
      
    localStorage.setItem("hasSeenOnboarding", "true");

    navigate("/onboarding_character10");
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

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
    
        <img src={calendar} alt="온보딩 워치 연동" className='onimg' />

        <button 
        onClick={handleFinishOnboarding} 
        className="Next"
        >
            연동하기
        </button>

      
    </main>
  );
}