import styled from 'styled-components';

export const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75vw;
  text-transform: uppercase;
  text-align: center;
  height: 100vh;
  margin-bottom: 10vw;

  ul {
    padding: 2.5vw;
  }

  ul.first-list {
    display: flex;
    background-color: #ffffff;
    justify-content: space-between;
  }

  ul.second-list {
    display: flex;
    background-color: #ffffff;
    justify-content: space-evenly;
  }

  li {
    list-style: none;
  }

  img {
    height: 6vw;
    width: 6vw;
  }

  a {
    color: inherit;
  }
`;
