import React from 'react'


const ResumeExperience = ({ value: { head, subhead, date, text1, text2, text3, text4 } }) => {
    return (
        <div className="row resume-card__body">
            <div className="col">
                <div className="row">
                    <div className="col-9">
                        <h3 className="resume-card__heading">{head}</h3>
                        <div className="resume-card__subheading">{subhead}</div>
                    </div>
                    <div className="col-3 resume-card__date">
                        <h6>{date}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            {text1}
                            <span className="resume-card__text"> {text2} </span>
                            {text3}
                            <span className="resume-card__text"> {text4} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeExperience;