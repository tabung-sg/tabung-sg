import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 50%; 
`;

export const Link = styled.a`
  color: black;

  &:link {
    text-decoration: none;
  }
  
  &:visited {
    text-decoration: none;
  }
  
  &:hover {
    color: red;
  }
`;

export const Links = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const Container = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 1000;
  margin: 0 50px;
`;
