import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

type Props = {
  mosqueNames: string [];
}
export default function NavBar(props: Props) {
  const height = 100;
  return <Container height={height} >
    <SearchBar mosqueNames={props.mosqueNames} />
  </Container>;
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 1000;
`;
