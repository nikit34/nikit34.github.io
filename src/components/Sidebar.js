import React from 'react'
import { motion } from 'framer-motion'

import facebook from '../assets/icons/facebook.svg'
import youtube from '../assets/icons/youtube.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import avatar from '../assets/avatar.png'
import resume from '../assets/NikitaPermyakov_CV.pdf';


const Sidebar = () => {
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
                dealy: 0.2, duration: 0.7, type: 'spring'
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
            <div className="sidebar__item sidebar__title"><p>Full-Stack</p><p>Python, JavaScript, C++</p></div>
            <a href={resume} download="NikitaPermyakov_CV.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/nikitapermikov/"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
                <a href="https://www.youtube.com/channel/UCSdYMimys_AWyo015UK2gWA"><img src={youtube} alt="youtube" className="sidebar__icon mr-3"/></a>
                <a href="https://www.linkedin.com/in/nikitapermikov/"><img src={linkedin} alt="linkedin" className="sidebar__icon"/></a>
            </figure>
            <a href="https://github.com/nikit34">
                    <div className="sidebar__item sidebar__github">
                        <img src={github} alt="github" className="sidebar__icon mb-2 mr-3"/>GitHub
                    </div>
                </a>
            <div className="sidebar__contact pt-3">
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                    Russia, Moscow
                </div>
                <div className="sidebar__item">permikov134@yandex.ru</div>
                <div className="sidebar__item">+7(977)991-80-74</div>
            </div>
            <a><div className="sidebar__item sidebar__btn" onClick={handleEmailMe}>Email me</div></a>
            <br/>
            <a href="https://nikit34.github.io/nikit34.github.io_v2/"><div className="sidebar__item sidebar__btn">Previous version</div></a>
        </motion.div>
    )
}


export default Sidebar;