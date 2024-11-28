import React from 'react';
import './ProjectContainer.css'; 

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.imageUrl && (
      <img
        src={project.imageUrl}
        alt={project.name}
        className='project__image'
      />
    )}
    <h3>{project.name}</h3>
    <p className='project__description'>{project.description}</p>

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        Source Code
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        Live Preview
      </a>
    )}
  </div>
);

export default ProjectContainer;
