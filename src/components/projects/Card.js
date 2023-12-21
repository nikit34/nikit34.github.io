import React from 'react'
import github from '../../assets/icons/networks/github.svg'
import joystick from '../../assets/icons/status/joystick.svg'
import secretly from '../../assets/icons/status/secretly.svg'
import { motion } from 'framer-motion'


const Card = function({ project: { name, id_video, deployed_url, github_url } }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 1, scale: 0.9 }}
            exit={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="project-card col-md-6 col-lg-4"
            key={name}
        >
            <figure className="project-card__wrapper">
                <iframe id="ytplayer" alt={name} className="project-card__video" type="text/html" src={`https://www.youtube.com/embed/${id_video}`} frameBorder="0" allowFullScreen></iframe>
                <div className="project-card__context">
                    <div className="row justify-content-between">
                        {
                            !!(github_url) ?
                                <div className="col">
                                    <a href={github_url} target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="github link" className="project-card__icon" /> Code
                                    </a>
                                </div>
                            : <div className="col"><img src={secretly} alt="secretly link" className="project-card__icon" />Secretly</div>
                        }
                        {
                            !!(deployed_url) ?
                                <div className="col text-right">
                                    <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                                        <img src={joystick} alt="joystick link" className="project-card__icon" />Demo
                                    </a>
                                </div>
                            : <div className="col"><img src={secretly} alt="secretly link" className="project-card__icon" />Discontinued</div>
                        }
                    </div>
                    <div className="row project-card__description">
                        <div className="col">
                            {name}
                        </div>
                    </div>
                </div>
            </figure>
        </motion.div>
    )
};

export default Card;
