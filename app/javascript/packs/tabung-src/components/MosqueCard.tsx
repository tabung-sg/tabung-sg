import React from "react";
import {Mosque} from "../types/Mosque.type";
import {
  Card,
  CardContainer,
  Description,
  Picture,
  QrCode,
  Title
} from "./MosqueCard.styles";

type Key = {
  key: number
}

export default function MosqueCard(props: Mosque & Key) {
  return <CardContainer>
    <Card>
      <Picture image={props.image} />
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <QrCode src={props.qr_code} width="200px" height="200px" />
      <a href={"#"}>How do I donate?</a>
    </Card>
  </CardContainer>;
}
