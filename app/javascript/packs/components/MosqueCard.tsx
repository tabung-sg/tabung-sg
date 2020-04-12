import React from "react";
import styled from "styled-components";
import {Mosque} from "../types/Mosque.type";

type Key = {
  key: number
}

export default function MosqueCard(props: Mosque & Key) {
  return <CardContainer>

  </CardContainer>;
}

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;