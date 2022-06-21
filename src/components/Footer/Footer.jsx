import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <span>Marius Gudinas &copy; 2022</span>
      </div>
      <div>
        <span>Powered by: </span>
        <a href='https://reactjs.org/'> ReactJs</a>
      </div>
    </S.Footer>
  );
};

export default Footer;
