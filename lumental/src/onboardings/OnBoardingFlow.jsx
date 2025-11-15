/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingChat from "./onboarding_aichat1";
import OnboardingReport from "./onboarding__report2";
import OnboardingWearable from "./onboarding_wearable7";
import { Routes, Route, Navigate,  } from 'react-router-dom';

const onboardingPages = [OnboardingChat, OnboardingReport, OnboardingWearable];


export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenOnboarding");
    if (hasSeen) {
      navigate("/home");
    }
  }, [navigate]);

  const CurrentPage = onboardingPages[step];
  const handleNext = () => {
    if (step < onboardingPages.length - 1) {
      setStep((prev) => prev + 1);
    } 
    else {
      // 마지막 페이지 → 온보딩 완료 처리
      localStorage.setItem("hasSeenOnboarding", "true");
      //navigate("/signup"); // 완료 후 회원가입 or 홈으로 이동
      navigate("/home");
    }
  };


  return (
    <main style={{ maxWidth: 430, margin: "0 auto", padding: "20px" }}>
      <Routes>
        <Route path="/onboarding_aichat1" element={<OnboardingChat/>} /> 
        <Route path='/onboarding_report2' element={<OnboardingReport/>} />
        <Route path='/onboarding_wearable7' element={<OnboardingWearable/>} />

      </Routes>
      
      
    </main>
  );
}