import { ThemeTitle } from "./style";

export interface IText {
  title: string;
  fontSize: string;
}

const TitilePage = ({ fontSize, title }: IText) => {
  return <ThemeTitle fontSize={fontSize}>{title}</ThemeTitle>;
};

export default TitilePage;
