import React from 'react';
import * as S from './About.style';
import { icons } from '../../assets/images.js';
import { icons2 } from '../../assets/images.js';

const About = () => {
  return (
    <S.About id='about'>
      <div>
        <p>
          just finished <a href='https://codeacademy.lt/'>codeacademy</a>{' '}
          courses and in 5.5 month so far learnerd:
        </p>
        <ul className='first-list'>
          {icons.map((image) => (
            <li>
              <img src={image} alt='' />
            </li>
          ))}
        </ul>
        <p>in the future I would love to learn these languages / programs</p>
        <ul className='second-list'>
          {icons2.map((image) => (
            <li>
              <img src={image} alt='' />
            </li>
          ))}
        </ul>
        <p>overall become better developer and be part of something bigger</p>
      </div>
    </S.About>
  );
};
export default About;
