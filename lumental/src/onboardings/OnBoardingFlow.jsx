/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// OnboardingChat, Report, Wearable, Routes, Route 임포트 모두 제거

export default function OnboardingFlow() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenOnboarding");
    if (hasSeen) {
      // 이미 온보딩을 봤다면 홈으로 보냅니다.
      navigate("/home", { replace: true });
    } else {
      // 처음이라면 온보딩 첫 페이지로 보냅니다.
      navigate("/onboarding_aichat1", { replace: true });
    }
  }, [navigate]);

  // 이 컴포넌트는 시각적인 내용을 렌더링할 필요가 없습니다.
  return null;
}