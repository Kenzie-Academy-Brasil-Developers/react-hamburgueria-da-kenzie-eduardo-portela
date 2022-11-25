import React from "react";

export const Button = ({ type, text, callback }) => {
  return (
    <>
      <button onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
};
