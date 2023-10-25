const Header = ({ languages, setActiveLanguage, activeLanguage }) => {
  const languagesArray = Object.values(languages);
  return (
    <header>
      <select
        value={languages[activeLanguage].language}
        onChange={(e) =>
          // Using first two letters of language from select input
          // to match key in languages.json
          setActiveLanguage(e.target.value.toLowerCase().slice(0, 2))
        }
      >
        {languagesArray.map((lang) => {
          return <option key={lang.language}>{lang.language}</option>;
        })}
      </select>
    </header>
  );
};

export default Header;
