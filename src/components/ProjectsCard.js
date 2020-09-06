import React from 'react'
import github from '../assets/icons/github.svg'


const ProjectCard = ({ projects: { name, id_video, deployed_url, github_url } }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank">
                <iframe id="ytplayer" alt={name} className="projectCard__video" type="text/html" src={`https://www.youtube.com/embed/${id_video}`} frameBorder="0" allowFullScreen></iframe>
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    );
};

export default ProjectCard;