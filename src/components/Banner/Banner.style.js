import styled from 'styled-components';

export const Banner = styled.div`
  background: 45deg, #7deaf4;
  background: -moz-linear-gradient(left, #7deaf4 0%, #49f4c9 50%, #45aaf4 100%);
  background: -webkit-linear-gradient(
    left,
    #7deaf4 0%,
    #49f4c9 50%,
    #45aaf4 100%
  );
  background: linear-gradient(to right, #7deaf4 0%, #49f4c9 50%, #45aaf4 100%);
  border: 1px solid #7deaf4;
  height: 20vh;
  margin-bottom: 10vw;
  position: relative;
  right: 8.5vw;
  transform: ${(props) =>
    props.deg === 'diagonal' ? 'skewy(-2deg)' : 'skewy(2deg)'};
  width: 100vw;

  @media screen and (max-width: 768px) {
    z-index: 10;
  }
`;
