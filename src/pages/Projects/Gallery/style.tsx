import styled from "styled-components";

interface ICardProps {
  bg: string;
}

export const ThemeGallery = styled.div`
  min-width: 100%;
  position: relative;

  > h2 {
    color: var(--white);
    text-decoration: underline;
    text-transform: capitalize;
    font-family: var(--daysOne);
    font-weight: normal;

    text-align: center;
    font-size: calc(1.5vw + 1.5vh + 1vmin);
  }

  .conteiner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;

    height: 100%;
    width: 100%;
  }

  > svg {
    color: var(--white);
    font-size: calc(1.5vw + 1.5vh + 1vmin);

    cursor: pointer;
    position: absolute;
    top: 2vh;
  }

  .left {
    left: 5vw;
  }

  .right {
    right: 5vw;
  }
`;

export const ThemeCard = styled.div`
  width: 40%;
  height: 28vh;

  border-radius: calc(0.5vw + 0.5vh + 0.5vmin);
  background: url(${(prop: ICardProps) => prop.bg}) no-repeat center
    ${({ theme }) => theme.titlePage};
  background-size: 100%;

  overflow: hidden;
  transition: background 0.6s, box-shadow 0.8s;

  &:hover {
    background-size: 140%;
    box-shadow: 0 0 25px ${({ theme }) => theme.themeColor};

    > div {
      transform: scaleY(1);
    }
  }

  > div {
    height: 100%;
    backdrop-filter: blur(2px) brightness(0.8);
    background: var(--shadow);

    transform: scaleY(0);
    transition: transform 0.4s;

    > .buttons {
      width: 100%;
      height: 20%;

      a {
        width: 50%;
        height: 100%;
        background: ${({ theme }) => theme.themeColor};

        text-align: center;
        border: 0.1vw solid var(--blue-3);
        position: relative;
        z-index: 1;

        display: inline-flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.8vw;

        font-size: calc(0.8vw + 0.8vh + 0.6vmin);
        color: var(--blue-3);

        &::before {
          content: "";
          height: 100%;
          width: 100%;

          position: absolute;
          z-index: -1;
          right: -1px;
          top: -1px;

          background: ${({ theme }) => theme.themeColor};
          border: 0.1vw solid transparent;
          filter: brightness(0.6);

          transition: transform 0.5s;
          transform-origin: 100% 0;
          transform: scaleX(0);
        }

        &:hover::before {
          transform: scaleX(1);
        }
      }
    }

    h3 {
      color: var(--white);
      text-align: center;

      font-size: calc(0.8vw + 0.8vh + 0.6vmin);
      margin: 3% auto;
      text-decoration: underline;
    }

    p {
      color: var(--white);
      width: 80%;
      margin: 0 auto;

      font-size: calc(0.6vw + 0.6vh + 0.5vmin);
    }
  }
`;
