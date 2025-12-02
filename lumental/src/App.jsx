/* eslint-disable no-unused-vars */
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
import OnboardingStart from './onboardings/onboarding_start0.jsx';
import OnboardingChat from './onboardings/onboarding_aichat1'; 
import OnboardingReport from './onboardings/onboarding__report2.jsx';
import OnboardingSolution from './onboardings/onboarding_solution3.jsx';
import OnboardingChatlist from './onboardings/onboarding_chatlist4.jsx';
import OnboardingLogin from './onboardings/onboarding_login5.jsx';
import OnboardingWearable from './onboardings/onboarding_wearable12'
import OnboardingCalendar from './onboardings/onboarding_calendar8.jsx';
import OnboardingCharacter from './onboardings/onboarding_character10.jsx';
import OnboardingYourname from './onboardings/onboarding_yourname11.jsx';


export default function App() {
  const location = useLocation();
  const hideNavOn = [
    '/',
    '/onboarding_start0',
    '/onboarding_aichat1', 
    '/onboarding_report2',
    '/onboarding_solution3',
    '/onboarding_chatlist4',
    '/onboarding_login5', 
    '/onboarding_wearable12',
    '/onboarding_calendar8',
    '/onboarding_character10',
    '/onboarding_yourname11']; 

  

  const hideNav = location.pathname.startsWith("/onboarding_start0");
  
  const showBottomNav = !hideNavOn.includes(location.pathname);

  return (
    <div className="app-shell" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flex: 1 }}>
        <Routes>
          {/*<Route path="/" element={<OnboardingFlow />} /> */}
          <Route path="/" element={<OnboardingStart />} />
          <Route path="/onboarding_aichat1" element={<OnboardingChat />} />
          <Route path="/onboarding_report2" element={<OnboardingReport />} />
          <Route path="/onboarding_solution3" element={<OnboardingSolution />} />
          <Route path="/onboarding_chatlist4" element={<OnboardingChatlist />} />
          <Route path="/onboarding_login5" element={<OnboardingLogin />} />
          <Route path="/onboarding_wearable12" element={<OnboardingWearable />} />
          <Route path="/onboarding_calendar8" element={<OnboardingCalendar />} />
          <Route path="/onboarding_character10" element={<OnboardingCharacter />}/>
          <Route path="/onboarding_yourname11" element={<OnboardingYourname />}/>
          

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