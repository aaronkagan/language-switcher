import { useState } from "react";
import "./App.css";
import Header from "./header.js";
import languages from "./languages.json";

function App() {
  const languagesArray = Object.values(languages);
  const [activeLanguage, setActiveLanguage] = useState("en");
  return (
    <div className="App">
      <Header
        languages={languagesArray}
        setActiveLanguage={setActiveLanguage}
      />
      <h1>{languages[activeLanguage].title}</h1>
      <form>
        <label for="name">{languages[activeLanguage].name}</label>
        <input id="name" type="text" />
        <label for="email" type="email">
          {languages[activeLanguage].email}
        </label>
        <input id="email" />
        <button type="button">{languages[activeLanguage].submit}</button>
      </form>
    </div>
  );
}

export default App;
