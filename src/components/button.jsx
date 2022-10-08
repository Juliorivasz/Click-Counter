import React from "react";
import "../css/button.css";

function Button({ text, isclick, activeClick}) {
  return (
    <button 
      className={isclick ? "button-click" : "button-restart" }
      onClick={activeClick} >
      {text}
    </button>
  );
}

export default Button;