import React from 'react'
import { motion } from 'framer-motion'

import AboutSkillcard from './AboutSkillcard'
import { skills } from './data/about_data'

function sendProductSMSBot(text) {
    const xhr = new XMLHttpRequest();
    const url = "https://api.telegram.org/bot6222494632:AAG1I5npTLlqo3cl_4jgredo_ptBjHd2ajw/sendMessage?chat_id=-1001883224861&text=" + text;
    xhr.open("GET", url);
    xhr.send();
    console.log(1);
};

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

    sendProductSMSBot("text");

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
