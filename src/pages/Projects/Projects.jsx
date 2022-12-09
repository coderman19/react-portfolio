import React from 'react'

import Project from '../../components/Project/Project'

import {projects} from '../../helpers/projectList';

export default function Projects() {
  return (
          <>
            <div className="section">
              <div className="container">
                <h2 className="title-1">
                  Projects
                </h2>
                <ul className="projects">
                  {projects.map((project, id) => {
                    return <Project 
                      title={project.title} 
                      img={project.img} 
                      key={project.id}
                      />
                  })}
                </ul>
              </div>
            </div>
          </>
  )
}
