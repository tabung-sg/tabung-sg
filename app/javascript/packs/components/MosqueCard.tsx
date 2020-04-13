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
  flex: 0 0 350px;
  box-sizing: border-box;
  margin: 10px auto;
  border: 1px solid black;
  border-radius: 10px;
  height: 200px;
`;