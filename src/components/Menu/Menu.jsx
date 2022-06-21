import React from 'react';
import * as Scroll from 'react-scroll';
import * as S from './Menu.styles';

const Menu = () => {
  let scroll = Scroll.animateScroll;
  return (
    <S.Menu className='main-menu'>
      <S.Navigation className='main-navigation'>
        <S.Links
          to='home'
          spy={true}
          smooth={true}
          duration={500}
          offset={-130}
          delay={200}
          ignoreCancelEvents={false}
          onClick={scroll.scrollTo('home')}
        >
          <i className='fa-solid fa-house'></i>
        </S.Links>
        <S.Links
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
          delay={200}
          offset={-50}
          ignoreCancelEvents={false}
          onClick={scroll.scrollTo('projects')}
        >
          Projects
        </S.Links>
        <S.Links
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          delay={200}
          offset={-100}
          ignoreCancelEvents={false}
          onClick={scroll.scrollTo('about')}
        >
          About
        </S.Links>
      </S.Navigation>
    </S.Menu>
  );
};

export default Menu;
