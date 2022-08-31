import styled from "styled-components";

export const ThemeNav = styled.nav`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5%;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1vh;

    position: relative;
  }
`;
