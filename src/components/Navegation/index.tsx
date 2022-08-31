import { ThemeNav } from "./style";

import Ellipse from "./Ellipse";
import Setting from "./Setting";

interface INavegationProps {
  currentPage: string;
}

const Navegation = ({ currentPage }: INavegationProps) => {
  return (
    <ThemeNav>
      <ul>
        <Setting />
        <Ellipse label="home" currentPage={currentPage} />
        <Ellipse label="skills" currentPage={currentPage} />
        <Ellipse label="projects" currentPage={currentPage} />
        <Ellipse label="contacts" currentPage={currentPage} />
      </ul>
    </ThemeNav>
  );
};

export default Navegation;
