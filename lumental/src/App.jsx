import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import AIChat from './pages/AIChat';
import Report from './pages/Report';
import CheckList from './pages/CheckList';
import MyPage from './pages/MyPage';
import './App.css'
import './layouts/AppLayout.jsx'
import Register from './pages/Register.jsx';
import OnboardingFlow from './onboardings/OnBoardingFlow.jsx';
import OnboardingReport from './onboardings/onboarding__report2.jsx';

export default function App() {
  const location = useLocation();
  const hideNavOn = []; 

  const showBottomNav = !hideNavOn.includes(location.pathname);

  return (
    <div className="app-shell" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<OnboardingFlow />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aichat" element={<AIChat />} />
          <Route path="/report" element={<Report />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/Register" element={<Register />} />
          
          {/* 잘못된 경로 -> 메인으로 */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      

      {showBottomNav && <BottomNav />}
      
    </div>
    
  );
}