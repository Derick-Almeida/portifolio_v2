import { useContext } from "react";
import { ContextTheme } from "../../../contexts/ThemeContext";
import { ThemeEllipse } from "./style";

interface IEllipsProps {
  label: string;
  currentPage: string;
}

const Ellipse = ({ label, currentPage }: IEllipsProps) => {
  const { setTransition } = useContext(ContextTheme);

  const active = label === currentPage ? true : false;

  const switchPage = () => {
    setTransition(true);

    setTimeout(() => {
      if (label === "skills") {
        window.scrollTo(0, window.innerHeight + 1);
      } else if (label === "projects") {
        window.scrollTo(0, window.innerHeight * 2);
      } else if (label === "contacts") {
        window.scrollTo(0, window.innerHeight * 3);
      } else {
        window.scrollTo(0, 0);
      }
    }, 300);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <>
      <ThemeEllipse active={active}>
        <div onClick={switchPage}></div>
        <span>{label}</span>
      </ThemeEllipse>
    </>
  );
};

export default Ellipse;
