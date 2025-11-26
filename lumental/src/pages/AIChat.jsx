import flame from '../assets/그림자불꽃.png';

export default function AIChat() {
  return (
    <main
      style={{
        maxWidth: 430,        
        margin: '0 auto',     
        padding: '16px 16px 88px', 
        borderLeft: '1px solid rgba(0,0,0,0.08)',  
        borderRight: '1px solid rgba(0,0,0,0.08)',
        background: 'linear-gradient(90deg, #FFDE89, #8BB5FF)'
      }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginTop: 50}}>불씨</div>
        <img style={{width: 100, height: 100, margin: 0, padding: 0}} src={flame} alt='불씨' />

        <div className='glass-card' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input 
              name='character'
              className='chat' 
              type='text' 
              placeholder='메세지 보내기' 
              /*value={character}
              onChange={onChange}*/
              style={{ background: 'white', border: 'none', height: 60, width: '70%', opacity: 0.6}} 
            />
        </div>
      
    </main>
  );
}