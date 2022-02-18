import { useEffect, useState, useContext } from "react";
import { VariableContext } from "../App";
import { Container, Form, Button } from "react-bootstrap";

export default function CreateContent() {
  const { setBookName, activeLetter } = useContext(VariableContext);

  const saveLetterContent = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={saveLetterContent}>
        <Form.Group className="mb-3" controlId="Word">
          <Form.Label>Word</Form.Label>
          <Form.Control
            placeholder={"Enter a word beginning with " + activeLetter}
            onChange={(e) => setWord(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Sentence">
          <Form.Label>Sentence</Form.Label>
          <Form.Control
            placeholder="Create a sentence with this word"
            onChange={(e) => setSentence(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ImageUpload">
          <Form.Label>Choose Image</Form.Label>
          <Form.Control type="file" placeholder="Select Image" />
        </Form.Group>
        <Button variant="success" type="submit">
          Save Letter Content
        </Button>
      </Form>
    </Container>
  );
}
