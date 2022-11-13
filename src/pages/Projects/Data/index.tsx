import nukenzie from "./img/nukenzie_homepage-desktop.png";
import emBreve from "./img/em_breve.png";

interface IProjectData {
  id: string;
  name: string;
  image: string;
  description: string;
  repository: string;
  application: string;
}

const frontEnd: IProjectData[] = [
  {
    id: "ad2746a2-863f-4473-8209-82a2f069a646",
    image: nukenzie,
    name: "Nukenzie",
    description:
      "Nu Kenzie é uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
    repository: "https://github.com/Derick-Almeida/nukenzie",
    application: "https://nukenzie-mu.vercel.app/",
  },
  {
    id: "6067b0b2-40cc-4ff2-9a2b-8d4c494315da",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
  {
    id: "dd2db6f7-384c-40d0-bc07-687f26332902",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
  {
    id: "e8613d61-a06c-4e98-8ef1-b1f840c85a9e",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
];

const backEnd: IProjectData[] = [
  {
    id: "448f3911-c2de-4bfa-aa67-311d2d97d901",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
  {
    id: "0a1c9e1a-983a-4ccd-b491-03830882e778",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
  {
    id: "a719a53b-e378-45a9-9fda-7a468d1a5aea",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
  {
    id: "d6942a76-366f-4b35-b62f-8bfc486782cc",
    image: emBreve,
    name: "",
    description: "",
    repository: "",
    application: "",
  },
];

export { frontEnd, backEnd };
