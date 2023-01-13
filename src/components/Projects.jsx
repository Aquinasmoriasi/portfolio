import React from 'react';
import projects from '../projects/projects';
import Popup from './Popup';

const Projects = () => {
  const values = Object.values(projects);
  return (
    <div id="projects" className="projects d-flex flex-column align-items-center">
      <h2>Projects</h2>
      <div className="projects">
        {values.map((pj) => (
          <div className="card" key={Math.random()}>
            <div className="face face1">
              <div className="content">
                <i className={`bi ${pj.icon}`} />
                <h3>{pj.name}</h3>
                <p>{pj.about}</p>
                <p>{`${pj.stack[0]} | ${pj.stack[1]} | ${pj.stack[2]}`}</p>
              </div>
            </div>
            <div className="face face2">
              <div className="content" style={{ backgroundImage: `url(${pj.images[0]})` }} />
              <Popup name={pj.shortname} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
