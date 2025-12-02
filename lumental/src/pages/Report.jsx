import { useEffect, useState } from "react"; 


import sleep from '../assets/수면 그래프.png';

import axios from "axios";
import TinyBarChart from "../charts/Bar2";
import HeartRateGraph from '../charts/Rate';

export default function Report() {
  
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
    const savedUserId = localStorage.getItem("userId");
    setId(parseInt(savedUserId));
  });


  const [hrvData, setHrvData] = useState([]);
  const [heartRate, setHeartRate] = useState([]);
  const [stepData, setStepData] = useState([]);

  useEffect(() => {
    const getData = async () => {
    try {
      const api = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${api}/api/biometric/report/${id}/latest`);
      
      console.log(res.data);

      setHrvData(res.data.hrv.data);
      setHeartRate(res.data.heartRate.data);
      setStepData(res.data.steps.data);

    } catch (error) {
      alert("에러 발생", error);
    }
    
  };
  getData();

  }, []);

  

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
          <div style={{color: '#828282', fontSize: '14px'}}>심박수</div>
          <HeartRateGraph data={heartRate} height={70} />
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
          <div style={{color: '#828282', fontSize: '14px', marginBottom: "4px",}}>HRV</div>
          <div style={{width: '95%',height: '60px', display: 'flex', justifyContent: 'center',}}>
              <TinyBarChart data={hrvData} />
          </div>
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
          <div style={{color: '#828282', fontSize: '14px', marginBottom: "4px",}}>걸음수</div>
          <div style={{width: '95%',height: '60px', display: 'flex', justifyContent: 'center',}}>
              <TinyBarChart data={stepData} />
          </div>
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