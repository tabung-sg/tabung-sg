import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import {genoa, tePapaGreen} from "./Colors";

// @ts-ignore
import bgPhoto from "images/misc/stockphoto-prayer.jpg";

export default function Introduction() {
  return <Container>
    <Info>
      <Logo size={270} additionalStyles="float: left;margin-right: 10px;" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit mollis, lobortis purus vitae, dictum mauris. Mauris tincidunt, massa eu pharetra aliquet, sem ex tempor neque, vitae luctus leo magna ut diam.
    </Info>
    <Info>
      In tincidunt mi ut leo elementum, eu rutrum dolor efficitur. Nam id viverra quam. Mauris commodo ut enim et lacinia. Etiam fermentum, erat ut pulvinar vestibulum, turpis dolor mattis odio, eu convallis ante lacus nec felis. Ut ac scelerisque sapien. Pellentesque vitae suscipit justo. Ut a rutrum metus. Vestibulum interdum hendrerit lorem, at malesuada leo tempor id.
    </Info>
    <Buttons>
      <ButtonLink>How To Donate</ButtonLink>
      <ButtonLink>About Tabung.SG</ButtonLink>
    </Buttons>
  </Container>
}

export const Container = styled.div`
  height: 70vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${bgPhoto}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Info = styled.div`
  width: 70%;
  font-size: 22px;
  margin: 0 auto;
  color: white;
  margin: 10px 0px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonLink = styled.div`
  display: inline-block;
  background-color: ${tePapaGreen};
  color: rgb(240, 240, 240);
  padding: 8px 48px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  transition: background-color 300ms;
  $border: 1px solid rgb(25, 25, 25);

  &:hover {
    background-color: ${genoa};
  }
`;