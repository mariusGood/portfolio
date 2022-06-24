import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  font-size: 1.2vw;

  div.text {
    position: relative;
    top: 6vw;
    left: 3vh;
    width: 50%;
    z-index: 5;
  }

  img {
    border-radius: 3px;
    filter: brightness(50%);
    height: 30vw;

    &:hover {
      filter: brightness(80%);
      transition: ease-in 0.2s;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  strong {
    color: #7deaf4;
  }

  div.flex {
    display: flex;
  }

  p,
  h2 {
    margin: 0;
  }
`;
