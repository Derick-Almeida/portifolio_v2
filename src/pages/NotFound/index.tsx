import { useEffect, useState } from "react";
import { Container } from "./style";

import BGNotFound from "../../assets/404.jpg";
import BGGlitch from "../../assets/glitch.png";

const NotFound = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const windowEvent = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowEvent);

    return () => window.removeEventListener("resize", windowEvent);
  }, []);

  return (
    <>
      {windowSize < 900 ? (
        <Container bg={BGGlitch}>
          <main>
            <div className="msg">
              <h1>404</h1>
              <p>Page not found</p>
              <a href="/">Return to home page</a>
            </div>
          </main>
        </Container>
      ) : (
        <Container bg={BGNotFound}>
          <main>
            <div className="msg">
              <a href="/">Return to home page</a>
            </div>
          </main>
        </Container>
      )}
    </>
  );
};

export default NotFound;
