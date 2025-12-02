
import EmotionButtons from '../components/EmotionButtons';
import TodayCards from '../components/TodayCards';
import flameImg from '../assets/flame.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Circle from '../charts/Circle';
import HRVBarChart from '../charts/Bar';
import dummy from '../charts/dummy.json';
import HeartRateGraph from '../charts/Rate';
import TinyBarChart from '../charts/Bar2';
/* eslint-disable */

export default function Home() {
  function MoodCard() {
      return (
      <div
        style={{
          width: '100%',
          height: 360,
          borderRadius: 28,
          background: 'linear-gradient(180deg, #010710 0%, #468AF0 100%)',
          padding: 16,
          position: 'relative',
          color: '#f8f8f8',
          boxShadow: '0 12px 24px rgba(0,0,0,0.18)',
        }}
      ></div>
      );
  }

  const [character, setCharacter] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const savedCharacter = localStorage.getItem("character");
    const savedName = localStorage.getItem("name");
    const savedUserId = localStorage.getItem("userId");
    setCharacter(savedCharacter);
    setName(savedName);
    setId(parseInt(savedUserId));

  }, []);

  const Navigate = useNavigate();
  const ToChat = () => {
    Navigate('/aichat');
  };

  useEffect(() => {
    const fetchData = () => {
      async () => {
        try {
          const api = import.meta.env.VITE_API_URL;
          const res = await axios.get(`${api}/api/biometric/report/${id}/latest`);
          
          console.log(res.data);

        } catch (error) {
          alert("에러 발생");
        }
      }
    };
    fetchData();

  }, [id]);


  const getData = async () => {
    try {
      const api = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${api}/api/biometric/report/${id}/latest`);
      
      console.log(res.data);

    } catch (error) {
      alert("에러 발생");
    }
    
  };

  const step = dummy.data.stepCount.total;
  const hrv_data = dummy.data.hrv.data;
  const rate_data = dummy.data.heartRate.data;
    

    
  


  return (
    <main
      style={{
        maxWidth: 430,        
        margin: '0 auto',     
        padding: '16px 16px 88px', 
        borderLeft: '1px solid rgba(0,0,0,0.08)',  
        borderRight: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 30, padding: 0, /*paddingLeft: 20*/ }}>안녕, {name}</h1>
        <div style={{
            margin:0, padding: 0, 
            color: '#FFAC19', 
            fontSize: 18, 
            //fontFamily: 'Pretendard', 
            fontWeight: '600', 
            wordWrap: 'break-word',
            //paddingLeft: 20
            marginBottom: 0,
            paddingBottom: 0
            }}>
            오늘 기분은 어때?
        </div>

        <EmotionButtons />

        <div
        style={{
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '16px',        
        }}
        >
          <div
            style={{
              width: '100%',
              height: 360,
              background: 'linear-gradient(180deg, #010710 0%, #468AF0 100%)',
              borderRadius: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', 
              padding: '16px 20px',         
              boxSizing: 'border-box',
            }}
          >
            <p
              style={{
                alignSelf: 'flex-start',
                color: 'white',
                fontSize: 12,
                //fontFamily: 'Pretendard',
                fontWeight: 500,
                lineHeight: '15.83px',
                marginBottom: 8,
              }}
            >
              {character}
            </p>
            <p
              style={{
                alignSelf: 'flex-start',
                color: '#FFE99E',
                fontSize: 16,
                //fontFamily: 'Pretendard',
                fontWeight: 500,
                lineHeight: '21.11px',
                wordWrap: 'break-word',
                marginBottom: 20,
                marginTop: 0
              }}
            >
              오늘 하루는 어땠어? 
            </p> 

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <button onClick={ToChat} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                <img
                  src={flameImg}
                  alt="불꽃캐릭터"
                  style={{
                    width: 180,
                    height: 251,
                    alignSelf: 'center',
                    marginTop: 'auto', 
                    paddingTop: 10
                  }}
                />
              </button>
            </div>
    
            
          </div>
        </div>

        <div>
          <p 
          style={{
            color: '#363636', 
            fontSize: 20, 
            //fontFamily: 'Pretendard', 
            fontWeight: '700', 
            wordWrap: 'break-word', 
            //marginLeft: 30
            }}>오늘의 하루
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
              alignItems: 'center',
              width: '100%',
              marginBottom: 20
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px', 
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', 
                  gap: '14px',
                  width: '45%',
                }}
              >
                <div
                  style={{
                    //width: '170px',
                    width: '100%',
                    height: '102px',
                    background: 'white',
                    border: '0.5px solid rgba(255, 104, 84, 0.30)',
                    boxShadow: '0px 0px 10px rgba(255, 104, 84, 0.30)',
                    borderRadius: '23.4px',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{color: '#828282', fontSize: '14px'}}>심박수</div>
                  <HeartRateGraph data={rate_data} height={70} />
                </div>

                <div
                  style={{
                    //width: '170px',
                    width: '100%',
                    height: '102px',
                    background: 'white',
                    border: '0.5px solid rgba(255, 104, 84, 0.30)',
                    boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.15)',
                    borderRadius: '23.4px',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    
                  }}
                >
                  <div style={{color: '#828282', fontSize: '14px', marginBottom: "4px",}}>HRV</div>
                  <div style={{width: '95%',height: '60px', display: 'flex', justifyContent: 'center',}}>
                    <TinyBarChart data={hrv_data} />
                  </div>
                  
                </div>


              </div>

              
              <div
                style={{
                  //width: '170px',
                  width: '45%',
                  height: '220px',
                  background: 'white',
                  borderRadius: '21.92px',
                  border: '0.5px solid rgba(255, 178, 41, 0.30)',
                  boxShadow: '0px 0px 10px rgba(255, 178, 41, 0.30)', 

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <div style={{color: '#828282', fontSize: '14px'}}>걸음수</div>
                <div>
                  <Circle steps={step} />
                </div>
                <div style={{color: '#FFB229', fontSize: 18}}>{step}</div>
              </div>


            </div>
          </div>
          

        </div>
        
        
      </section>
    </main>
  );
}
