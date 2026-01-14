import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faFile, faHeadphones } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




export default function MyPage() {
  const navigate = useNavigate();

  const goToEditPage = () => {
    navigate('/Register');
  };
//이름, 나이, 이메일, 바이오
  
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  
  useEffect(() => {;
    const savedName = localStorage.getItem("name");
    const savedBio = localStorage.getItem("bio");
    setName(savedName);
    setBio(savedBio);
  }, []);

  const profilePreview = localStorage.getItem("profileImage");

  const [isModalOpen, setIsModalOpen] = useState(false);
  //const onClick = () => {setIsModalOpen(true)};
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };


  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px'  }}>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between",}}>
        <p
          style={{
            margin: 0,                
            fontSize: 30,
            //fontFamily: 'Pretendard',
            fontWeight: 700,
            color: '#000',
            wordWrap: 'break-word',
            //paddingLeft: 20
          }}
        > 
          MY PAGE
        </p>

        <button 
          className='SettingButton'
          style={{
            border: 'none',       
            outline: 'none',      
            background: 'white',
            //paddingTop: 10,
            //paddingLeft: 150,
            right: 0,
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
            width: '100%', 
            height: 300, 
            background: 'linear-gradient(0deg, rgba(255, 233, 158, 0.40) 13%, #FFE99E 100%)', 
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#e6e4ddff",
              borderRadius: 50,
              padding: 0,
              margin: 0,
              overflow: "hidden",          
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }} 
          >
            {profilePreview ? (
              <img
                src={profilePreview}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",       
                  borderRadius: "50%",
                }}
              />
            ) : null}
          </div>
          <p style={{color: '#2C2C2C', fontSize: 25,  fontWeight: '600', paddingTop: 10, paddingBottom: 5, margin: 0}}>{name}</p>
          <p style={{color: '#7E7E7E', fontSize: 12, /*fontFamily: 'Pretendard',*/ fontWeight: '500', padding: 5, margin: 0 }}>{bio}</p>
          <p style={{color: '#7E7E7E', fontSize: 12,  fontWeight: '500', paddingBottom: 10, margin: 0}}> LV. 1</p>
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
            width: '100%', 
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
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => openModal("notice")}> 
            <FontAwesomeIcon icon={faFile} color='#767676' style={{ fontSize: "22px" }} />
            <br /><span style={{display: 'inline-block', color: '#767676', fontSize: 10,  fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>공지사항</span>
          </button>

          <div style={{margin: '0 8px', backgroundColor: '#c9c5c5ff', width: 1,height: 35,}}></div>

          <button style={{background: 'none', border: 'none', cursor: 'pointer', margin: 0, padding: '0 30px',}} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => openModal("customer")}>
            <FontAwesomeIcon icon={faHeadphones} color='#767676' style={{ fontSize: "22px" }} />
            <br /> <span style={{display: 'inline-block', color: '#767676', fontSize: 10,  fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>고객센터</span>
          </button>

          <div style={{margin: '0 8px', backgroundColor: '#c9c5c5ff', width: 1,height: 35,}}></div>

          <button style={{background: 'none', border: 'none', cursor: 'pointer', margin: 0, padding: '0 30px',}} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} onClick={() => openModal("about")}>
            <FontAwesomeIcon icon={faCircleInfo} color='#767676' style={{ fontSize: "22px" }} />
            <br /><span style={{display: 'inline-block', color: '#767676', fontSize: 10,  fontWeight: '500', wordWrap: 'break-word', paddingTop: 5}}>서비스 소개</span>
          </button>

        </div>


      </div>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 340,
              background: "#fff",
              borderRadius: 18,
              padding: 18,
              boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
              {modalType === "notice" && "공지사항"}
              {modalType === "customer" && "고객센터"}
              {modalType === "about" && "서비스 소개"}
            </div>

            <div style={{ fontSize: 13, color: "rgba(0,0,0,0.65)", lineHeight: 1.5 }}>
              {modalType === "notice" && (
                <>
                  2026년 1월 15일 UNIS 데모데이! Lumental!
                  
                </>
              )}

              {modalType === "customer" && (
                <>
                  Lumental 인스타그램 팔로우 & 좋아요!
                  <br />
                  • UNIS Instagram: @unis_ewha
                </>
              )}

              {modalType === "about" && (
                <>
                  Lumental은 객관적인 생체지표를 기반으로  
                  <br />
                  사용자의 정신적 컨디션을 분석하고 관리하는
                  <br />
                  데이터 기반 멘탈 헬스케어 플랫폼입니다.
                </>
              )}
            </div>

            <button
              type="button"
              onClick={closeModal}
              style={{
                marginTop: 16,
                width: "100%",
                height: 40,
                borderRadius: 12,
                border: "none",
                background: "#FFB020",
                color: "#fff",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}

      
      
      

      
    </main>
  );
}
