import { useEffect, useState } from "react";

import Card from "./Card";
import { ThemeGallery } from "./style";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import connection from "./connection";

interface IGalleryProps {
  title: string;
  contents: string;
  scroll: () => void;
}

interface IProjectData {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string;
  application: string;
}

const Gallery = ({ title, contents, scroll }: IGalleryProps) => {
  const [frontEnd, setFrontEnd] = useState<IProjectData[]>([]);
  const [backEnd, setBackEnd] = useState<IProjectData[]>([]);

  useEffect(() => {
    connection(setFrontEnd, setBackEnd);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {contents === "frontEnd" && (
        <ThemeGallery>
          <h2>{title}</h2>
          <BsArrowRightCircle className="right" onClick={scroll} />

          <div className="conteiner">
            {frontEnd?.map((project) => (
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
            {backEnd?.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </ThemeGallery>
      )}
    </>
  );
};

export default Gallery;
