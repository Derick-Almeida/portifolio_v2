import { backEnd, frontEnd } from "../Data";

import Card from "./Card";
import { ThemeGallery } from "./style";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

interface IGalleryProps {
  title: string;
  contents: string;
  scroll: () => void;
}

const Gallery = ({ title, contents, scroll }: IGalleryProps) => {
  return (
    <>
      {contents === "frontEnd" && (
        <ThemeGallery>
          <h2>{title}</h2>
          <BsArrowRightCircle className="right" onClick={scroll} />

          <div className="conteiner">
            {frontEnd.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </ThemeGallery>
      )}
      {contents === "backEnd" && (
        <ThemeGallery>
          <h2>{title}</h2>
          <BsArrowLeftCircle className="left" onClick={scroll} />

          <div className="conteiner">
            {backEnd.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </ThemeGallery>
      )}
    </>
  );
};

export default Gallery;
