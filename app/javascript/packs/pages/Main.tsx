import React from "react";
import styled from "styled-components";
import PreLaunch from "./PreLaunch";

type Props = {
  showPreLaunchPage: boolean;
}

export default function Main(props: Props) {
  let display;
  if (props.showPreLaunchPage) {
    display = <PreLaunch />;
  }
  else {
    display = <ActualApplication>SHOWING ACTUAL APPLICATION!</ActualApplication>;
  }

  return display;
}

const ActualApplication = styled.div`
  text-align: center;
  background-color: white;
`;