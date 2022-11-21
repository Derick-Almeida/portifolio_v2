import styled from "styled-components";

export const ThemeNav = styled.nav`
  position: absolute;
  right: calc(2.6vh + 3.5vw);
  top: 50%;
  transform: translateY(-50%);
  width: calc(1vh + 1vw);

  > ul {
    display: flex;
    flex-direction: column;
    gap: calc(0.5vh + 0.3vw);

    position: relative;
  }
`;
