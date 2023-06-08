import React, {useState, useEffect} from 'react'
import AddProject from './projects/AddProject'
import ProjectItem from './projects/ProjectItem'
import Projects from './projects/Projects'

import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const ProjectManagement = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const data = [

            {
              id: uuidv4(),
              category: 'Front-End', 
              title: 'Javascript'
            },
            {
              id: uuidv4(),
              category: 'Back-End', 
              title: 'Node'
            },
            {
              id: uuidv4(),
              category: 'Front-End', 
              title: 'React'
            }
      
          ]
    
          setProjects(data)
      
    }, [])

    const handleAddProject = (newProjectObj) => {
        setProjects([newProjectObj, ...projects])
    }

    const handleRemoveProject = (id) => {
        let filteredProjects = projects.filter(projectObj => {
            return id != projectObj.id
        })
        setProjects(filteredProjects)
    }
    
  return (
    <>
    <h1>Project Management</h1>

    <Projects projectsArray = {projects} deleteproject={handleRemoveProject} />

    </>
  )
}

export default ProjectManagement