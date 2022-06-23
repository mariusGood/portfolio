import styled from 'styled-components';

export const About = styled.section`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  height: 100vh;
  width: 90%;

  ul.first-list {
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
    padding: 2rem;
    margin-left: 3rem;
  }

  ul.second-list {
    display: flex;
    background-color: #ffffff;
    justify-content: space-evenly;
    padding: 2rem;
    margin-left: 3rem;
  }

  li {
    list-style: none;
  }

  img {
    height: 5rem;
    width: 6rem;
  }

  a {
    color: inherit;
  }
`;
