import React from "react";
import styled from "styled-components";
// @ts-ignore
import TabungLogoFullColour from "images/misc/Tabung_Logo_FullColour_RGB.png";

type Props = {
  size: number;
}

export default function Logo(props: Props) {
  return <Image size={props.size} src={TabungLogoFullColour} />;
}

const Image = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;