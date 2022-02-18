import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";

export default function Letter(props) {
  const { setActiveLetter } = useContext(VariableContext);

  const letterClick = () => {
    console.log("clicked:", props.letter);
    setActiveLetter(props.letter);
  };

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
