import styled from "styled-components";

export const CardContainer = styled.div`
  flex: 1;
  min-width: 300px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: rgb(18,18,18);
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90px;
  padding: 5px 10px;
`;

export const Description = styled.div`
  color: rgb(18,18,18);
  font-size: 10px;
  padding: 5px 10px;
  max-height: 115px;
  overflow-y: scroll;
`;

export const ContactDetails = styled.div`
  height: 80px;
  color: black;
  font-size: 16px;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QrCode = styled.img`
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 300px;
  height: 650px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 11px rgba(33,33,33,.2);
  color: white;
  font-size: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Picture = styled.div`
  background: url(${props => props.image});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-width: 350px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Phone = styled.div``;

export const Email = styled.div``;

export const Website = styled.a`
  text-align: center;
  color: black;

  &:visited {
    text-decoration: none;
  }
  
  &:hover {
    color: red;
  }
`;

export const HowToDonateLink = styled.a`
  text-align: center;
  font-size: 14px;
  color: black;
  
  &:visited {
    text-decoration: none;
  }
  
  &:hover {
    color: red;
  }
`;