import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";

export default function BookName() {
  const { setBookName, bookName, setDisplay, display } = useContext(
    VariableContext
  );

  const createBookName = (e) => {
    e.preventDefault();
    if (bookName !== "") {
      setDisplay({ ...display, letters: true });
    }
  };

  return (
    <Container>
      <Form onSubmit={createBookName}>
        <Form.Group className="mb-3" controlId="formBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            placeholder="Enter book name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
}
