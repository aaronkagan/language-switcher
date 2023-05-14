import { useState } from "react";
import "./App.css";
import Header from "./header.js";
import Contact from "./Contact.js";
import languages from "./languages.json";

function App() {
  const [activeLanguage, setActiveLanguage] = useState("en");
  return (
    <div className="App">
      <Header
        languages={languages}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <h1>{languages[activeLanguage].title}</h1>
      <Contact languages={languages} activeLanguage={activeLanguage} />
    </div>
  );
}

export default App;
