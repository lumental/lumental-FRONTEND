import { useNavigate } from 'react-router-dom';
import flame from '../assets/flame.png';
import { useState } from 'react';
import axios from 'axios';



export default function OnboardingYourname() {
    const navigate = useNavigate();

    const [name, setName] = useState("");

    const onChange = (e) => {
      setName(e.target.value)
      localStorage.setItem("name", e.target.value);
    };

    const api = import.meta.env.VITE_API_URL;

    const onClick = async () => {
      try {
      const res = await axios.post(`${api}/api/users/onboarding`, {
        "username": name
      });

      console.log(res.status);

      const userId = res.data.data.userId;
      localStorage.setItem("userId", userId);

      localStorage.setItem("hasSeenOnboarding", "true");
      navigate("/onboarding_wearable12");
      
    } catch (error) {
      console.error("POST 에러: ", error);
      navigate("/onboarding_wearable12");
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

        <div style={{fontSize: 24, color: 'white', marginTop: '15%', marginBottom: '10%'}}><p>당신을 부를 이름을 알려주세요</p></div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img className='startlogo' src={flame} alt="귀요미" style={{height: 330, width: 240, boxSizing: 'content-box', marginTop: 50, marginLeft: 15}}  /></div>
        
        <div style={{height: 50}}></div>


        <div className='glass-card' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input 
              onChange={onChange}
              value={name}
              name='name'
              className='name' 
              type='text' 
              placeholder='당신을 부를 이름을 입력해주세요.' 
              style={{background: 'none', border: 'none', height: 60, width: '100%'}} 
            />
        </div>

        <div>
            <button 
            onClick= {onClick}
            className="Next"
            
            >
                다음
            </button>
        </div>
        

        

      
    </main>
  );
}