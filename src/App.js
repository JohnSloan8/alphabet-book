import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import BookName from "./components/BookName";
import Language from "./components/Language";
import Letters from "./components/Letters";
import CreateContent from "./components/CreateContent";
import "bootstrap/dist/css/bootstrap.min.css";
import alphabets from "./alphabets.json";
export const VariableContext = React.createContext();

export default function App() {
  const [bookName, setBookName] = useState("John's book");
  const [language, setLanguage] = useState("English");
  const [alphabet, setAlphabet] = useState(alphabets["English"]);
  const [activeLetter, setActiveLetter] = useState("");
  const [display, setDisplay] = useState({
    language: true,
    bookname: true,
    letters: true,
    createcontent: true
  });

  useEffect(() => {
    if (language !== "") {
      setAlphabet(alphabets[language]);
      setDisplay({ ...display, bookname: true });
    } else {
      setAlphabet([]);
    }
  }, [language]);

  useEffect(() => {
    if (activeLetter !== "") {
      setDisplay({ ...display, createcontent: true });
    }
  }, [activeLetter]);

  return (
    <BrowserRouter>
      <VariableContext.Provider
        value={{
          bookName,
          setBookName,
          language,
          setLanguage,
          alphabet,
          display,
          setDisplay,
          activeLetter,
          setActiveLetter
        }}
      >
        <div className="App">
          <h1 style={{ textAlign: "center" }}>Alphabet Book Creator New</h1>
          {display.language ? <Language /> : null}
          {display.bookname ? <BookName /> : null}
          {display.letters ? <Letters /> : null}
          {display.createcontent ? <CreateContent /> : null}
        </div>
      </VariableContext.Provider>
    </BrowserRouter>
  );
}
