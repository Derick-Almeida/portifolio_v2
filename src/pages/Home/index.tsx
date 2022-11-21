import { useContext } from "react";
import { ContextTheme } from "../../contexts/ThemeContext";

import { Container } from "./style";
import { ContainerPages } from "../../styles/GlobalStyle";

import Button from "../../components/Button";
import DevName from "../../components/DevName";
import Navegation from "../../components/Navegation";
import TitilePage from "../../components/TitlePage";

const Home = () => {
  const { setTransition } = useContext(ContextTheme);

  const switchPage = () => {
    setTransition(true);

    setTimeout(() => {
      window.scrollTo(0, window.innerHeight * 2);
    }, 300);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <ContainerPages>
      <TitilePage title="home" fontSize="calc(6vw + 6vh + 4vmin)" />
      <Container>
        <div>
          <p>
            I <span>love</span> creating and <span>developing</span> projects
          </p>
          <span>
            Discover here in this environment, created especially for you, all my projects and
            technologies
          </span>
          <Button onClick={switchPage}>See projects</Button>
        </div>
      </Container>
      <Navegation currentPage="home" />
      <DevName />
    </ContainerPages>
  );
};

export default Home;
