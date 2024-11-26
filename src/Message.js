import React from 'react';

function Message({ message, changeMessage }) {
  return (
    <div>
      <h2>Message: {message}</h2>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default Message;