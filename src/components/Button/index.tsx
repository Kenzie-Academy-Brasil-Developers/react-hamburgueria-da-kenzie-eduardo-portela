import React from "react";

interface IButtonProps {
  type?: "submit" | "button";
  text: string;
  callback?: () => void;
}

export const Button = ({ type, text, callback }: IButtonProps) => {
  return (
    <>
      <button onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
};
