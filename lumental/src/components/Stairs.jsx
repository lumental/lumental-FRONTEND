import React from 'react';
import './Stairs.css'; // CSS 파일을 임포트합니다.
import flameimg from '../assets/그림자불꽃.png';

const days = [];
for (let i = 0; i < 30; i++) {
  days.push({day: i, isActive: false});
}

// 개별 스텝 아이템 컴포넌트
const StepItem = ({ day, isActive }) => {
  return (
    <div className="step-item">
      {isActive && (
        <div className="flame-img">
          <img src={flameimg} alt='flame'/>
        </div>
      )}
      <div className="day-label">Day{day}</div>
    </div>
  );
};

// 전체 스텝 컨테이너 컴포넌트
const Stairs = () => {
  return (
    <div className="steps-container">
      {days.map((step, index) => (
        <div 
        key={index}
        className='step-item'
        style={{
          bottom: `${step.day * 50}px`,  // 위로 40px 씩 증가
          left: `${step.day * 150}px`,    // 오른쪽으로 20px 씩 증가
        }}>
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