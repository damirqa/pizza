import styled from "styled-components";
import * as base from "../../styles/base";

export const Root = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 65px;
`;

export const PizzaImage = styled.img`
  width: 260px;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`;

export const Selector = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
`;

export const FirstList = styled(List)`
  &:first-of-type {
    margin-bottom: 6px;
  }
`;

export const Item = styled.li`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &.active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

export const Counter = styled.i`
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
  transition: all 0.15s ease-in-out;
`;

export const ButtonLabel = styled.span`
  transition: all 0.15s ease-in-out;
`;

export const svg = styled.svg`
  transition: all 0.15s ease-in-out;
`;

export const path = styled.path`
  transition: all 0.15s ease-in-out;
`;

export const ButtonAdd = styled(base.Button)`
  font-weight: 600;
  font-size: 16px;
  ${({ outline }) => {
    if (outline) {
      return `
        ${ButtonLabel} {
          color: #fe5f1e;
        }
        
        ${path} {
          fill: #fe5f1e;
        }
                
        &:hover {
          ${ButtonLabel} {
            color: #fff;
          }
            
          ${path} {
            fill: #fff;
          }
          
          ${Counter} {
            background-color: #fff;
            color: #fe5f1e;
          }
        }
      `;
    }
  }}
`;
