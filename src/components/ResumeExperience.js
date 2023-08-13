import React from 'react'


const ResumeExperience = function({ value: { head, subhead, date_start, date_end, texts } }) {
    const textItems = texts.map((textItem, index) => {
        let lines = [];
        if (textItem.newline)
            lines.push(<br key={`br_${index}`}/>)
        if (textItem.bold) {
            lines.push(<span className="resume-card__text" key={`span_${index}`}> {textItem.text} </span>)
        } else {
            lines.push(textItem.text)
        }
        return lines;
    });
    return (
        <div className="row resume-card__body">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h5 className="resume-card__heading">{head}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="resume-card__subheading">{subhead}</div>
                    </div>
                    <div className="col-4 resume-card__date text-right">
                        <h6>{date_start} - {date_end}</h6>
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
