import styled from "styled-components";
import exp from "constants";

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: 1300px) {
    justify-content: left;
    margin-top: 15px;
  }
`;

export const svg = styled.svg`
  margin-right: 8px;
`;

export const Label = styled.b`
  margin-right: 8px;
`;

export const Value = styled.span`
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;
`;

export const Popup = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
`;

export const List = styled.ul`
  overflow: hidden;
`;

export const Item = styled.li`
  padding: 12px 20px;
  cursor: pointer;

  &:hover,
  :active {
    background: rgba(254, 95, 30, 0.05);
  }
  &.active {
    font-weight: bold;
    color: #fe5f1e;
  }
`;
