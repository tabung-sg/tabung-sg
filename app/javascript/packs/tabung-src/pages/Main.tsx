import React, {useEffect, useState} from "react";
import ApiClient from "../lib/ApiClient";
import {logError, logInfo} from "../lib/Logger";
import MosqueCard from "../components/MosqueCard";
import {Mosque} from "../types/Mosque.type";
import NavBar from "../components/Navbar";
import {ApplicationContainer, CardsContainer} from "./Main.styles";
import Introduction from "../components/Introduction";

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
                  image={mosque.image}
                  qr_code={mosque.qr_code}
      />
  ));

  const mosqueNames = mosques.map((mosque) => mosque.name);

  return <ApplicationContainer>
    <NavBar mosqueNames={mosqueNames} />
    <Introduction />
    <CardsContainer>
      {cards}
    </CardsContainer>
  </ApplicationContainer>;
}
