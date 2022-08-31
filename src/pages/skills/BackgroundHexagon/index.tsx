import matriz from "../Data";
import { Container, ThemeHexagon } from "./style";

const BackgroundHexagon = () => {
  return (
    <>
      <Container>
        {matriz.map((row, index) => (
          <div className="row" key={index}>
            {row.map((cod, index) =>
              cod === 0 ? (
                <ThemeHexagon key={index} />
              ) : cod === 1 ? (
                <ThemeHexagon key={index} form="stroke" />
              ) : typeof cod === "string" && cod.length < 10 ? (
                <ThemeHexagon key={index} form="hover" />
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
