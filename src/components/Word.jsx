import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";

export default function Word() {
  const { setActiveLetter } = useContext(VariableContext);

  return (
    <Button
      id={"letter_" + props.letter}
      style={{ margin: "2px" }}
      onClick={letterClick}
    >
      {props.letter}
    </Button>
  );
}
