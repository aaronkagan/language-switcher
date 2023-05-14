const Header = ({ languages, setActiveLanguage, activeLanguage }) => {
  const languagesArray = Object.values(languages);
  return (
    <header>
      <select
        value={languages[activeLanguage].language}
        onChange={(e) => setActiveLanguage(e.target.value.toLowerCase())}
      >
        {languagesArray.map((lang) => {
          return <option key={lang.language}>{lang.language}</option>;
        })}
      </select>
    </header>
  );
};

export default Header;
