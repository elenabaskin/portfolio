import React from 'react';
import projects from '../ProjectList';

function Projects() {
  return (
    <>
      {projects.map((project) => (
        <h3>{project.name}</h3>
      ))}
    </>
  );
}

export default Projects;
