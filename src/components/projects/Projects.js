import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { data_projects, categories } from '../../data/projects'
import Card from './Card'
import Tab from './Tab'
import { AnimatePresence } from 'framer-motion'
import './projects.css'


const Projects = function() {
    const [projects, setProjects] = useState(data_projects);
    const [active, setActive] = useState(0);

    const handleFilterCategory = (name) => {
        if (name.toLowerCase() === 'all'){
            setProjects(data_projects)
        } else {
            const new_data = data_projects.filter(project => project.category.includes(name))
            setProjects(new_data)
        }
    }

    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 1.2
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
                {
                    categories.map((category, index) => <Tab value={category} handle={handleFilterCategory} key={index} onItemClicked={() => setActive(index)} isActive={active === index} />)
                }
            </div>
            <div className="row">
                <AnimatePresence initial={false}>
                    {
                        projects.map((project, index) => <Card key={index} projects={project} />)
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
};

export default Projects;
