import React from "react";
import styled from "styled-components";
import {Mosque} from "../types/Mosque.type";
import {genoa, pottersClay} from "./Colors";

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

const CardContainer = styled.div`
  flex: 1;
  min-width: 300px;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: rgb(18,18,18);
  font-size: 20px;
`;

const Description = styled.div`
  color: rgb(18,18,18);
  font-size: 10px;
`;

const QrCode = styled.img`
  margin: 0 auto;
`;

const Card = styled.div`
  width: 300px;
  height: 650px;
  margin: 10px auto;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0 0 11px rgba(33,33,33,.2);
  color: white;
  font-size: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Picture = styled.div`
  background: url(${props => props.image});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-width: 350px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
