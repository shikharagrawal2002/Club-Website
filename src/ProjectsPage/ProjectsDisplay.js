import React from 'react';
import ProjectsCard from './ProjectsCard';
import "./Projects.css";
import Data from './data.json'

const   ProjectsDisplay = () => {
  return (
    <div className="projects">
        <p className="heading sm-12">Projects</p>
        {Data && <ProjectsCard data={Data.Projects}/>}
    </div>
  );
};

export default ProjectsDisplay;