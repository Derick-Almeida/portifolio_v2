import styled, { css } from "styled-components";

interface IButtonProps {
  disabled?: boolean;
}

export const ThemeButton = styled.button`
  font-family: var(--inter);
  font-weight: 700;
  font-size: calc(0.8vw + 0.8vh + 0.6vmin);
  color: var(--blue-3);

  border: none;
  border-radius: 0.8vw;

  padding: 1.9vh 0.85vw;
  transition: background 0.6s, color 0.8s;

  ${({ disabled }: IButtonProps) => {
    return disabled
      ? css`
          background: ${({ theme }) => theme.themeColor};
          filter: brightness(0.6);
          cursor: not-allowed;
        `
      : css`
          background: ${({ theme }) => theme.themeColor};

          &:hover {
            background: var(--blue-2);
            color: ${({ theme }) => theme.themeColor};
          }
        `;
  }}
`;
