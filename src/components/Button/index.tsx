import { ButtonHTMLAttributes, ReactNode } from "react";
import { ThemeButton } from "./style";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return <ThemeButton {...rest}>{children}</ThemeButton>;
};

export default Button;
