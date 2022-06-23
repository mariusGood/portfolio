import React from 'react';
import * as S from './About.style';
import { icons } from '../../assets/images.js';
import { icons2 } from '../../assets/images.js';

const About = () => {
  return (
    <S.About id='about'>
      <div>
        <p>
          just finished
          <a href='https://codeacademy.lt/' target='_blank' rel='noreferrer'>
            codeacademy
          </a>{' '}
          courses and in 5.5 month so far learnerd:
        </p>
        <ul className='first-list'>
          {icons.map((el) => (
            <li key={el.id}>
              <img src={el.img} alt='' />
            </li>
          ))}
        </ul>
        <p>in the future I would love to learn these languages / programs</p>
        <ul className='second-list'>
          {icons2.map((el) => (
            <li key={el.id}>
              <img src={el.img} alt='' />
            </li>
          ))}
        </ul>
        <p>overall become better developer and be part of something bigger</p>
      </div>
    </S.About>
  );
};
export default About;
