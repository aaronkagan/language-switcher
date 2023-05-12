const Header = ({ languages, setActiveLanguage }) => {
  return (
    <header>
      <select onChange={(e) => setActiveLanguage(e.target.value.toLowerCase())}>
        {languages.map((lang) => {
          return <option key={lang.language}>{lang.language}</option>;
        })}
      </select>
    </header>
  );
};

export default Header;
