import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Dropdown from "./DropDown";

type Props = {
  mosqueNames: string [];
}

export default function SearchBar(props: Props) {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e) => {
    setQuery(e.value);
  };

  return <Container>
    <Dropdown placeholder="Find a mosque!" value={query} options={props.mosqueNames} onChange={handleChange}/>
  </Container>;
}

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
`;
