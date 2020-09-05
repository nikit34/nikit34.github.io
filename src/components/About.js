import React from 'react'
import { motion } from 'framer-motion'

import Skillcard from './Skillcard'
import skills from './data/about_data'


const About = () => {
    const about_variants = {
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
        <motion.div className="about"
            variants={about_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
                I want to be professional in development.
            </h6>
            <div className="contaimer about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map((skill, index) =>
                            <Skillcard skill={skill} key={index}/>
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About;