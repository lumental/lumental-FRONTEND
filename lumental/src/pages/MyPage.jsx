import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faFile, faHeadphones } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';




export default function MyPage() {
  const navigate = useNavigate();

  
  const goToEditPage = () => {
    navigate('/Register');
  };


  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>

      <div style={{display: 'flex', flexDirection: 'row'}}>
        <h1
          style={{
            margin: 0,                
            fontSize: 30,
            fontFamily: 'Pretendard',
            fontWeight: 700,
            color: '#000',
            wordWrap: 'break-word',
            paddingLeft: 20
          }}
        > 
          MY PAGE
        </h1>

        <button 
          className='SettingButton'
          style={{
            border: 'none',       
            outline: 'none',      
            background: 'white',
            paddingTop: 10,
            paddingLeft: 250,
            width: 40,
            height: 40,
            cursor: 'pointer',
          }}
          
        >
          <FontAwesomeIcon icon={faGear} color='#767676' style={{ fontSize: "22px" }} />
        </button>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
        <div 
          style={{
            width: 360, 
            height: 300, 
            background: 'linear-gradient(0deg, rgba(255, 233, 158, 0.40) 13%, #FFE99E 100%)', 
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{width: 100, height: 100, backgroundColor: '#e6e4ddff', borderRadius: 50, padding: 0, margin: 0}} ></div>
          <p style={{color: '#2C2C2C', fontSize: 25, fontFamily: 'Pretendard', fontWeight: '600', paddingTop: 10, paddingBottom: 5, margin: 0}}>Name</p>
          <p style={{color: '#7E7E7E', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', padding: 5, margin: 0 }}>자기소개</p>
          <p style={{color: '#7E7E7E', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', paddingBottom: 10, margin: 0}}> level</p>
          <button 
            onClick={goToEditPage} 
            style={{
              width: 115, 
              height: 30, 
              background: 'white', 
              borderRadius: 40, 
              border: 'none', 
              padding: 0, 
              margin: 0,
              cursor: 'pointer',
            }} 
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            회원정보 수정
          </button>

        </div>

        <div 
          style={{
            width: 360, 
            height: 75, 
            background: '#f8f8f8', 
            boxShadow: '2px 3px 4px rgba(158, 153, 153, 0.4)', 
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'center', 
            alignItems: 'center', 
            border: '1px gray'
    
          }}
        >
          <button style={{background: 'none', border: 'none', cursor: 'pointer', margin: 0, padding: '0 30px', }} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}> 
            <FontAwesomeIcon icon={faFile} color='#767676' style={{ fontSize: "22px" }} />
            <br /><span style={{display: 'inline-block', color: '#767676', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>공지사항</span>
          </button>

          <div style={{margin: '0 8px', backgroundColor: '#c9c5c5ff', width: 1,height: 35,}}></div>

          <button style={{background: 'none', border: 'none', cursor: 'pointer', margin: 0, padding: '0 30px',}} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faHeadphones} color='#767676' style={{ fontSize: "22px" }} />
            <br /> <span style={{display: 'inline-block', color: '#767676', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>고객센터</span>
          </button>

          <div style={{margin: '0 8px', backgroundColor: '#c9c5c5ff', width: 1,height: 35,}}></div>

          <button style={{background: 'none', border: 'none', cursor: 'pointer', margin: 0, padding: '0 30px',}} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faCircleInfo} color='#767676' style={{ fontSize: "22px" }} />
            <br /><span style={{display: 'inline-block', color: '#767676', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>서비스 소개</span>
          </button>

        </div>


      </div>

      
      
      

      
    </main>
  );
}
