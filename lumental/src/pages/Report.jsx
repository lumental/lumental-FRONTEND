/* eslint-disable */
import { useEffect, useState } from "react"; 
import axios from "axios";
import HeartRateGraph from '../charts/Rate';
import TinyBarChart2 from "../charts/Bar4";
import SleepGraph from "../charts/SleepGraph";
import Rate from "../charts/Rate2";

export default function Report() {
  
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedUserId = localStorage.getItem("userId");

    setName(savedName);
    setId(parseInt(savedUserId));
  }, []);


  const [hrvData, setHrvData] = useState([]);
  const [heartRate, setHeartRate] = useState([]);
  const [stepData, setStepData] = useState([]);
  //const [sleep, setSleep] = useState([]);



  useEffect(() => {
    const raw = localStorage.getItem("healthSummary");
    console.log("raw:", raw);

    if (!raw) return; // 저장된 데이터가 없으면 바로 종료

    const getData = JSON.parse(raw);
    console.log("parsed:", getData);
//localStorage.setItem("healthSummary", JSON.stringify(res.data));
    //setHrvData(getData?.hrv?.data ?? []);
    setHeartRate(getData?.heartRate?.data ?? []);
    setStepData(getData?.steps?.data ?? []);
    setHrvData(getData?.hrv?.data ?? []);    


    /*setSleep(getData?.sleep?.segments ?? []);

    

    const stageToValue = {
      light: 1,
      rem: 2,
      deep: 3,
    };

    // SleepGraph에 넣을 데이터 형태로 변환
    const sleepGraphData = sleep.segments.map(seg => ({
      value: stageToValue[seg.stage]
    }));*/

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
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          {/*<div 
            style={{
                color: '#FF6854', 
                fontSize: '14px', 
                marginBottom: "4px", 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'flex-start', 
                width: '100%',
                marginLeft: 20
            }}
          >
            오늘의 심박수
            </div>*/}
          <div style={{width: '100%',height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Rate data={heartRate}/>
          </div>
          
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
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          {/*<div 
            style={{
                color: '#FF6854', 
                fontSize: '14px', 
                marginBottom: "4px", 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'flex-start', 
                width: '100%',
                marginLeft: 20
            }}
          >HRV
          </div>*/}
          <div style={{width: '100%',height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Rate data={hrvData} />
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
            flexDirection: 'column',
            
          }}
        >
          {/*<div style={{color: '#2C34C4', fontSize: '14px', paddingBottom: 20}}>오늘의 수면</div>
          <div style={{alignItems: 'center', justifyContent: 'center'}}>
            <SleepGraph data={sleepGraphData} height={150} />
          </div>*/}
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
            flexDirection: 'column',
            
          }}
        >
          <div 
            style={{
                color: '#FFAC19', 
                fontSize: '14px', 
                marginBottom: "4px", 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'flex-start', 
                width: '100%',
                marginLeft: 20
            }}
          >오늘의 활동량</div>
          <div style={{width: '95%',height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <TinyBarChart2 data={stepData} />
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
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            style={{
              color: '#3384FF', 
              fontSize: '14px', 
              marginBottom: "4px", 
              display: 'flex', 
              alignItems: 'flex-start', 
              justifyContent: 'flex-start', 
              width: '100%',
              marginLeft: 20
            }}
          >
            혈중 산소
          </div>
          <div>
            {hrvData !== null && (
              <p>데이터가 부족해 그래프를 제공할 수 없어요.</p>
            )}
          </div>
        </div>

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