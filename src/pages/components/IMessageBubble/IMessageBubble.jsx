import React from "react";
import "./IMessageBubble.css"; // Asegúrate de importar o aplicar el estilo adecuado

export const IMessageBubble = ({ content, user }) => {
  const isUserMessage = user === "user";
  const pathSvg = isUserMessage ? `tip-blue.svg` : `tip-white.svg`;
  return (
    <div>
      <div
        className={`message-bubble ${
          isUserMessage ? "user-message" : "other-message"
        }`}
      >
        <div
          className={`message-content ${
            isUserMessage ? "user-content" : "other-content"
          }`}
        >
          {content}
        </div>
        <div
        className={`message-tip ${isUserMessage ? "user-tip" : "other-tip"}`}
      >
        <img src={`src/assets/${pathSvg}`} id="img-tip"></img>
      </div>
      </div>
    </div>
  );
};
