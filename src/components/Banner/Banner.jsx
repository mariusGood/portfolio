import React from 'react';
import * as S from './Banner.style';

const Banner = ({ children, deg }) => {
  return <S.Banner deg={deg}>{children}</S.Banner>;
};

export default Banner;
