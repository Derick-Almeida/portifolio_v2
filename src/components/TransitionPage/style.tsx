import styled, { keyframes } from "styled-components";

const transition = keyframes`
  0%{
  transform: rotate(-50deg) translateY(-150%);
  }
  100%{
  transform: rotate(-50deg) translateY(50%);
  }
`;

export const ThemeContainer = styled.div`
  background: ${({ theme }) => theme.themeColor};
  width: 200%;
  height: 200vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transform: rotate(-50deg) translateY(-150%);
  animation: ${transition} 0.6s linear;
  transition: 0.5s;
`;
