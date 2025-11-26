import React from 'react';
import './Stairs.css'; 
import flameimg from '../assets/그림자불꽃.png';
/* eslint-disable */

const days = [{day: 0, isActive: true}];
for (let i = 1; i < 30; i++) {
  days.push({day: i, isActive: false});
}

// 개별 스텝 아이템 컴포넌트
const StepItem = ({ day, isActive }) => {
  return (
  <div className="day-label">Day{day}</div>
    
  );
};

// 전체 스텝 컨테이너 컴포넌트
const Stairs = ({ isCleared }) => {

  if(isCleared){
    days[1].isActive = true;
    days[0].isActive = false;
  }


  return (
    <div className="steps-container">
      {days.map((step, index) => (
        <div 
        key={index}
        className='step-item'
        style={{
          position: "absolute", 
          bottom: `${step.day * 50 + 40}px`,  
          left: `${step.day * 150}px`,
          display:'flex',
          flexDirection: 'column',
          
            
        }}>
          {step.isActive && (
            <div className="flame-img">
              <img src={flameimg} alt='flame'/>
            </div>
          )}
          <StepItem
            key={index}
            day={index+1}
            isActive={step.isActive}
            
          />
        </div>
        
      ))}
    </div>
  );
};

export default Stairs;