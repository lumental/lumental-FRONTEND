//import watch from '../assets/온보딩_워치연동.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import flame from '../assets/3단계 귀요미.png';
/* eslint-disable */

export default function OnboardingWearable() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    // 로컬 스토리지에 '봤음' 표시
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_calendar8");
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
  
    const [file, setFile] = useState(null);

    const onChangeFile = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      console.log("업로드된 파일: ", selectedFile);
      console.log(userId);
    };


    const [userId, setUserId] = useState(null);
    useEffect(() => {
      const savedUserId = localStorage.getItem("userId");
      setUserId(parseInt(savedUserId));

    }, []);

    const getTodayDate = () => {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const api = import.meta.env.VITE_API_URL;

    /*const handleUpload = async () => {
      try {
        const signedRes = await axios.post(`${api}/api/biometric/upload-url`,{
          fileName: file.name
        });
        const { uploadUrl, fileUrl } = signedRes.data;

        console.log("uploadUrl:", uploadUrl);
        console.log("fileUrl:", fileUrl);

        await axios.put(uploadUrl, file);

        await axios.post(`${api}/api/biometric/upload/${userId}`, {
          fileUrl: fileUrl
        });

        console.log("업로드 성공");

        handleFinishOnboarding();

      } catch (error) {
        console.log("에러 발생: ", error);
        handleFinishOnboarding();
      }
    };*/

    const handleUpload = async () => {
      if (!file) {
        alert("파일을 선택해주세요!");
        return;
      }

      if (!userId) {
        alert("userId가 없습니다. 온보딩에서 userId 저장 확인!");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("userId", String(userId));
        formData.append("date", new Date().toISOString().slice(0, 10));
        formData.append("file", file);

        // formData 내용 확인
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": ", pair[1]);
        }

        const res = await axios.post(
          `${api}/api/healthkit/upload`,
          formData,
          {
            headers: {
              // ❗절대로 Content-Type 넣지 말기
              // Axios가 boundary 자동 설정해야 multipart 정상작동
            },
          }
        );

        // 저장
        localStorage.setItem("healthSummary", JSON.stringify(res.data));

        console.log("업로드 성공:", res.data);

        handleFinishOnboarding();
      } catch (error) {
        console.error("업로드 중 에러:", error);
        alert("업로드 중 오류가 발생했습니다.");
      }
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
  
          <div style={{fontSize: 24, color: 'white', marginTop: '15%', marginBottom: '10%'}}><p>생체 데이터를 올려주세요(.zip)</p></div>
  
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img className='startlogo' src={flame} alt="귀요미" style={{height: 330, width: 240, boxSizing: 'content-box', marginTop: 50, marginLeft: 15}}  /></div>
          
          <div style={{height: 50}}></div>
  
  
          <div className='glass-card' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <input 
                name='file'
                className='name' 
                type='file' 
                accept="*"
                //value={file}
                onChange={onChangeFile}
                style={{background: 'none', border: 'none', height: '100%', width: '50%'}} 
              />
          </div>
          
  
          <div>
              <button 
              onClick= {handleUpload}
              className="Next"
              
              >
                  다음
              </button>
          </div>
          
  
          
  
        
      </main>
    );
}