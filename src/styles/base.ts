import styled, { css } from "styled-components";

interface IButtonProps {
  outline?: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: inline-block;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: 1px solid #fe5f1e;

  ${({ outline }) => {
    if (outline) {
      return css`
        color: #fe5f1e;
        background-color: #fff;
      `;
    } else {
      return css`
        color: #fff;
        background-color: #fe5f1e;
      `;
    }
  }}

  &:hover {
    ${({ outline }) => {
      if (outline) {
        return css`
          color: #fff;
          background-color: #fe5f1e;
        `;
      }
    }}

  &:active {
    ${({ outline }) => {
      if (!outline) {
        return css`
          background-color: darken(#fe5f1e, 50%);
          transform: translateY(1px);
        `;
      }
    }}
  }
`;
