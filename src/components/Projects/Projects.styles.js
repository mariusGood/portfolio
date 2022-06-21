import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  div.text {
    position: relative;
    top: 7rem;
    left: 1rem;
    width: 50%;
    z-index: 5;
  }

  img {
    border-radius: 3px;
    filter: brightness(50%);
    height: 25rem;
    width: auto;

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
`;
