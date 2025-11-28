import React from "react";

export default function ActionProvider({ createChatBotMessage, setState, children }) {
  
  const handleHello = () => {
    const msg = createChatBotMessage("반가워요! 무엇이 궁금하신가요?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  };

  const actions = { handleHello };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { actions })
      )}
    </>
  );
}