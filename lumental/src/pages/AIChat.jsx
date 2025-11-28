import flame from '../assets/그림자불꽃2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import AppChat from '../chatbot/Appchat';

export default function AIChat() {
  return (
    <main
      style={{
        maxWidth: 430,        
        margin: '0 auto',     
        padding: '16px 16px 88px', 
        borderLeft: '1px solid rgba(0,0,0,0.08)',  
        borderRight: '1px solid rgba(0,0,0,0.08)',
        background: 'linear-gradient(180deg, #F8F8F8 30%, #FFDE89, #8BB5FF)',
        height: 750
      }}>
        <div />
        <div 
          style = {{
            display: 'flex', 
            flexDirection: 'row', 
            marginTop: 30,
            alignItems: "center",
            justifyContent: "space-between", 
            width: '50%',  
            position:'relative',
            marginLeft: 'auto'
          }}
        >
          <div style={{fontSize: 24, left: '50%' }}>불씨</div>
          <div>
            <button style={{cursor: 'pointer', background: 'none', border: 'none'}}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "18px" }} />

            </button>
          </div>
        </div>
        
        <img style={{width: 100, height: 70, margin: 0, paddingTop: 50}} src={flame} alt='불씨' />

        <div style={{height: 550}}>
          

        </div>

        <div className='glass-card2' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  paddingRight: 20
                }}
              >
                <FontAwesomeIcon icon={faCirclePlus} color='#468AF0' style={{ fontSize: "20px" }} />
              </button>
            </div>
            <input 
              name='character'
              className='chat' 
              type='text' 
              placeholder='메세지 보내기' 
              /*value={character}
              onChange={onChange}*/
              style={{ background: 'none', border: 'none', height: 60, width: '70%', opacity: 0.6}} 
            />
            <div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <FontAwesomeIcon icon={faPaperPlane} color='#468AF0' style={{ fontSize: "20px" }} />
              </button>
            </div>
        </div>
      
    </main>
  );
}