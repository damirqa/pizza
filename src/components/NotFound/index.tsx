import React from "react";
import { Root, Title, Smile, Description } from "./styles";

const NotFound: React.FC = () => {
  return (
    <Root>
      <Title>
        <Smile>😔</Smile>
        <br />
        Ничего не найдено
      </Title>
      <Description>К сожалению данная страница отсутствует</Description>
    </Root>
  );
};

export default NotFound;
