const Main = ({ languages, activeLanguage }) => {
  return (
    <main>
      <h1>{languages[activeLanguage].title}</h1>
      <p>{languages[activeLanguage].description}</p>
      <h2>{languages[activeLanguage].howItWorks}</h2>
      <ul>
        <li>{languages[activeLanguage].howP1}</li>
        <li>{languages[activeLanguage].howP2}</li>
      </ul>
      <h2>{languages[activeLanguage].easy}</h2>
      <p>{languages[activeLanguage].implement}</p>
    </main>
  );
};

export default Main;
