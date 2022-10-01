import React from "react";


function Alert({ type, messages }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {messages.map((msg) => (
        <p className="mb-0 small" key={msg}>
          {msg}
        </p>
      ))}
    </div>
  );
}

export default Alert;