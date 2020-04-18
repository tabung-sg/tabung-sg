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
      <Link href="/">Home</Link>
      <Link href="/">Who?</Link>
      <Link href="/">What?</Link>
      <Link href="/">Why?</Link>
      <Link href="/">More</Link>
    </Links>
    <SearchBarContainer>
      <SearchBar mosqueNames={props.mosqueNames}/>
    </SearchBarContainer>
  </Container>;
}
