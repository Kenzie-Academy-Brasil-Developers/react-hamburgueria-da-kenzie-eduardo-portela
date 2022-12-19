import React, { ReactNode } from "react";
import { DivInput } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  value?: string;
  handleInput?: (event: any) => void;
  placeholder: string;
  type?: string;
  className?: string;
  children?: ReactNode;
  register?: UseFormRegisterReturn;
}

export const Input = ({
  value,
  handleInput,
  placeholder,
  type,
  className,
  children,
  register,
}: IInputProps) => {
  return (
    <DivInput>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={handleInput}
        {...register}
      />
      {children}
    </DivInput>
  );
};
