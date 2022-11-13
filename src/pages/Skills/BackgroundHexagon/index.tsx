import { useRef, useState } from "react";
import { matriz, techs } from "../data";
import SkillList from "./SkillList";
import { Container, Content, ThemeHexagon } from "./style";

const BackgroundHexagon = () => {
  const [showTechs, setShowTechs] = useState("");

  const hoverHand: any = useRef();

  const mouseEvent = (index: number) => {
    if (index === 8) {
      setShowTechs("groupA");
    } else if (index === 10) {
      setShowTechs("groupB");
    } else {
      setShowTechs("groupC");
    }
  };

  return (
    <>
      <Content>
        {showTechs === "groupA" && <SkillList techList={techs.groupA} />}
        {showTechs === "groupB" && <SkillList techList={techs.groupB} />}
        {showTechs === "groupC" && <SkillList techList={techs.groupC} />}
      </Content>

      <Container>
        {matriz.map((row, index) => (
          <div className="row" key={index}>
            {row.map((cod, index) =>
              cod === 0 ? (
                <ThemeHexagon key={index} />
              ) : cod === 1 ? (
                <ThemeHexagon key={index} form="stroke" />
              ) : typeof cod === "string" && cod.length < 10 ? (
                <ThemeHexagon
                  key={index}
                  form="hover"
                  ref={hoverHand}
                  onMouseOver={() => mouseEvent(index)}
                  onMouseLeave={() => setShowTechs("")}
                />
              ) : (
                <ThemeHexagon key={index} form="full" bg={typeof cod === "string" ? cod : ""} />
              )
            )}
          </div>
        ))}
      </Container>
    </>
  );
};

export default BackgroundHexagon;
