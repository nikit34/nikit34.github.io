import React from 'react'

import Bar from './Bar'
import Experience from './Experience'
import experiens, { languages, tools } from './data/resume_data'


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="resume-card">
                    <h4 className="resume-title">
                        Experience
                    </h4>
                    {
                         experiens.map((experience, index) => <Experience value={experience} key={index} />)
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h4 className="resume-title my-3">
                        Languages and Frameworks
                    </h4>
                    <div className="resume-language__body">
                        {
                            languages.map((language, index) => <Bar value={language} key={index} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h4 className="resume-title my-3">
                        Tools and Sofrwares
                    </h4>
                    <div className="resume-language__body">
                        {
                            tools.map((tool, index) => <Bar value={tool} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;