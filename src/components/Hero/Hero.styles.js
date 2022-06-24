import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  align-items: flex-start;
  color: inherit;
  height: 80vh;
  width: 60vw;
  font-size: 1.25vw;

  @media screen and (max-width: 1000px) {
    height: 60vh;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 20vh;
  }

  li {
    list-style: none;
    padding: 0.5vw 2vw;

    a {
      color: inherit;
      font-size: 2.5vh;
      text-decoration: none;

      :hover {
        color: #7deaf4;
        transition: ease-in 0.2s;
      }
    }
  }

  .hero-section {
    padding: 2rem;

    h1 {
      font-size: 5vw;
      font-weight: 600;
      margin: 0;
      padding: 0 2rem;
    }

    span {
      color: #7deaf4;
    }
    p {
      padding: 1rem 2rem;
    }
  }
`;
