import React from 'react'
import { motion } from 'framer-motion'

import ResumeBar from './ResumeBar'
import ResumeExperience from './ResumeExperience'
import { experiens, languages, tools } from './data/resume_data'


const Resume = () => {
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
                        experiens.map((experience, index) => <ResumeExperience value={experience} key={index} />)
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
                            languages.map((language, index) => <ResumeBar value={language} key={index} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h4 className="resume-title">
                        Tools and Sofrwares
                    </h4>
                    <div className="resume-language__body">
                        {
                            tools.map((tool, index) => <ResumeBar value={tool} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;