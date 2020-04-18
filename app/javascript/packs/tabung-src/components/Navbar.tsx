import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import {Container, Link, Links, SearchBarContainer} from "./Navbar.styles";

type Props = {
  mosqueNames: string [];
}

export default function NavBar(props: Props) {
  const height = 100;

  return <Container height={height} >
    <Links>
      <Link href="/">HOME</Link>
      <Link href="/">HOW TO DONATE</Link>
      <Link href="/">ABOUT US</Link>
    </Links>
    <Spacer />
    <SearchBarContainer>
      <SearchBar mosqueNames={props.mosqueNames}/>
    </SearchBarContainer>
  </Container>;
}

const Spacer = styled.div`
  width: 20%;
`;