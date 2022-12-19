import React, { Children } from "react";
import { Forms } from "./style";

interface IFormProps {
  callback: () => {};
  children: React.ReactNode | JSX.Element;
}

export const Form = ({ callback, children }: IFormProps) => {
  return <Forms onSubmit={callback}>{children}</Forms>;
};
