import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2e2e;
  border-right: 1px solid #7deaf4;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: ${(props) => (props.show === false ? 'flex' : 'none')};

  .exit {
    font-size: 3vw;
    position: absolute;
    top: 3vw;
    left: 3vw;
    color: #ffffff;

    @media screen and (max-width: 426px) {
      font-size: 3vh;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #7deaf4;
  width: 100%;
`;

export const Links = styled(Link)`
  border-bottom: 1px solid #7deaf4;
  color: #ffffff;
  cursor: pointer;
  font-size: 2vw;
  line-height: 10vw;
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media screen and (max-width: 426px) {
    font-size: 2.5vh;
    line-height: 10vh;
  }

  :hover {
    color: #7deaf4;
    font-size: 2.75vw;
    transition: ease 0.3s;

    :focus {
      color: #7deaf4;
    }
  }
`;
