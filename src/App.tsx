import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/Home";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import TransitionPage from "./components/TransitionPage";

import { useContext } from "react";
import { ContextTheme } from "./contexts/ThemeContext";

const App = () => {
  const { transition } = useContext(ContextTheme);
  return (
    <>
      <GlobalStyle />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
      {transition && <TransitionPage />}
    </>
  );
};

export default App;
