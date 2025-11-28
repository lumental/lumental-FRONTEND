import React from "react";
import Chatbot from "react-chatbot-kit";

import ChatbotConfig from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

import "react-chatbot-kit/build/main.css";

export default function AppChat() {
  return (
    <div style={styles.chatContainer}>
      <Chatbot
        config={ChatbotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

const styles = {
  chatContainer: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: "350px",
    zIndex: 999,
  },
};