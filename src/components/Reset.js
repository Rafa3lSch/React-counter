import React from "react";

function Reset(props) {
  return (
    <button
      onClick={() => {
        props.reset(props.value);
      }}
    >
      Reset
    </button>
  );
}

export default Reset;
