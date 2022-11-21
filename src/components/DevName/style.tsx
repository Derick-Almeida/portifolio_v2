import styled from "styled-components";

export const ThemeDiv = styled.div`
  background: ${({ theme }) => theme.themeColor};
  display: inline-block;

  position: absolute;
  right: -11%;
  bottom: -18%;
  pointer-events: none;

  padding: 4% 15% 11% 20%;
  transform: rotate(-20deg);
  transition: background 0.6s;

  > p {
    color: var(--black);
    font-family: var(--shrikhand);
    font-weight: normal;
    font-size: calc(1.5vw + 1.5vh + 1vmin);

    transform: rotate(20deg);
  }

  @media (max-width: 1024px) {
    bottom: -16%;
  }
  @media (max-width: 930px) {
    bottom: -14%;
  }
  @media (max-width: 770px) {
    bottom: -11%;
  }
`;
