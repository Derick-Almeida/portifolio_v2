import { useContext } from "react";

import { ThemeSetting } from "./style";
import { MdSettings } from "react-icons/md";

import { ContextTheme } from "../../../contexts/ThemeContext";

const Setting = () => {
  const { selectTheme } = useContext(ContextTheme);

  return (
    <ThemeSetting>
      <div>
        <div className="yellow" onClick={() => selectTheme("yellow")}></div>
        <div className="blue" onClick={() => selectTheme("blue")}></div>
        <div className="pink" onClick={() => selectTheme("pink")}></div>
        <div className="green" onClick={() => selectTheme("green")}></div>
        <div className="aqua" onClick={() => selectTheme("aqua")}></div>
        <div className="orange" onClick={() => selectTheme("orange")}></div>
      </div>
      <MdSettings />
    </ThemeSetting>
  );
};

export default Setting;
