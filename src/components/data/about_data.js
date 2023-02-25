import React from 'react'

import creating from '../../assets/icons/creating.svg'
import compass from '../../assets/icons/compass.svg'
import code from '../../assets/icons/code.svg'
import api from '../../assets/icons/api.svg'


const skills = [
    {
        icon: compass,
        title: "Hobbies",
        about: [
            'I do it for myself, with interest and desire, constantly alternating classes.',
            <li>Communication with people</li>,
            <li>Programming</li>,
            <li>Mathematics and Physics</li>,
            <li>Driving</li>,
            <li>Sport Orienteering</li>,
            <li>Strength training</li>,
            <li>and Running</li>
        ]
    },{
        icon: creating,
        title: "Product creation",
        about: [
            <p>I write my own code and am responsible for it.</p>,
            <p>I understand the balance of business requirements and developer debt.</p>,
            <b>I like to create a product <s>and craking</s> and I have spent a lot of time on it for a long time.</b>
        ]
    },{
        icon: api,
        title: "Research",
        about: "I quickly understand someone else's code and test it. I'm not afraid to make changes and ask colleagues. I know the value of technical mistakes and personal conflicts."
    },{
        icon: code,
        title: "Communications",
        about: "I have worked closely with people for a long time. I'm ready to take responsibility for the team."
    }
]

export { skills };