import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  color: #e0e0e0;
  background-color: #2e2e2e;
  gap: 10rem;
  text-align: center;
  font-size: 1.25vw;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 426px) {
    font-size: 2vh;
  }
`;
