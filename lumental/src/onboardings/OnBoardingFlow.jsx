import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function OnboardingFlow() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenOnboarding");
    if (hasSeen) {
    
      navigate("/home", { replace: true });
    } else {
      
      navigate("/onboarding_aichat1", { replace: true });
    }
  }, [navigate]);


  return null;
}