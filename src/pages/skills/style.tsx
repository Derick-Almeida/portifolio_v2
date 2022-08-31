import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;

  .cursor {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 15%;
    height: 25vh;
    border-radius: 100%;
    background: ${({ theme }) => theme.themeColor};
    filter: blur(20px);
    z-index: -1;

    transition: background 0.6s;
  }
`;
