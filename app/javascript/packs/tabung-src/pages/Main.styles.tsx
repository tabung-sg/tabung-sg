import styled from "styled-components";
import {macaroniAndCheese, pottersClay} from "../components/Colors";

export const Info = styled.div`
  border: 1px solid black;
  width: 80%;
  font-size: 15px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
`;

export const ApplicationContainer = styled.div`
  background: linear-gradient(90deg, ${pottersClay}, ${macaroniAndCheese}, ${macaroniAndCheese}, ${pottersClay});
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media(min-width: 1000px) {
    max-width: 1000px;
  }

  @media(max-width: 400px) {
    max-width: 350px;
  }
`;
