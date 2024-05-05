import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={"test bg-slate-600"}>Button-12</button>;
};

export default Button;
