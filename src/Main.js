import styled from 'styled-components';
import Img from './assets/switch-language.png';

const Main = ({ languages, activeLanguage }) => {
  return (
    <StyledMain>
      <div className="container">
        <h1 className="title">
          <span className="titleP1">{languages[activeLanguage].titleP1}</span>{' '}
          <span className="titleP2">{languages[activeLanguage].titleP2}</span>{' '}
          <span className="titleP3">{languages[activeLanguage].titleP3}</span>
        </h1>
        <p className="desc">{languages[activeLanguage].description}</p>
        <h2 className="how">{languages[activeLanguage].howItWorks}</h2>
        <ul className="steps">
          <li className="step step1">
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
                strokeWidth="2"
              />
              <path
                d="M50 38.5C50 38.7652 49.8946 39.0196 49.7071 39.2071C49.5196 39.3946 49.2652 39.5 49 39.5H39V49.5C39 49.7652 38.8946 50.0196 38.7071 50.2071C38.5196 50.3946 38.2652 50.5 38 50.5C37.7348 50.5 37.4804 50.3946 37.2929 50.2071C37.1054 50.0196 37 49.7652 37 49.5V39.5H27C26.7348 39.5 26.4804 39.3946 26.2929 39.2071C26.1054 39.0196 26 38.7652 26 38.5C26 38.2348 26.1054 37.9804 26.2929 37.7929C26.4804 37.6054 26.7348 37.5 27 37.5H37V27.5C37 27.2348 37.1054 26.9804 37.2929 26.7929C37.4804 26.6054 37.7348 26.5 38 26.5C38.2652 26.5 38.5196 26.6054 38.7071 26.7929C38.8946 26.9804 39 27.2348 39 27.5V37.5H49C49.2652 37.5 49.5196 37.6054 49.7071 37.7929C49.8946 37.9804 50 38.2348 50 38.5Z"
                fill="#8141AF"
              />
            </svg>
            <p>{languages[activeLanguage].step1}</p>
          </li>
          <li className="step step2">
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
                strokeWidth="2"
              />
              <path
                d="M50.7074 31.7075L34.7074 47.7075C34.6146 47.8005 34.5043 47.8742 34.3829 47.9246C34.2615 47.9749 34.1314 48.0008 33.9999 48.0008C33.8685 48.0008 33.7384 47.9749 33.617 47.9246C33.4956 47.8742 33.3853 47.8005 33.2924 47.7075L26.2924 40.7075C26.1048 40.5199 25.9994 40.2654 25.9994 40C25.9994 39.7346 26.1048 39.4801 26.2924 39.2925C26.4801 39.1049 26.7346 38.9994 26.9999 38.9994C27.2653 38.9994 27.5198 39.1049 27.7074 39.2925L33.9999 45.5863L49.2924 30.2925C49.4801 30.1049 49.7346 29.9995 49.9999 29.9995C50.2653 29.9995 50.5198 30.1049 50.7074 30.2925C50.8951 30.4801 51.0005 30.7346 51.0005 31C51.0005 31.2654 50.8951 31.5199 50.7074 31.7075Z"
                fill="#fff"
              />
            </svg>
            <p>{languages[activeLanguage].step2}</p>
          </li>
        </ul>
        <h2 className="easy">{languages[activeLanguage].easy}</h2>
        <p className="implement">{languages[activeLanguage].implement}</p>
        <h3 className="goodbye">{languages[activeLanguage].goodbye}</h3>
        <p className="link">
          {languages[activeLanguage].link}{' '}
          <a
            href="https://github.com/aaronkagan/react-language-switcher-template/blob/main/src/languages.json"
            // target="_blank"
            // rel="noreferrer"
          >
            {languages[activeLanguage].here}
          </a>
        </p>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: #f7f7f7;
  max-width: 80%;
  margin: 0 auto 3rem;
  padding: 2em 10rem;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  min-height: 80vh;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position-x: 85%;
    background-position-y: 45%;
    background-size: 50rem;
    height: 100%;
    width: 100%;
  }

  .container {
    padding-left: 2.5%;
    width: 60%;
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

  @media screen and (max-width: 1600px) {
    .container {
      flex-direction: column;
    }

    &::after {
      left: 0;
      opacity: 0.05;
      /* background-position: 25%; */
      /* transform: translateX(50%); */
      /* background-position-x: 85%;
    background-position-y: 45%; */
      /* background-size: 60vw; */
      /* overflow: hidden; */
      background-size: contain;
      background-position: center center;
    }

    padding-left: 5rem;
    padding-right: 5rem;

    .titleP2,
    .titleP3 {
      font-size: 5.5rem;
    }
    .container {
      width: 95%;
      text-align: center;
      padding: unset;
    }

    .steps {
      flex-direction: column;

      & .step {
        width: 60%;
        display: flex;
        flex-direction: column;

        & p {
          width: 90%;
          font-size: 1.7rem;
          font-weight: 500;
        }
      }
    }

    @media screen and (max-width: 750px) {
      .titleP1 {
        font-size: 2rem;
      }
      .titleP2,
      .titleP3 {
        font-size: 4.5rem;
        display: inline-block;
      }

      &::after {
        display: none;
      }
    }
  }
`;

export default Main;
