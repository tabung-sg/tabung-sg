import React from "react";

type Props = {
  name: string;
}

export default function Main(props: Props) {
  console.log("Hello from typescript and react");
  return <div>Hello {props.name}!</div>;
}
