import { useNavigate } from 'react-router-dom';
import flame from '../assets/flame.png';
import { useState } from 'react';


export default function OnboardingCharacter() {
    const navigate = useNavigate();

    const handleFinishOnboarding = () => {
    // 로컬 스토리지에 '봤음' 표시
    localStorage.setItem("hasSeenOnboarding", "true");
    
    navigate("/onboarding_yourname11");
    };

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
              placeholder='이름을 입력해주세요.' 
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