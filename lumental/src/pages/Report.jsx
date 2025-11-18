export default function Report() {
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
          "NAME"님은{' '}
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
          "증상"
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
          이 의심돼요
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
            marginTop: 40
          }}
        ></div>

        <div
          style={{
            width: '100%',
            height: 240,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(255, 104, 84, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(255, 104, 84, 0.30)',
            marginTop: 20
          }}
        ></div>

        <div
          style={{
            width: '100%',
            height: 360,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(95, 103, 255, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(95, 103, 255, 0.30)',
            marginTop: 20
          }}
        ></div>

        <div
          style={{
            width: '100%',
            height: 240,
            background: 'white',
            boxShadow: '0px 0px 20px rgba(255, 178, 41, 0.30)',
            borderRadius: 28,
            border:'0.5px solid rgba(255, 178, 41, 0.30)',
            marginTop: 20
          }}
        ></div>

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