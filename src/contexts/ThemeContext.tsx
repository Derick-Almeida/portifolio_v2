import { createContext, ReactNode, useState } from "react";

import { ThemeProvider } from "styled-components";

import themes from "../styles/Themes";

export interface IProviderProps {
  children: ReactNode;
}

interface IThemeProviderData {
  transition: boolean;
  selectTheme: (prop: string) => void;
  setTransition: any;
}

export const ContextTheme = createContext<IThemeProviderData>({} as IThemeProviderData);

const ProviderTheme = ({ children }: IProviderProps) => {
  const [theme, setTheme] = useState<string>("yellow");
  const [transition, setTransition] = useState<boolean>(false);

  const selectTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ContextTheme.Provider value={{ selectTheme, transition, setTransition }}>
      <ThemeProvider
        theme={
          theme === "yellow"
            ? themes.themeYellow
            : theme === "blue"
            ? themes.themeBlue
            : theme === "green"
            ? themes.themeGreen
            : theme === "aqua"
            ? themes.themeAqua
            : theme === "pink"
            ? themes.themePink
            : themes.themeOrange
        }
      >
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
};

export default ProviderTheme;
