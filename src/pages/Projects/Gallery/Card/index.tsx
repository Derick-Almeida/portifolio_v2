import { ThemeCard } from "../style";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface IProjectData {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string;
  application: string;
}

interface ICardProps {
  project: IProjectData;
}

const Card = ({ project }: ICardProps) => {
  const { id, image, name, description, application, repository } = project;

  return (
    <ThemeCard bg={image} id={id}>
      {repository !== "" && (
        <div>
          <div className="buttons">
            <a href={application} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
              Link
            </a>
            <a href={repository} target="_blank" rel="noreferrer">
              <FaGithub />
              Github
            </a>
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      )}
    </ThemeCard>
  );
};

export default Card;
