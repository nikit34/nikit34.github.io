import React from 'react'
import github from '../assets/icons/github.svg'
import joystick from '../assets/icons/joystick.svg'
import secretly from '../assets/icons/secretly.svg'


const ProjectCard = ({ projects: { name, id_video, deployed_url, github_url } }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4">
            <figure className="projectCard__wrapper">
                <iframe id="ytplayer" alt={name} className="projectCard__video" type="text/html" src={`https://www.youtube.com/embed/${id_video}`} frameBorder="0" allowFullScreen></iframe>
                <div className="projectCard__context">
                    <div className="row justify-content-between">
                        {
                            !!(github_url) ?
                                <div className="col">
                                    <a href={github_url} target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="github link" className="projectCard__icon" /> GitHub
                                    </a>
                                </div>
                            : <div className="col"><img src={secretly} alt="secretly link" className="projectCard__icon" />Secretly</div>
                        }
                        {
                            !!(deployed_url) ?
                                <div className="col text-right">
                                    <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                                        <img src={joystick} alt="joystick link" className="projectCard__icon" />Demo
                                    </a>
                                </div>
                            : <div className="col"><img src={secretly} alt="secretly link" className="projectCard__icon" />Discontinued</div>
                        }
                    </div>
                    <div className="row projectCard__description">
                        <div className="col">
                            {name}
                        </div>
                    </div>
                </div>
            </figure>
        </div>
    );
};

export default ProjectCard;