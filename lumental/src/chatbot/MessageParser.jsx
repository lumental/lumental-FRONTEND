import React from "react";

export default function MessageParser({ children, actions }) {
  
  const parse = (message) => {
    const text = message.toLowerCase();

    if (text.includes("안녕") || text.includes("hello")) {
      actions.handleHello();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { parse })
      )}
    </>
  );
}