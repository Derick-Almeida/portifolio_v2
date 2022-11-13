import styled from "styled-components";

interface IBackground {
  bg?: string;
}

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;

  > main {
    width: 80%;
    height: 100vh;
    margin: 0 auto;

    background: url(${({ bg }: IBackground) => bg}) no-repeat center;
    background-size: cover;
    box-shadow: 0px 0px 150px #000;

    > .msg {
      position: absolute;
      top: 5%;
      right: 12%;
      text-align: center;

      > a {
        color: var(--white);
        opacity: 0.7;
        font-size: calc(0.8vh + 0.8vw + 0.5vmin);
        font-family: var(--daysOne);
        font-weight: normal;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 900px) {
    > main {
      > .msg {
        position: absolute;
        right: 20%;
        top: 20vh;

        width: 60%;
        height: 60vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        > h1 {
          color: var(--white);
          font-size: calc(4vh + 4vw + 2vmin);
          font-weight: normal;
          font-family: var(--daysOne);
          text-shadow: 2px 2px #ff00ff, -1px -1px #0000ff;
          backdrop-filter: blur(1px);
        }

        > p {
          color: var(--white);
          font-size: calc(2.5vh + 2.5vw + 2vmin);
          font-weight: normal;
          font-family: var(--daysOne);
          text-shadow: 2px 2px #ff00ff, -1px -1px #0000ff;
          backdrop-filter: blur(1px);
        }
        > a {
          backdrop-filter: blur(1px);
        }
      }
    }
  }
  @media (max-width: 650px) {
    > main {
      > .msg {
        width: inherit;
        height: 70vh;
        display: block;
        right: auto;
        top: 0;
        transform: translateY(50%);
      }
    }
  }
`;
