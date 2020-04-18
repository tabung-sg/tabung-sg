import React from "react";
import styled from "styled-components";
// @ts-ignore
import TabungLogoFullColour from "images/misc/logo.png";

type Props = {
  size: number;
  additionalStyles?: string;
}

export default function Logo(props: Props) {
  return <Image size={props.size} additionalStyles={props.additionalStyles} src={TabungLogoFullColour} />;
}

const Image = styled.img`
  max-width: ${props => props.size}px;
  max-height: ${props => props.size}px;
  width: auto;
  height: auto;
  ${props => props.additionalStyles}
`;