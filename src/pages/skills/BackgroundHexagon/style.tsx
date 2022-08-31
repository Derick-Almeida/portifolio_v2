import styled, { css } from "styled-components";
import hand from "../../../assets/hand.svg";

interface IText {
  form?: string;
  bg?: string;
}

export const Container = styled.div`
  width: 102.6%;
  height: 105vh;
  overflow: hidden;
  margin-top: -1.5%;

  .row {
    display: flex;
    gap: 0.2%;
    overflow: hidden;

    margin-left: -2.6%;
    margin-top: -1.2%;
    width: 100%;

    &:nth-child(2n) {
      margin-left: 0;
      margin-top: -1.3%;
    }
  }
`;

export const ThemeHexagon = styled.div`
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  height: 10vh;
  width: 6%;
  position: relative;

  flex: 1;
  transition: background 0.6s;

  ${({ form }: IText) => {
    switch (form) {
      case "full":
        return css`
          background: var(--grey-2) no-repeat center;
          background-image: url(${({ bg }: IText) => bg});
          background-size: 75%;
        `;
      case "hover":
        return css`
          cursor: pointer;
          background: ${({ theme }) => theme.themeColor} no-repeat center;
          background-image: url(${hand});
          background-size: 75%;
        `;
      case "stroke":
        return css`
          background: ${({ theme }) => theme.themeColor};

          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 90%;
            height: 90%;
            background: var(--blue-3);

            -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
        `;

      default:
        return css`
          background: var(--blue-3);

          &::before {
            content: "";
            position: absolute;
            width: 50%;
            height: 100%;
            top: 0;
            right: 0;
            background: var(--blue-3);
            filter: brightness(1.3);
          }
        `;
    }
  }}
`;
