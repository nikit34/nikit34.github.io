import React, { useState } from 'react'
import { motion } from 'framer-motion'

import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard'


const Projects = () => {
    const [projects, setProjects] = useState(data_projects);

    const handleFilterCategory = (name) => {
        const new_data = data_projects.filter(project => project.category.includes(name))
        setProjects(new_data)
    }

    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 1.2
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={project_variants}
            initial='hidden'
            animate='visible'
        >
            <div className="projects__navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('python')}>Python</div>
                <div onClick={() => handleFilterCategory('JavaScript')}>JavaScript</div>
                <div onClick={() => handleFilterCategory('Cpp')}>C++</div>
                <div onClick={() => handleFilterCategory('Django')}>Django</div>
                <div onClick={() => handleFilterCategory('React.js')}>React</div>
                <div onClick={() => handleFilterCategory('Node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('OpenCV')}>OpenCV</div>
            </div>
            <div className="row">
                {
                    projects.map(project => <ProjectCard key={project.name} projects={project} />)
                }
            </div>
        </motion.div>
    );
};

export default Projects;