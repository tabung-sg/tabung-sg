import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ApiClient from "../lib/ApiClient";
import {logError, logInfo} from "../lib/Logger";
import MosqueCard from "../components/MosqueCard";
import {Mosque} from "../types/Mosque.type";
import NavBar from "../components/Navbar";

// @ts-ignore
import TabungBackground from "images/misc/Tabung_Background_RGB.png";

export default function Main() {
  const [mosques, setMosques] = useState<Mosque []>([]);

  useEffect(() => {
    ApiClient.get("/mosques.json")
        .then(resp => {
          logInfo("Mosques", resp.data.mosques);
          setMosques(resp.data.mosques);
        })
        .catch(error => {
          logError(error, "Error fetching mosques.");
        })
  }, []);

  const cards = mosques.map((mosque: Mosque, index: number) => (
      <MosqueCard key={index}
                  name={mosque.name}
                  full_address={mosque.full_address}
                  description={mosque.description}
                  email={mosque.email}
                  phone={mosque.phone}
                  website={mosque.website}
      />
  ));

  const mosqueNames = mosques.map((mosque) => mosque.name);

  return <ApplicationContainer>
    <NavBar mosqueNames={mosqueNames} />
    <CardsContainer>
      {cards}
    </CardsContainer>
  </ApplicationContainer>;
}

const ApplicationContainer = styled.div`
  background: url(${TabungBackground}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media(min-width: 900px) {
    max-width: 900px;
  }

  @media(max-width: 450px) {
    max-width: 390px;
  }
`;