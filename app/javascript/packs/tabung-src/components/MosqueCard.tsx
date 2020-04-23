import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Mosque} from "../types/Mosque.type";
import {
  Card,
  CardContainer,
  ContactDetails,
  Description, Email,
  HowToDonateLink, Phone,
  Picture,
  QrCode,
  Title, Website
} from "./MosqueCard.styles";
import {stringDefinedAndNotBlank} from "../lib/Util";

type Key = {
  key: number
}

export default function MosqueCard(props: Mosque & Key) {
  let phone = null;
  let email = null;
  let website = null;

  if (stringDefinedAndNotBlank(props.phone.toString())) {
    phone = <Phone>
      <FontAwesomeIcon icon={faPhone} color="#000000" style={{"marginRight":"3px"}} />
      {props.phone}
    </Phone>;
  }

  if (stringDefinedAndNotBlank(props.email)) {
    email = <Email>
      <FontAwesomeIcon icon={faEnvelope} color="#000000" style={{"marginRight":"3px"}} />
      {props.email}
    </Email>;
  }

  if (stringDefinedAndNotBlank(props.website)) {
    website = <Website href={props.website} target="_blank">
      {props.website}
    </Website>;
  }

  return <CardContainer>
    <Card>
      <Picture image={props.image} />
      <Title>{props.name}</Title>
      <ContactDetails>
        {phone}
        {email}
        {website}
      </ContactDetails>
      {/*{<Description>{props.description}</Description>}*/}
      <QrCode src={props.qr_code} width="200px" height="200px" />
      <HowToDonateLink href={"#"}>How do I donate?</HowToDonateLink>
    </Card>
  </CardContainer>;
}
