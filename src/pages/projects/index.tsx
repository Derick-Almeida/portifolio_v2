import Navegation from "../../components/Navegation";
import TitilePage from "../../components/TitlePage";

import { ContainerPages } from "../../styles/GlobalStyle";

const Projects = () => {
  return (
    <ContainerPages>
      <TitilePage title="projects" fontSize="calc(3vw + 3vh + 4vmin)" />
      <Navegation currentPage="projects" />
    </ContainerPages>
  );
};

export default Projects;
