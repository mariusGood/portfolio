import React from 'react';
import Projects from '../Projects/Projects';
import images from '../../assets/images.js';
import { ProjectList } from './ProjectsList.style';

const links = [
  {
    front: 'https://github.com/mariusGood/project-front-2',
    back: 'https://github.com/mariusGood/project-back',
  },
  {
    front: 'https://github.com/margus0/todo-front',
    back: 'https://github.com/margus0/todo-back',
  },
];

const ProjectsList = () => {
  return (
    <ProjectList id='projects'>
      <h1>Projects:</h1>
      <Projects
        title='E-commerce Website'
        description='Simple responsive e-commerce shop with registration and login forms and protected routes built using ReactJs & NodeJs. As this is my first project in future I will update it with more features.'
        image={[images.homepage, images.login]}
        link='https://plankton-app-uelyf.ondigitalocean.app'
        links={links[0]}
      />
      <Projects
        title='Todo app'
        description='Full CRUD todo app also built using ReactJs & NodeJs.'
        image={[images.todo]}
        link='https://seal-app-zws4n.ondigitalocean.app'
        links={links[1]}
      />
    </ProjectList>
  );
};

export default ProjectsList;
