import styled from "styled-components";

export interface IText {
  fontSize: string;
}

export const ThemeTitle = styled.h1`
  color: ${({ theme }) => theme.titlePage};
  font-size: ${({ fontSize }: IText) => fontSize};
  font-family: var(--monoton);
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: calc(0.7vh + 0.7vw);

  display: inline-block;
  line-height: 0;

  position: absolute;
  top: 50%;
  left: calc(-2vh + -11vw);
  z-index: 9;

  transform: rotate(-90deg);
  transition: color 0.4s;

  pointer-events: none;

  /* 
  @media (max-width: 770px) {
    font-size: calc(4.5vw + 4.5vh + 4vmin);
  } */
`;
