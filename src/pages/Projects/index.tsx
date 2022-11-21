import { useRef } from "react";
import Navegation from "../../components/Navegation";
import TitilePage from "../../components/TitlePage";

import { ContainerPages } from "../../styles/GlobalStyle";
import Gallery from "./Gallery";
import { Container } from "./style";

const Projects = () => {
  const container: any = useRef();

  const scrollRight = () => {
    const width = container.current.offsetWidth;
    container.current.scrollLeft += width;
  };

  const scrollLeft = () => {
    const width = container.current.offsetWidth;
    container.current.scrollLeft -= width;
  };

  return (
    <ContainerPages className="projects">
      <TitilePage title="projects" fontSize="calc(3vw + 3vh + 4vmin)" />
      <Container ref={container}>
        <Gallery title="front-end" contents="frontEnd" scroll={scrollRight} />
        <Gallery title="back-end" contents="backEnd" scroll={scrollLeft} />
      </Container>
      <Navegation currentPage="projects" />
    </ContainerPages>
  );
};

export default Projects;
