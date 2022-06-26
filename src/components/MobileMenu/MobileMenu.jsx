import React, { useState } from 'react';
import * as S from './MobileMenu.style';

const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    show === false ? setShow(true) : setShow(false);
  };

  return (
    <S.Menu show={show}>
      <S.Navigation>
        <a href className='exit'>
          <i onClick={handleClick} className='fa-solid fa-x'></i>
        </a>
        <S.Links to='/projects'>Projects</S.Links>
        <S.Links to='/about'>About</S.Links>
        <S.Links to='/contact'>Contact</S.Links>
      </S.Navigation>
    </S.Menu>
  );
};

export default MobileMenu;
