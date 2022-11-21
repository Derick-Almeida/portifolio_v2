import GlobalStyle from "./styles/GlobalStyle";

import TransitionPage from "./components/TransitionPage";

import { useContext } from "react";
import { ContextTheme } from "./contexts/ThemeContext";
import Routes from "./routes";

const App = () => {
  const { transition } = useContext(ContextTheme);
  return (
    <>
      <GlobalStyle />
      <Routes />
      {transition && <TransitionPage />}
    </>
  );
};

export default App;
