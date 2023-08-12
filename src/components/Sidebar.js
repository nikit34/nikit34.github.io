import React from 'react'
import { motion } from 'framer-motion'

import telegram from '../assets/icons/networks/telegram.svg'
import youtube from '../assets/icons/networks/youtube.svg'
import linkedin from '../assets/icons/networks/linkedin.svg'
import github from '../assets/icons/networks/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import avatar from '../assets/avatar.png'
import resume from '../assets/NikitaPermyakov_CV.pdf';


const Sidebar = function() {
    const handleEmailMe = () => {
        window.open('mailto:permikov134@yandex.ru')
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vw'
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.5, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={avatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Permyakov <span>Nikita</span></div>
            <div className="sidebar__title"><p>Full-Stack</p><p>SDET</p></div>
            <a href={resume} download="NikitaPermyakov_CV.pdf">
                <div className="sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
                </div>
            </a>
            <a href="https://www.youtube.com/channel/UCSdYMimys_AWyo015UK2gWA">
                <div className="sidebar__profile">
                <img src={youtube} alt="youtube" className="sidebar__icon mb-2 mr-3"/><b>Demo</b>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/nikitapermikov/">
                <div className="sidebar__profile">
                    <img src={linkedin} alt="linkedin" className="sidebar__icon mb-2 mr-3"/>Articles
                </div>
            </a>
            <a href="https://github.com/nikit34">
                <div className="sidebar__profile">
                    <img src={github} alt="github" className="sidebar__icon mb-2 mr-3"/>GitHub
                </div>
            </a>
            <a href="https://t.me/nikit34">
                    <div className="sidebar__profile">
                        <img src={telegram} alt="telegram" className="sidebar__icon mb-2 mr-3"/>Write me
                    </div>
                </a>
            <div className="sidebar__contact">
                <a className="sidebar__location" href="https://goo.gl/maps/hLZ7aiQgXijCMumi8">
                    <img src={pin} alt="location" className="sidebar__icon mr-6"/>
                    Portugal, Lisbon
                </a>
                <a><div className="sidebar__btn" onClick={handleEmailMe}>Email me</div></a>
                <a href="https://telegram.me/nikit34"><div className="sidebar__btn">tg: @nikit34</div></a>
            </div>
            <a href="https://nikit34.github.io/nikit34.github.io_v2/"><div className="sidebar_previous">Previous version</div></a>
        </motion.div>
    )
}


export default Sidebar;
