import styled, { keyframes } from "styled-components";
import themes from "../../../styles/Themes";

const rotate = keyframes`
  0%{
    transform: scale(1) rotate(0deg);
  }
  100%{
    transform: scale(1.4) rotate(90deg);
    
  }
`;

export const ThemeSetting = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  &:hover {
    width: 50px;
    margin-left: -15px;

    > div {
      display: flex;
    }
  }

  > svg {
    color: var(--white);
    /* width: 20px;
    height: 20px; */
    width: 100%;
    height: 2.6vh;

    transition: transform 0.3s;

    &:hover {
      cursor: pointer;

      animation: ${rotate} 0.3s linear forwards;
    }
  }

  > div {
    display: none;
    position: absolute;
    top: -7px;
    /* right: 0px; */
    right: 2vw;
    z-index: 9;

    gap: 8px;
    flex-wrap: wrap;
    width: 115px;

    background: var(--blue-2);
    padding: 10px;
    margin-right: 40px;

    filter: drop-shadow(0px 2px 0px var(--black)) drop-shadow(0px -2px 0px var(--black))
      drop-shadow(0px 3px 2px var(--black));

    border-radius: 5px;
    border-left: 2px solid var(--black);

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 0 10px 20px;
      border-color: transparent transparent transparent var(--blue-2);

      position: absolute;
      right: -20px;
      top: 5px;
    }

    > div {
      width: 25px;
      height: 25px;
      border: 3px solid var(--black);
      border-radius: 5px;

      flex: none;

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    }

    .yellow {
      background: ${themes.themeYellow.themeColor};
    }
    .blue {
      background: ${themes.themeBlue.themeColor};
    }
    .pink {
      background: ${themes.themePink.themeColor};
    }
    .green {
      background: ${themes.themeGreen.themeColor};
    }
    .aqua {
      background: ${themes.themeAqua.themeColor};
    }
    .orange {
      background: ${themes.themeOrange.themeColor};
    }
  }
`;
