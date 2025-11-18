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
import OnboardingChat from './onboardings/onboarding_aichat1'; // 경로가 맞는지 확인하세요
import OnboardingReport from './onboardings/onboarding__report2.jsx';
import OnboardingWearable from './onboardings/onboarding_wearable7'

export default function App() {
  const location = useLocation();
  const hideNavOn = [
    '/onboarding_aichat1', 
    '/onboarding_report2', 
    '/onboarding_wearable7',]; 

  const showBottomNav = !hideNavOn.includes(location.pathname);

  return (
    <div className="app-shell" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<OnboardingFlow />} />
          <Route path="/onboarding_aichat1" element={<OnboardingChat />} />
          <Route path="/onboarding_report2" element={<OnboardingReport />} />
          <Route path="/onboarding_wearable7" element={<OnboardingWearable />} />

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