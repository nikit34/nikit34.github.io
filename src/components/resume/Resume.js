import React from 'react'
import { motion } from 'framer-motion'

import Bar from './Bar'
import Experience from './Experience'
import { experiens, languages, tools } from '../../data/resume'
import './resume.css'


const Resume = function() {
    const resume_variants = {
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
        <motion.div className="container"
            variants={resume_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="resume-card">
                    <h4 className="resume-title">
                        Experience
                    </h4>
                    {
                        experiens.map((experience, index) => <Experience value={experience} key={index} />)
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h4 className="resume-title">
                        Languages and Frameworks
                    </h4>
                    <div className="resume-language__body">
                        {
                            languages.map((language, index) => <Bar value={language} key={index} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h4 className="resume-title">
                        Tools and Softwares
                    </h4>
                    <div className="resume-language__body">
                        {
                            tools.map((tool, index) => <Bar value={tool} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;
