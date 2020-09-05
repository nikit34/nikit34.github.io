import React, { useState } from 'react'
import { motion } from 'framer-motion'

import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard'

const categories = [
    {
        category: 'Python'
    },{
        category: 'JavaScript'
    },{
        category: 'C++'
    },{
        category: 'Django'
    },{
        category: 'React'
    },{
        category: 'Node'
    },{
        category: 'OpenCV'
    }
]


const Tab = ({ value: { category }, handle: handleFilterCategory }) => {
    return (
        <div className="sidebar__btn" onClick={() => handleFilterCategory(category)}>{category}</div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState(data_projects);
    // const [active, setActive] = useState(0);

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
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={project_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="projects__navbar">
                <div className="sidebar__btn" onClick={() => setProjects(data_projects)}>All</div>
                {
                    categories.map((category, index) => <Tab value={category} handle={handleFilterCategory} key={index}/>)
                }
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