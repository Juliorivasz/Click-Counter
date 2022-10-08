import React from "react";
import "../css/counter.css"

function Counter({ numclicks }) {
  return (
    <div className="counter">
      {numclicks}
    </div>
  );
}

export default Counter;