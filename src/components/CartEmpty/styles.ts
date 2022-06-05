import styled from "styled-components";
import { Button } from "../../styles/base";

export const Root = styled.div`
  margin: 0 auto;
  width: 560px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
`;

export const EmptyCartImage = styled.img`
  display: block;
  width: 300px;
  margin: 45px auto 60px;
`;

export const ButtonBack = styled(Button)`
  padding: 12px 0 14px;
  width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  background-color: #232323;
  border-color: #232323;
  color: #fff;

  &:hover {
    background-color: #3d3d3d;
  }
`;
