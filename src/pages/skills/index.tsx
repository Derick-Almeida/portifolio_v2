import { useEffect, useRef } from "react";
import Navegation from "../../components/Navegation";
import TitilePage from "../../components/TitlePage";

import { ContainerPages } from "../../styles/GlobalStyle";
import BackgroundHexagon from "./BackgroundHexagon";
import { Container } from "./style";

const Skills = () => {
  const cursor: any = useRef();

  useEffect(() => {
    const illuminateCursor = (e: any) => {
      cursor.current.style.left = `${e.clientX}px`;
      cursor.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", illuminateCursor);

    return () => window.removeEventListener("mousemove", illuminateCursor);
  }, []);

  return (
    <ContainerPages>
      <TitilePage title="skills" fontSize="calc(5vw + 5vh + 5vmin)" />
      <Container>
        <BackgroundHexagon />
        <div className="cursor" ref={cursor}></div>
      </Container>
      <Navegation currentPage="skills" />
    </ContainerPages>
  );
};

export default Skills;
