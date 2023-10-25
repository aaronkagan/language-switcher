import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import languages from './languages.json';

function App() {
  const [activeLanguage, setActiveLanguage] = useState('en');
  return (
    <div className="App">
      <Header
        languages={languages}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <Main
        languages={languages}
        activeLanguage={activeLanguage}
      />
    </div>
  );
}

export default App;
