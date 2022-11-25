import React from "react";
import { DivInput } from "./style";
export const Input = ({
  value,
  handleInput,
  placeholder,
  type,
  className,
  children,
}) => {
  return (
    <DivInput>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={handleInput}
      />
      {children}
    </DivInput>
  );
};
