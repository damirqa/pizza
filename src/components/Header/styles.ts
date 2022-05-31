import styled from "styled-components";
import * as base from "../../styles/base";

export const Root = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
  margin-right: 15px;
`;

export const Title = styled.h1`
  color: #181818;
  font-size: 24px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;

  @media (max-width: 574px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  color: #7b7b7b;

  @media (max-width: 574px) {
    display: none;
  }
`;

export const ButtonCart = styled(base.Button)`
  display: flex;
  align-items: center;
  line-height: 23px;
  padding: 12px 25px;

  @media (max-width: 648px) {
    justify-content: center;
    padding: 10px 20px;
  }
`;

export const svg = styled.svg`
  margin-right: 8px;
  margin-bottom: 1px;
`;

export const Counter = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #fff;

  @media (max-width: 648px) {
    display: none;
  }
`;

export const Price = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`;

export const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;

  @media (max-width: 648px) {
    display: none;
  }
`;
