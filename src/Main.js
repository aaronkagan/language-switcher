import styled from 'styled-components';

const Main = ({ languages, activeLanguage }) => {
  return (
    <StyledMain>
      <div className="col-left">
        <h1 className="title">
          <span className="titleP1">{languages[activeLanguage].titleP1}</span>{' '}
          <span className="titleP2">{languages[activeLanguage].titleP2}</span>{' '}
          <span className="titleP3">{languages[activeLanguage].titleP3}</span>
        </h1>
        <p className="desc">{languages[activeLanguage].description}</p>
        <h2 className="how">{languages[activeLanguage].howItWorks}</h2>
        <ul className="steps">
          <li className="step1">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="74"
                height="74"
                rx="37"
                fill="white"
                stroke="#8141AF"
                stroke-width="2"
              />
              <path
                d="M50 38.5C50 38.7652 49.8946 39.0196 49.7071 39.2071C49.5196 39.3946 49.2652 39.5 49 39.5H39V49.5C39 49.7652 38.8946 50.0196 38.7071 50.2071C38.5196 50.3946 38.2652 50.5 38 50.5C37.7348 50.5 37.4804 50.3946 37.2929 50.2071C37.1054 50.0196 37 49.7652 37 49.5V39.5H27C26.7348 39.5 26.4804 39.3946 26.2929 39.2071C26.1054 39.0196 26 38.7652 26 38.5C26 38.2348 26.1054 37.9804 26.2929 37.7929C26.4804 37.6054 26.7348 37.5 27 37.5H37V27.5C37 27.2348 37.1054 26.9804 37.2929 26.7929C37.4804 26.6054 37.7348 26.5 38 26.5C38.2652 26.5 38.5196 26.6054 38.7071 26.7929C38.8946 26.9804 39 27.2348 39 27.5V37.5H49C49.2652 37.5 49.5196 37.6054 49.7071 37.7929C49.8946 37.9804 50 38.2348 50 38.5Z"
                fill="#8141AF"
              />
            </svg>
            {languages[activeLanguage].step1}
          </li>
          <li className="step2">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="74"
                height="74"
                rx="37"
                fill="#8141AF"
                stroke="none"
                stroke-width="2"
              />
              <path
                d="M50.7074 31.7075L34.7074 47.7075C34.6146 47.8005 34.5043 47.8742 34.3829 47.9246C34.2615 47.9749 34.1314 48.0008 33.9999 48.0008C33.8685 48.0008 33.7384 47.9749 33.617 47.9246C33.4956 47.8742 33.3853 47.8005 33.2924 47.7075L26.2924 40.7075C26.1048 40.5199 25.9994 40.2654 25.9994 40C25.9994 39.7346 26.1048 39.4801 26.2924 39.2925C26.4801 39.1049 26.7346 38.9994 26.9999 38.9994C27.2653 38.9994 27.5198 39.1049 27.7074 39.2925L33.9999 45.5863L49.2924 30.2925C49.4801 30.1049 49.7346 29.9995 49.9999 29.9995C50.2653 29.9995 50.5198 30.1049 50.7074 30.2925C50.8951 30.4801 51.0005 30.7346 51.0005 31C51.0005 31.2654 50.8951 31.5199 50.7074 31.7075Z"
                fill="#fff"
              />
            </svg>
            {languages[activeLanguage].step2}
          </li>
        </ul>
        <h2 className="easy">{languages[activeLanguage].easy}</h2>
        <p className="implement">{languages[activeLanguage].implement}</p>
        <h3 className="goodbye">{languages[activeLanguage].goodbye}</h3>
        <p className="link">
          {languages[activeLanguage].link}{' '}
          <span>
            <a
              href="https://github.com/aaronkagan/react-language-switcher-template/blob/main/src/languages.json"
              target="_blank"
            >
              {languages[activeLanguage].here}
            </a>
          </span>
        </p>
      </div>
      <div className="col-right">
        <svg
          className="img-hero"
          width="476"
          height="476"
          viewBox="0 0 476 476"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M178.344 256.537V236.911C167.396 229.447 157.039 220.582 147.49 210.07C119.84 236.787 93.3711 253.707 90.3853 255.604L87.8659 257.159L72.6255 232.806L75.1137 231.22C75.4247 231.002 102.36 213.926 129.575 187.271C104.599 150.849 94.9885 114.148 94.6153 112.562L93.8999 109.762L121.737 102.609L122.421 105.439C122.484 105.75 130.415 135.111 149.699 165.343C168.765 142.172 179.869 119.84 182.699 98.7831H65.7828V67.5246H130.228V50.138H160.274V67.4935H224.719V98.7831H211.749C208.732 128.051 193.865 158.376 167.458 189.013C171.004 192.994 174.643 196.633 178.344 200.117V198.095V185.405C178.344 174.954 186.804 166.494 197.255 166.494H281.389V17.6976C281.389 15.085 279.305 12.97 276.661 12.97H4.72765C2.115 12.97 0 15.085 0 17.6976V289.6C0 292.244 2.115 294.328 4.72765 294.328H178.344V256.537Z"
            fill="#8141AF"
          />
          <path
            d="M333.673 264.842H333.144C330.531 275.199 327.981 288.325 325.119 298.371L314.793 335.29H353.236L342.444 298.371C339.333 288.045 336.223 275.168 333.673 264.842Z"
            fill="#45266E"
          />
          <path
            d="M471.272 181.673H199.37C196.757 181.673 194.642 183.788 194.642 186.4V458.334C194.642 460.946 196.757 463.03 199.37 463.03H471.272C473.916 463.03 476 460.946 476 458.334V186.4C476 183.819 473.916 181.673 471.272 181.673ZM372.365 409.315L358.96 364.651H309.164L296.754 409.315H256.009L309.164 235.45H360.732L414.634 409.315H372.365Z"
            fill="#45266E"
          />
          <path
            d="M122.39 306.24H84.6001V369.068L115.89 400.047H186.182V362.256H122.39V306.24Z"
            fill="#8141AF"
          />
        </svg>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: #f7f7f7;
  width: 80%;
  margin: 0 auto;
  padding: 2em 10rem;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;

  .col-left {
    padding-left: 2.5%;
  }

  .col-left,
  .col-right {
    width: 50%;
  }

  .col-right {
  }
  .titleP1 {
    font-size: 3rem;
    font-weight: 500;
    display: block;
  }

  .titleP2 {
    color: #8141af;
  }

  .titleP2,
  .titleP3 {
    font-size: 8.5rem;
    line-height: 107%;
    letter-spacing: -2.569px;
  }

  .desc {
    font-weight: 400;
    font-size: 1.6rem;
  }

  .how {
    font-weight: 700;
    font-size: 3em;
  }

  .steps {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0;
  }

  .step1,
  .step2 {
    font-weight: 400;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .easy {
    font-weight: 700;
    font-size: 3rem;
  }

  .implement {
    font-size: 1.6rem;
  }

  .goodbye {
    font-weight: 500;
    font-size: 3rem;
  }

  .link {
    font-size: 1.6rem;

    a {
      color: #8141af;
      text-decoration: none;
    }
  }

  .img-hero {
    width: 90%;
  }
`;

export default Main;
