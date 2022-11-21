import styled from "styled-components";
import sorry from "../../assets/sorry.png";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  main {
    width: 100%;
    height: 100vh;

    text-align: center;
    background: repeating-radial-gradient(var(--black), var(--blue-2), transparent 100px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      width: calc(15vh + 15vw + 10vmin);
      height: calc(15vh + 15vw + 10vmin);
      background: url(${sorry}) no-repeat center;
      background-size: contain;
    }

    > p {
      width: 50%;
      color: var(--white);
      font-size: calc(2vh + 2vw + 1vmin);
    }
  }

  @media (max-width: 770px) {
    > main p {
      width: 70%;
    }
  }
  @media (max-width: 425px) {
    > main p {
      width: 80%;
    }
  }
`;
