import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
  faFaceSadTear,
  faFaceSmileWink
} from '@fortawesome/free-regular-svg-icons';

export default function EmotionButtons() {
  const emotions = [
    { label: '즐거움', icon: faFaceSmile },
    { label: '짜증남', icon: faFaceFrown },
    { label: '그럭저럭', icon: faFaceMeh },
    { label: '지쳤음', icon: faFaceSadTear },
    { label: '기대됨', icon: faFaceSmileWink}
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="emotion-scroll">
      {emotions.map((emotion, index) => (
        <button
          key={index}
          className={`emotion-btn ${selected === emotion.label ? 'active' : ''}`}
          onClick={() => setSelected(emotion.label)}
          style={{marginTop: 0, paddingTop: 0}}
        >
          <FontAwesomeIcon
            icon={emotion.icon}
            size="lg"
            style={{ marginRight: '6px' }}
          />
          {emotion.label}
        </button>
      ))}
    </div>
  );
}
