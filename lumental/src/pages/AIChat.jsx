import flame from '../assets/그림자불꽃2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
/* eslint-disable */


export default function AIChat() {

  const [name, setName] = useState("");
  
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
    }, []);

  const [message, setMessage] =useState("");
  const [chatList, setChatList] = useState([{sender: "bot", text: "오늘 하루는 어땠어?"}]);
  const [fromBot, setFromBot] = useState("");

  useEffect(() => {
    localStorage.setItem("chatList", JSON.stringify(chatList));
  }, [chatList]);

  useEffect(() => {
    const saved = localStorage.getItem("chatList");
    if (saved) {
      setChatList(JSON.parse(saved));
    }
  }, []);
  

  const onChange = (e) => {
    setMessage(e.target.value)
  };

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    setUserId(parseInt(savedUserId));

  }, []);


  const api = import.meta.env.VITE_API_URL;

  const postChatMessage = async () => {

    try {
      const res = await axios.post(`${api}/api/chat/message`, {
        "userId": userId,
        "message": message
      });

      console.log(res.status);
      console.log(message);

      const botMessage = {
        sender: 'bot',
        text: res.data.data.reply,
        cards: res.data.data.recommendedCards || []
      }
      console.log(res.data);
      console.log(res.data.data.reply);
      setChatList((prev) => [...prev, botMessage]);

      if (res.data.data.recommendedCards) {
        localStorage.setItem(
          "recommendedCards",
          JSON.stringify(res.data.data.recommendedCards)
        );
      }
      

    } catch (error) {
      console.error("POST 에러: ", error);
    }
    
  };

  /*const getChatMessage = async () => {
    try {
      const botres = await axios.get(`${api}/api/chat/message`);
      console.log(botres.data.reply);
      setFromBot(botres.data.reply);

      const botMessage = {
        sender: "bot",
        text: fromBot
      };

      setChatList((prev) => [...prev, botMessage]);
  
    
    } catch (error) {
      console.error("GET 에러: ", error);
    }

  };*/

  const onClick = async () => {
    const myMessage = {
      sender: "me",
      text: message
    }
    setChatList((prev) => [...prev, myMessage]);

    await postChatMessage();
    //await getChatMessage();

    setMessage("");
    
  };

  return (
    <main
      style={{
        maxWidth: 430,        
        margin: '0 auto',     
        padding: '16px 16px 88px', 
        borderLeft: '1px solid rgba(0,0,0,0.08)',  
        borderRight: '1px solid rgba(0,0,0,0.08)',
        background: 'linear-gradient(180deg, #F8F8F8 30%, #FFDE89, #8BB5FF)',
        
      }}>
        <div />
        <div 
          style = {{
            display: 'flex', 
            flexDirection: 'row', 
            marginTop: 30,
            alignItems: "center",
            justifyContent: "space-between", 
            width: '60%',  
            position:'relative',
            marginLeft: 'auto'
          }}
        >
          <div style={{fontSize: 24, marginLeft: 15 }}>불씨</div>
          <div>
            <button style={{cursor: 'pointer', background: 'none', border: 'none'}}>
              <FontAwesomeIcon icon={faBars} color='black' style={{ fontSize: "18px" }} />

            </button>
          </div>
        </div>
        
        <img style={{width: 100, height: 70, margin: 0, paddingTop: 50, paddingBottom: 10}} src={flame} alt='불씨' />

        <div 
          style={{
            height: 450,
            overflowY: "auto",
          }}
        >
          {chatList.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "70%",
                  color: msg.sender === "me" ? "white" : "#4E4E4F",
                  backgroundColor:
                  msg.sender === "me" ? "#468AF0" : "#FFFFFF80",
                  boxShadow: "1px 1px 6px rgba(130, 130, 130, 0.20)",
                }}
              >
                {msg.text}
                {msg.cards}
              </div>
            </div>
          ))}

        </div>

        <div className='glass-card2' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
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
              name='message'
              className='chat' 
              type='text' 
              placeholder='메세지 보내기' 
              /*value={character}*/
              onChange={onChange}
              value = {message}
              style={{ background: 'none', border: 'none', height: 60, width: '70%', opacity: 0.6}} 
            />
            <div>
              <button
                onClick={onClick}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  paddingLeft: 10
                }}
              >
                <FontAwesomeIcon icon={faPaperPlane} color='#468AF0' style={{ fontSize: "20px" }} />
              </button>
            </div>
        </div>
      
    </main>
  );
}