const Contact = ({ languages, activeLanguage }) => {
  return (
    <form>
      <label htmlFor="name">{languages[activeLanguage].name}</label>
      <input id="name" type="text" />
      <label htmlFor="email">{languages[activeLanguage].email}</label>
      <input id="email" type="email" />
      <button type="button">{languages[activeLanguage].submit}</button>
    </form>
  );
};

export default Contact;
