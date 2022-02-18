import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";

export default function BookName() {
  const { setLanguage } = useContext(VariableContext);

  const chooseLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Container>
      <Form>
        <Form.Label>Language</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={chooseLanguage}
        >
          <option>choose your language</option>
          <option value="English">English</option>
          <option value="Français">Français</option>
        </Form.Select>
      </Form>
    </Container>
  );
}
