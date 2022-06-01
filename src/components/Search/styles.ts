import styled from "styled-components";

export const Root = styled.div`
  position: relative;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Input = styled.input`
  padding: 14px 20px 14px 30px;
  margin-right: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-size: 16px;
  width: 200px;
  transition: all 0.15s ease-in-out;

  &:focus {
    width: 300px;
  }

  @media (max-width: 1020px) {
    &:focus {
      width: 200px;
    }
  }

  @media (max-width: 784px) {
    padding: 10px 20px 10px 30px;
  }

  @media (max-width: 550px) {
    width: 110px;
    margin-right: 15px;
    &:focus {
      width: 110px;
    }
  }
`;

export const svg = styled.svg`
  width: 20px;
  height: 20px;
  position: relative;
  opacity: 0.5;
  left: 28px;
  top: 4px;
`;
