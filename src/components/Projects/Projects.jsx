import React from 'react';
import * as S from './Projects.styles';

const Projects = ({ title, description, image, link, links }) => {
  const handleClick = () => {};
  console.log('links ===', links);
  return (
    <S.Projects>
      <div className='text'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        {image.map((img) => (
          <a href={link} target={'_blank'} rel='noreferrer'>
            <img src={img} alt='' onClick={handleClick} />
          </a>
        ))}
      </div>
      <strong>Front-End:</strong>
      <a href={links.front} target={'_blank'} rel='noreferrer'>
        {links.front}
      </a>
      <strong>Back-End:</strong>
      <a href={links.back} target={'_blank'} rel='noreferrer'>
        {links.back}
      </a>
    </S.Projects>
  );
};

export default Projects;
