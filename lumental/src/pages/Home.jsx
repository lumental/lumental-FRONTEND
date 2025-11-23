
import EmotionButtons from '../components/EmotionButtons';
import TodayCards from '../components/TodayCards';
import flameImg from '../assets/flame.png';

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
        <h1 style={{ margin: 0, fontSize: 30, padding: 0, /*paddingLeft: 20*/ }}>안녕, 닉네임!</h1>
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
              캐릭터 이름 //연결 필요
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
              캘린더 확인으로 건네는 한마디 
            </p> 
    
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
              width: '100%'
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
                  }}
                ></div>

                <div
                  style={{
                    //width: '170px',
                    width: '100%',
                    height: '102px',
                    background: 'white',
                    border: '0.5px solid rgba(255, 104, 84, 0.30)',
                    boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.15)',
                    borderRadius: '23.4px',
                  }}
                ></div>
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
                }}
              ></div>
            </div>
          </div>
          

        </div>
        
        
      </section>
    </main>
  );
}
