import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%{
        transform: scale(1)
    }
    80%,100%{
        transform: scale(0)
    }
`;

export const ThemeLoading = styled.div`
  position: absolute;
  top: 50%;
  > p {
    color: var(--white);
    font-family: var(--daysOne);
    font-weight: 600;
    font-size: calc(1vh + 1vw + 0.6vmin);
    text-shadow: 1px 1px 4px var(--black);

    position: absolute;
    transform: translate(calc(3.4vh + 3.3vh), calc(-1vh + 0vh));
    z-index: 1;
  }

  > div {
    position: relative;
    width: calc(11vh + 11vw);
    height: calc(11vh + 11vw);

    > span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: rotate(calc(18deg * var(--i)));

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;

        width: calc(1vh + 2vw);
        height: calc(0.5vh + 0.5vw);
        border-radius: 30%;

        background: ${({ theme }) => theme.themeColor};
        box-shadow: 0 0 calc(0.5vh + 0.5vw) ${({ theme }) => theme.themeColor},
          0 0 calc(2vh + 2vw) ${({ theme }) => theme.themeColor},
          0 0 calc(3vh + 3vw) ${({ theme }) => theme.themeColor},
          0 0 calc(5vh + 5vw) ${({ theme }) => theme.themeColor},
          0 0 calc(7vh + 7vw) ${({ theme }) => theme.themeColor},
          0 0 calc(9vh + 9vw) ${({ theme }) => theme.themeColor};

        animation: ${animate} 2s linear infinite;
        animation-delay: calc(0.1s * var(--i));
      }
    }
  }
`;
