import styled from 'styled-components';

const Header = ({ languages, setActiveLanguage, activeLanguage }) => {
  const languagesArray = Object.values(languages);

  const handleCustomSelectArrowClick = () => {};

  return (
    <StyledHeader>
      <span className="logo">
        language<span className="purple">switcher</span>
      </span>
      <div className="select-container">
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
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="33"
            height="33"
            rx="16.5"
            fill="#8141AF"
          />
          <path
            d="M20.9937 15.3061L16.9312 19.3686C16.8746 19.4254 16.8073 19.4705 16.7333 19.5013C16.6592 19.532 16.5798 19.5479 16.4996 19.5479C16.4194 19.5479 16.34 19.532 16.2659 19.5013C16.1918 19.4705 16.1246 19.4254 16.068 19.3686L12.0055 15.3061C11.891 15.1917 11.8267 15.0364 11.8267 14.8745C11.8267 14.7126 11.891 14.5573 12.0055 14.4428C12.1199 14.3284 12.2752 14.2641 12.4371 14.2641C12.599 14.2641 12.7543 14.3284 12.8687 14.4428L16.5001 18.0742L20.1315 14.4423C20.2459 14.3279 20.4012 14.2635 20.5631 14.2635C20.725 14.2635 20.8803 14.3279 20.9947 14.4423C21.1092 14.5568 21.1735 14.7121 21.1735 14.874C21.1735 15.0359 21.1092 15.1911 20.9947 15.3056L20.9937 15.3061Z"
            fill="white"
          />
        </svg>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 85%;
  margin: 0 auto;
  padding: 6rem 0;

  .logo {
    font-weight: 700;
    font-size: 3rem;
  }

  .purple {
    color: #8141af;
  }

  .select-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  select {
    border-radius: 9999px;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 500;
    padding: 1rem 3em 1rem 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  .select-container svg {
    position: absolute;
    right: 0.5rem;
    cursor: pointer;
    z-index: -1;
  }
`;

export default Header;
