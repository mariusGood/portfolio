import styled from 'styled-components';

export const ProjectList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20vh;
  padding: 0 6vh;

  h1 {
    color: inherit;
    font-size: 4vw;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 10vw;

    h1 {
      font-size: 5vw;
    }
  }

  @media screen and (max-width: 426px) {
    h1 {
      font-size: 5vh;
    }
  }
`;
