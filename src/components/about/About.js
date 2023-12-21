import React from 'react'
import { motion } from 'framer-motion'

import AboutSkillcard from './AboutSkillcard'
import { skills } from '../../data/about'
import './about.css'


const About = function() {
    const about_variants = {
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
        <motion.div className="about"
            variants={about_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
                I want to be professional in development.
            </h6>
            <div className="about__container container">
                <div className="row">
                    {
                        skills.map((skill, index) =>
                            <AboutSkillcard skill={skill} key={index} />
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About;
