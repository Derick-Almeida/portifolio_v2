import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7vh 0 0 15%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5vh;

    padding-top: 12vh;
    width: 80%;

    > p {
      font-family: var(--daysOne);
      font-weight: normal;
      color: var(--white);
      font-size: calc(2vw + 2vh + 1vmin);
      line-height: 8vh;

      span {
        color: ${({ theme }) => theme.themeColor};
        font-family: var(--shrikhand);
        font-weight: normal;

        transition: color 0.4s;
      }
    }

    > span {
      color: var(--grey-1);
      font-size: calc(0.9vw + 0.9vh + 0.5vmin);
      width: 70%;
    }
  }
`;
