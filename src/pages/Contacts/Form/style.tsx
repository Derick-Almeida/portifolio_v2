import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  color: var(--white);
  font-size: calc(1vw + 1vh + 0.5vmin);
  letter-spacing: 5px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;

    margin-top: 5vh;

    > input {
      outline: none;
      width: 90%;
      border-radius: 0.8vw;

      font-size: calc(0.7vw + 0.7vh + 0.5vmin);
      font-weight: 400;
      border: 2px solid var(--blue-3);
      padding: 1.3vh 0.85vw;

      background: var(--white);
      filter: brightness(0.6);
      transition: color 0.6s, background 0.6s, box-shadow 0.4s, border 0.6s;

      &::placeholder {
        color: var(--blue-3);
        opacity: 0.7;
      }

      &:focus {
        color: var(--black);
        background: var(--white);
        border: 2px solid ${({ theme }) => theme.themeColor};
        filter: brightness(1);
        box-shadow: 0 0 25px ${({ theme }) => theme.themeColor};
      }
    }

    > textarea {
      resize: none;
      outline: none;
      width: 90%;
      border-radius: 0.8vw;

      font-size: calc(0.7vw + 0.7vh + 0.5vmin);
      font-weight: 400;
      border: 2px solid var(--blue-3);
      padding: 1vh 0.85vw;

      background: var(--white);
      filter: brightness(0.6);
      transition: color 0.6s, background 0.6s, box-shadow 0.4s, border 0.6s;

      &::placeholder {
        color: var(--blue-3);
      }

      &:focus {
        color: var(--black);
        background: var(--white);
        border: 2px solid ${({ theme }) => theme.themeColor};
        filter: brightness(1);
        box-shadow: 0 0 25px ${({ theme }) => theme.themeColor};
      }

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: var(--grey-2);
      }
    }

    > label {
      color: var(--white);
      font-size: calc(0.7vw + 0.7vh + 0.6vmin);
      letter-spacing: 0;
      position: relative;
      top: 1vh;
      left: 0.5vw;
    }

    > button {
      width: fit-content;
      padding: 1.3vh 4vw;
    }
  }
`;
