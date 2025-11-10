import { useState } from "react";

export default function CheckList() {
  const [input, setInput] = useState({
    checklist1: "",
    checklist2: "",
    checklist3: "",
    checklist4: "",
    checklist5: "",
          
  });

  const [check, setCheck] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false
  });
  
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCheck = (e) => {
    setCheck({
      ...check,
      [e.target.checked]: e.target.value,
    })
      }



  return (
    <main style={{ maxWidth: 430, margin: '0 auto', padding: '16px 16px 88px', borderLeft: '1px solid rgba(0,0,0,0.08)',
    borderRight: '1px solid rgba(0,0,0,0.08)',  }}>
      <h1
        style={{
          margin: 0,                
          fontSize: 30,
          fontFamily: 'Pretendard',
          fontWeight: 700,
          color: '#000',
          paddingLeft: 20
        }}
      >
          SOLUTION
      </h1>

      <div 
        style={{
            margin:0, padding: 0, 
            color: '#828282', 
            fontSize: 18, 
            fontFamily: 'Pretendard', 
            fontWeight: '500', 
            wordWrap: 'break-word',
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 30
        }}
      >
        name님, 오늘도 character와(과) 함께해요!
      </div>

      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}> 
        <div 
          style={{
            width: 400, 
            height: 700, 
            background: 'linear-gradient(180deg, #010710 0%, #468AF0 100%)', 
            borderRadius: 28,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{width: 360, height: 270, background: '#f8f8f8', borderRadius: 18, marginBottom: 50, }}></div>

          <div style={{width: 360, height: 270, background: '#f8f8f8', borderRadius: 18}}>
            <p style={{color: 'black', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word', marginLeft: 20}}>오늘의 도전</p>
            <div>
              <input 
                type="checkbox"
                name="checkbox1"
                value={check.checkbox1}
                onChange={onChangeCheck} 
                className="CheckBox"
              />
              
              <input
                type="text"
                name="checklist1"
                value={input.checklist1}
                onChange={onChange}
              />
            </div>
            
            <div>
              <input 
                type="checkbox"
                name="checkbox2"
                value={check.checkbox2}
                onChange={onChangeCheck} 
                className="CheckBox"
              />
              <input
                type="text"
                name="checklist2"
                value={input.checklist2}
                onChange={onChange}
              />
            </div>
            
            <div>
              <input 
                type="checkbox"
                name="checkbox3"
                value={check.checkbox3}
                onChange={onChangeCheck} 
                className="CheckBox"
              />
              <input
                type="text"
                name="checklist3"
                value={input.checklist3}
                onChange={onChange}
              />
            </div>
            
            <div>
              <input 
                type="checkbox"
                name="checkbox4"
                value={check.checkbox4}
                onChange={onChangeCheck} 
                className="CheckBox"
              />
              <input
                type="text"
                name="checklist4"
                value={input.checklist4}
                onChange={onChange}
              />
            </div>
            
            <div>
              <input 
                type="checkbox"
                name="checkbox5"
                value={check.checkbox5}
                onChange={onChangeCheck} 
                className="CheckBox"
              />
              <input
                type="text"
                name="checklist5"
                value={input.checklist5}
                onChange={onChange}
              />
            </div>
            
          </div>

        </div>


      </div>
      
    </main>
  );
}
