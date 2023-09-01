import React from 'react';
import './IMessageBubble.css'; // Asegúrate de importar o aplicar el estilo adecuado

const IMessageBubble = ({ content, user }) => {
  const isUserMessage = user === 'user';

  return (
    <div className={`message-bubble ${isUserMessage ? 'user-message' : 'other-message'}`}>
      <div className={`message-content ${isUserMessage ? 'user-content' : 'other-content'}`}>
        {content}
      </div>
      <div className={`message-tip ${isUserMessage ? 'user-tip' : 'other-tip'}`}>
        <div className="rounded-tip" />
      </div>
    </div>
  );
};

export default IMessageBubble;
