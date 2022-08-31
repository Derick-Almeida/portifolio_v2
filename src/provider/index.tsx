import { ReactNode } from "react";
import ProviderTheme from "../contexts/ThemeContext";

export interface IProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return (
    <>
      <ProviderTheme>{children}</ProviderTheme>
    </>
  );
};

export default Providers;
