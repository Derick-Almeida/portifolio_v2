import html from "../../../assets/html5.svg";
import css from "../../../assets/css3.svg";
import js from "../../../assets/js.png";
import react from "../../../assets/react.svg";
import redux from "../../../assets/redux.svg";
import styledComponents from "../../../assets/styled_components.png";
import nodejs from "../../../assets/nodejs.svg";
import express from "../../../assets/express.png";
import postgresql from "../../../assets/postgresql.svg";
import ts from "../../../assets/typescript.png";
import typeorm from "../../../assets/typeorm.png";
import jest from "../../../assets/jest.svg";
import vscode from "../../../assets/vscode.svg";
import linux from "../../../assets/linux.svg";
import vercel from "../../../assets/vercel.png";
import git from "../../../assets/git.svg";
import github from "../../../assets/github.png";
import docker from "../../../assets/docker.svg";

const matriz: Array<(number | string)[]> = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, vercel, vscode, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, linux, "others", github, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, express, postgresql, docker, git, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, nodejs, "back", ts, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, css, js, jest, typeorm, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, html, "front", react, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, redux, styledComponents, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const techs = {
  groupA: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Styled Components"],
  groupB: ["Node.js", "Express", "PostgreSQL", "TypeScript", "TypeORM", "Jest"],
  groupC: ["VS Code", "Linux", "Vercel", "Git", "GitHub", "Docker"],
};

export { matriz, techs };
