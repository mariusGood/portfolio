import React from 'react';
import Button from '../Button/Button';
import * as S from './Projects.styles';

const Projects = ({ title, description, image, link, links }) => {
  return (
    <S.Projects>
      <div className='text'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        {image.map((img) => (
          <a key={img} href={link} target={'_blank'} rel='noreferrer'>
            <img src={img} alt='' />
          </a>
        ))}
      </div>
      <div className='flex'>
        <a href={links.front} target={'_blank'} rel='noreferrer'>
          <Button>Front-End</Button>
        </a>
        <a href={links.back} target={'_blank'} rel='noreferrer'>
          <Button>Back-End</Button>
        </a>
      </div>
    </S.Projects>
  );
};

export default Projects;
