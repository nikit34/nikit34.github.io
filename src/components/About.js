import React from 'react'
import api from '../assets/icons/api.svg'
import Skillcard from './Skillcard'

const skills = [
    {
        icon: api,
        title: "English, German",
        about: "Quick read and thinking of any documentations"
    },{
        icon: api,
        title: "English, German",
        about: "Quick retest cumentations"
    },{
        icon: api,
        title: "English, German",
        about: "Quicretestions"
    },{
        icon: api,
        title: "English, Dotch",
        about: "Quick rearetestdocumentations"
    },{
        icon: api,
        title: "English, Dotch",
        about: "Quick read and knoretestretestretestretestretest of any documentations"
    },{
        icon: api,
        title: "English, Dotch",
        about: "Quick readretestretestretestretestretestr etestretestretestretestrete stretestretestretestish of any documentations"
    },
]

const About = () => {
    return (
        <div className="about">
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
        </div>
    )
}

export default About;