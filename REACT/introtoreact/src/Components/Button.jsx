import React from "react";

function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.color }} onClick={props.onclick}>
        Click
      </button>
    </div>
  );
}

export default Button;
