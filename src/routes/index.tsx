import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

import NotFound from "../pages/NotFound";
import { useEffect, useState } from "react";
import UnderDevelopment from "../pages/UnderDevelopment";

const Routes = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const windowEvent = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowEvent);

    return () => window.removeEventListener("resize", windowEvent);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        {windowSize <= 770 ? (
          <UnderDevelopment />
        ) : (
          <>
            <Home />
            <Skills />
            <Projects />
            <Contacts />
          </>
        )}
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
