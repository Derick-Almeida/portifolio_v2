import styled from "styled-components";

interface IActiveEllipse {
  active: boolean;
}

export const ThemeEllipse = styled.li`
  display: flex;
  justify-content: flex-end;

  > div {
    border: calc(0.1vh + 0.1vw) solid var(--white);
    border-radius: 100%;
    background: ${({ active }: IActiveEllipse) =>
      !active ? "transparent" : ({ theme }) => theme.themeColor};

    position: relative;

    width: calc(1vh + 1vw);
    height: calc(1vh + 1vw);
  }

  &:hover {
    > div {
      background: ${({ theme }) => theme.themeColor};
      cursor: pointer;
      transform: scale(1.2);
      transition: color 0.4s, transform 0.3s;
    }

    > span {
      display: block;
    }
  }

  > span {
    color: ${({ theme }) => theme.themeColor};
    position: absolute;
    right: 40px;
    margin-top: -2px;
    display: none;

    background: var(--blue-2);
    padding: 3px 15px;
    border-radius: 5px;

    text-transform: uppercase;
    font-weight: 400;
    font-size: calc(0.8vw + 0.8vh + 0.5vmin);

    box-shadow: 0 4px 4px var(--shadow);

    &::before {
      content: "";
      border-style: solid;
      border-width: 2vh 0 1.9vh 2vh;
      border-color: transparent transparent transparent var(--blue-2);

      position: absolute;
      right: -13px;
      top: 0;
    }
  }
`;
