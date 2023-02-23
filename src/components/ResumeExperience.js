import React from 'react'


const ResumeExperience = function({ value: { head, subhead, date, texts } }) {
    const textItems = texts.map((textItem) => {
        let lines = [];
        if (textItem.newline)
            lines.push(<br/>)
        if (textItem.bold) {
            lines.push(<span className="resume-card__text"> {textItem.text} </span>)
        } else {
            lines.push(textItem.text)
        }
        return lines;
    });
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
                        <p>{textItems}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResumeExperience;