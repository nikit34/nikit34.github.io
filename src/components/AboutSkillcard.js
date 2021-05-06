import React from 'react'


const AboutSkillcard = function({ skill: { icon, title, about } }) {
    return <div className="col-lg-6">
        <div className="skill-card">
            <div className="row">
                <div className="col-2">
                    <img src={icon} alt="icon" className="skill-card__icon" />
                </div>
                <div className="col-10">
                    <h6 className="skill-card__title">{title}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="skill-card__content">{about}</p>
                </div>
            </div>
        </div>
    </div>
}

export default AboutSkillcard;