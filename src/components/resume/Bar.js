import React from 'react'
import './bar.css'


const GENERAL_EXPERIENCE = 5

const Bar = function({ value: { icon, name, level } }) {
    const bar_width = `${level}%`
    const years = GENERAL_EXPERIENCE * level / 100
    return (
        <div className="resume-bar">
            <div className="bar__wrapper" style={{ 'width': bar_width }}>
                <span className="bar__name">
                    <img src={icon} alt="icon" className="bar__icon mr-2" />
                    {name}, {years} years
                </span>
            </div>
        </div>
    )
};

export default Bar;
