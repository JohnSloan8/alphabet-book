import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";
import Letter from "./Letter";

export default function Letters() {
  const { alphabet } = useContext(VariableContext);

  useEffect(() => {
    console.log("alphabet:", alphabet);
  }, [alphabet]);

  return (
    <Container style={{ textAlign: "center" }}>
      {alphabet.map((letter) => {
        return <Letter letter={letter} key={letter} id={"letter_" + letter} />;
      })}
    </Container>
  );
}
