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

export const ButtonCircle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border-width: 2px;
`;

export const ButtonAdd = styled(Button)`
  svg {
    margin-right: 2px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
  }

  &:hover {
    i {
      background-color: #fff;
      color: #fe5f1e;
    }
  }

  i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }
`;
