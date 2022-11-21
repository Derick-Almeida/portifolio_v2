import { useEffect, useState } from "react";

import Card from "./Card";
import { ThemeGallery } from "./style";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Loading from "./Loading";
import { connect, getProjects } from "./connection";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (token === "") {
      connect(setToken);
    } else {
      setTimeout(() => {
        console.log("--------------------------");
        getProjects(setFrontEnd, setBackEnd, setLoading, token);
      }, 2500);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {contents === "frontEnd" && (
        <ThemeGallery>
          <h2>{title}</h2>
          <BsArrowRightCircle className="right" onClick={scroll} />

          <div className="conteiner">
            {loading ? (
              <Loading />
            ) : (
              frontEnd?.map((project) => <Card key={project.id} project={project} />)
            )}
          </div>
        </ThemeGallery>
      )}
      {contents === "backEnd" && (
        <ThemeGallery>
          <h2>{title}</h2>
          <BsArrowLeftCircle className="left" onClick={scroll} />

          <div className="conteiner">
            {loading ? (
              <Loading />
            ) : (
              backEnd?.map((project) => <Card key={project.id} project={project} />)
            )}
          </div>
        </ThemeGallery>
      )}
    </>
  );
};

export default Gallery;
