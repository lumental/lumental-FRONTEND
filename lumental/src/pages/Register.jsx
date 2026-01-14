import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const savedName = localStorage.getItem("name"); 

  const savedProfileImage = localStorage.getItem("profileImage");
  const [profilePreview, setProfilePreview] = useState(savedProfileImage || "");
     
  const [input, setInput] = useState({
    name: "",
    birth: "",
    email: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    localStorage.setItem(e.target.name, e.target.value);

    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드할 수 있습니다.");
      return;
    }

    const MAX = 3 * 1024 * 1024; // 3MB
    if (file.size > MAX) {
      alert("이미지 용량이 너무 큽니다. (최대 3MB)");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = String(reader.result || "");
      setProfilePreview(base64);
      localStorage.setItem("profileImage", base64);
    };
    reader.readAsDataURL(file);
  };

  const removeProfile = () => {
    setProfilePreview("");
    localStorage.removeItem("profileImage");
  };
  

  const navigate = useNavigate();
  const goMyPage = () => navigate("/mypage");

 
  const styles = {
    page: {
        maxWidth: 430,
        margin: "0 auto",
        padding: "16px 16px 88px",
        borderLeft: "1px solid rgba(0,0,0,0.08)",
        borderRight: "1px solid rgba(0,0,0,0.08)",
        background: "#ffffff",
        minHeight: "100dvh",          
        boxSizing: "border-box",

        display: "flex",              
        flexDirection: "column",      
    },
    heroCard: {
        borderRadius: 28,
        padding: 18,
        color: "#f8f8f8",
        background:
            "linear-gradient(180deg, #010710 0%, #1b3a73 55%, #468AF0 100%)",
        boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
        position: "relative",
        overflow: "hidden",

        flex: 1,                      
        display: "flex",              
        flexDirection: "column",      
    },
    title: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.3px",
      margin: "8px 0 6px",
    },
    subtitle: {
      fontSize: 18,
      color: "rgba(0,0,0,0.55)",
      marginBottom: 14,
    },
    
    heroBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.14)",
      backdropFilter: "blur(6px)",
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 14,
    },
    
    formCard: {
        marginTop: 14,
        background: "rgba(255,255,255,0.96)",
        borderRadius: 22,
        padding: 16,
        color: "#111",
        boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
        marginBottom: 28,
        flex: 1,
                           
    },
    primaryBtn: {
        width: "100%",
        height: 44,
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        background: "#FFB020",
        color: "#fff",
        fontWeight: 800,
        fontSize: 15,
        boxShadow: "0 10px 18px rgba(0,0,0,0.18)",
        marginTop: "auto",            
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 800,
      marginBottom: 12,
      letterSpacing: "-0.2px",
    },

    field: { marginBottom: 30 },
    label: {
      display: "block",
      fontSize: 15,
      fontWeight: 700,
      color: "rgba(0,0,0,0.55)",
      marginBottom: 8,
    },
    input: {
      width: "90%",
      height: 44,
      borderRadius: 14,
      border: "1px solid rgba(0,0,0,0.10)",
      padding: "0 12px",
      outline: "none",
      fontSize: 14,
      boxSizing: "border-box",
      background: "#fff",
    },
    textarea: {
      width: "100%",
      minHeight: 92,
      resize: "vertical",
      borderRadius: 14,
      border: "1px solid rgba(0,0,0,0.10)",
      padding: "10px 12px",
      outline: "none",
      fontSize: 14,
      boxSizing: "border-box",
      background: "#fff",
      lineHeight: 1.45,
    },

    ghostBtn: {
      width: "100%",
      height: 44,
      borderRadius: 999,
      cursor: "pointer",
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.18)",
      fontWeight: 700,
      fontSize: 14,
      marginTop: 10,
    },

    rowHint: {
      marginTop: 10,
      fontSize: 12,
      color: "rgba(255,255,255,0.65)",
      lineHeight: 1.4,
    },

    profileWrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 6,
      marginBottom: 12,
      gap: 10,
    },
    profileCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#e6e4ddff",
      border: "2px solid rgba(255,255,255,0.35)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    profileImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
    uploadLabel: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 34,
      padding: "0 14px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.14)",
      border: "1px solid rgba(255,255,255,0.22)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      userSelect: "none",
    },
    fileInput: { display: "none" },
    removeBtn: {
      height: 34,
      padding: "0 14px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "rgba(255,255,255,0.9)",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
    },
  };

  return (
    <main style={styles.page}>
      <div style={{... styles.title, marginBottom: 30, marginTop: 20} }>회원정보</div>
      

      <section style={styles.heroCard}>
        {/*<div style={styles.heroBadge}>
          <span style={{ opacity: 0.9 }}>LV.1</span>
          <span style={{ opacity: 0.7 }}>•</span>
          <span style={{ opacity: 0.9 }}>
            {input.name ? `${input.name}님` : "사용자님"}
          </span>
        </div>*/}

        <div style={styles.profileWrap}>
          <div style={styles.profileCircle}>
            {profilePreview ? (
              <img src={profilePreview} alt="profile" style={styles.profileImg} />
            ) : (
              <span style={{ color: "rgba(0,0,0,0.45)", fontWeight: 700, fontSize: 12 }}>
                사진
              </span>
            )}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <label style={styles.uploadLabel}>
              사진 업로드
              <input
                type="file"
                accept="image/*"
                onChange={onChange}
                style={styles.fileInput}
              />
            </label>

            {profilePreview && (
              <button type="button" onClick={removeProfile} style={styles.removeBtn}>
                삭제
              </button>
            )}
          </div>
        </div>

        <div style={styles.formCard}>
          {/*<div style={styles.sectionTitle}>회원 정보</div>*/}

          <div style={styles.field}>
            <label style={{...styles.label, marginTop: 20}}>이름</label>
            <input
              name="name"
              value={input.name}
              onChange={onChange}
              placeholder={savedName}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>생년월일</label>
            <input
              name="birth"
              value={input.birth}
              onChange={onChange}
              type="date"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>이메일</label>
            <input
              name="email"
              value={input.email}
              onChange={onChange}
              placeholder="email@example.com"
              style={styles.input}
            />
          </div>

          <div style={{ ...styles.field, marginBottom: 0 }}>
            <label style={styles.label}>자기소개 </label>
            <textarea
              name="bio"
              value={input.bio}
              onChange={onChange}
              placeholder="자기소개 한 줄 써주세요"
              style={styles.textarea}
            />
          </div>
        </div>

        <button
          onClick={goMyPage}
          style={styles.primaryBtn}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          회원정보 수정
        </button>

        
      </section>
    </main>
  );
};

export default Register;
