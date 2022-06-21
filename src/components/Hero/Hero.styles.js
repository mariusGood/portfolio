import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  align-items: flex-start;
  color: inherit;
  height: 80vh;
  width: 60%;

  ul {
    display: flex;
    padding: 0;
    width: 10rem;
  }

  li {
    list-style: none;
    padding: 1rem 2rem;

    a {
      color: inherit;
      font-size: 1.25rem;
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
      font-size: 5rem;
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
