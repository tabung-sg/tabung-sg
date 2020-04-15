import React, {useEffect, useState} from "react";
import ApiClient from "../lib/ApiClient";
import {logError, logInfo} from "../lib/Logger";
import MosqueCard from "../components/MosqueCard";
import {Mosque} from "../types/Mosque.type";
import NavBar from "../components/Navbar";
import {ApplicationContainer, CardsContainer, Info} from "./Main.styles";

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
    <Info>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit mollis, lobortis purus vitae, dictum mauris. Mauris tincidunt, massa eu pharetra aliquet, sem ex tempor neque, vitae luctus leo magna ut diam. In tincidunt mi ut leo elementum, eu rutrum dolor efficitur. Nam id viverra quam. Mauris commodo ut enim et lacinia. Etiam fermentum, erat ut pulvinar vestibulum, turpis dolor mattis odio, eu convallis ante lacus nec felis. Ut ac scelerisque sapien. Pellentesque vitae suscipit justo. Ut a rutrum metus. Vestibulum interdum hendrerit lorem, at malesuada leo tempor id.
    </Info>
    <CardsContainer>
      {cards}
    </CardsContainer>
  </ApplicationContainer>;
}
