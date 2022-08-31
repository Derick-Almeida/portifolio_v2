import styled from "styled-components";

export const Container = styled.div`
  color: var(--white);
  font-size: calc(1vw + 1vh + 0.5vmin);
  width: 50%;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > ul {
    display: inline-flex;
    flex-direction: column;
    gap: 1.5vh;

    margin-top: 30px;

    li a {
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 0.8vw;

      font-size: calc(1vw + 1vh + 0.5vmin);
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
