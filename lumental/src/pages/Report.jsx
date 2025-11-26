import { useEffect, useState } from "react"; 
import hrv from '../assets/hrv 그래프.png';
import step from '../assets/걸음수 그래프.png';
import sleep from '../assets/수면 그래프.png';
import heartrate from '../assets/심박수 그래프.png';

export default function Report() {
  
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
  });

  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',  
          borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
      <h1
        style={{
          margin: 0,                
          fontSize: 30,
          //fontFamily: 'Pretendard',
          fontWeight: 700,
          color: '#000',
          //paddingLeft: 20
        }}
      >
        REPORT
      </h1>

      <div style={{marginTop: 15, marginBottom: 15, width: 50, height: 2, backgroundColor: 'black', /*marginLeft: 20*/ }}></div>

      <div
        style={{
          display: 'inline',
          backgroundImage: 'linear-gradient(transparent 55%, rgba(255, 222, 137, 0.6) 55%)',
          lineHeight: 1.25,
          left: 20   
        }}
      >
        <span
          style={{
            color: 'black',
            fontSize: 23.14,
            //fontFamily: 'Pretendard',
            fontWeight: 700,
            wordWrap: 'break-word',
          }}
        >
          {name} 님의{' '}
        </span>
        <span
          style={{
            color: '#468AF0',
            fontSize: 23.14,
            //fontFamily: 'Pretendard',
            fontWeight: 800,
            wordWrap: 'break-word',
          }}
        >
          데이터 
        </span>
        <span
          style={{
            color: 'black',
            fontSize: 23.14,
            //fontFamily: 'Pretendard',
            fontWeight: 700,
            wordWrap: 'break-word',
          }}
        >
          를 확인해보세요!
        </span>
      </div>


      <div style={{
        display: 'flex',
        flexDirection: 'column', 
        gap: '14px',
        justifyContent: 'center', 
        alignItems: 'center', 
      }}

      >
        <div
          style={{
            width: '100%',
            height: 240,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(255, 104, 84, 0.30)',
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img style={{width: '90%', height: '90%'}} src={heartrate} alt="심박수 그래프" />
        </div>

        <div
          style={{
            width: '100%',
            height: 240,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(255, 104, 84, 0.30)',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img style={{width: '90%', height: '90%'}} src={hrv} alt="hrv 그래프" />
        </div>

        <div
          style={{
            width: '100%',
            height: 360,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(95, 103, 255, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(95, 103, 255, 0.30)',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img style={{width: '95%', height: '100%'}} src={sleep} alt="수면 그래프" />
        </div>

        <div
          style={{
            width: '100%',
            height: 240,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(255, 178, 41, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(255, 178, 41, 0.30)',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img style={{width: '95%', height: '95%'}} src={step} alt="활동량 그래프" />
        </div>

        <div
          style={{
            width: '100%',
            height: 120,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(87, 154, 255, 0.40)',
            borderRadius: 28,
            border:'0.5px solid rgba(87, 154, 255, 0.40)',
            marginTop: 20
          }}
        ></div>

        <div
          style={{
            width: '100%',
            height: 120,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(178, 251, 162, 0.40)',
            borderRadius: 28,
            border:'0.5px solid rgba(178, 251, 162, 0.40)',
            marginTop: 20
          }}
        ></div>
        
      </div>




      
    </main>
  );
}