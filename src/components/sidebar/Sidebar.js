import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { BsSun, BsMoon } from 'react-icons/bs'
import telegram from '../../assets/icons/networks/telegram.svg'
import youtube from '../../assets/icons/networks/youtube.svg'
import linkedin from '../../assets/icons/networks/linkedin.svg'
import githubWhite from '../../assets/icons/networks/github-white.svg'
import github from '../../assets/icons/networks/github.svg'
import pin from '../../assets/icons/info/pin.svg'
import resume from '../../assets/icons/info/resume.svg'
import avatar from '../../assets/avatar.png'
import resumeFile from '../../assets/NikitaPermyakov_CV.pdf'
import './sidebar.css'


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

const Sidebar = function() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

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
            <div className="theme__toggler" onClick={toggleTheme}>
                {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
            </div>
            <Link to="/">
                <img src={avatar} alt="avatar" className="sidebar__avatar" />
                <div className="sidebar__name">Permyakov <span>Nikita</span></div>
            </Link>
            <div className="sidebar__title"><p>SDET</p></div>
            <a href={resumeFile} download="NikitaPermyakov_CV.pdf">
                <div className="sidebar__resume">
                    <img src={resume} alt="resume" className="sidebar__icon"/>Download Resume
                </div>
            </a>
            <a href="https://www.youtube.com/channel/UCSdYMimys_AWyo015UK2gWA">
                <div className="sidebar__profile">
                <img src={youtube} alt="youtube" className="sidebar__icon mb-2 mr-2"/><b>Demo</b>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/nikitapermikov/">
                <div className="sidebar__profile">
                    <img src={linkedin} alt="linkedin" className="sidebar__icon mb-2 mr-2 ml-1"/>Articles
                </div>
            </a>
            <a href="https://github.com/nikit34">
                <div className="sidebar__profile">
                    <img src={theme === 'light-theme' ? github : githubWhite} alt="github" className="sidebar__icon mb-2 mr-2"/>GitHub
                </div>
            </a>
            <a href="https://t.me/nikit34">
                <div className="sidebar__profile">
                    <img src={telegram} alt="telegram" className="sidebar__icon mb-2 mr-2 ml-3"/>Write me
                </div>
            </a>
            <div className="sidebar__contact">
                <a className="sidebar__location" href="https://goo.gl/maps/hLZ7aiQgXijCMumi8">
                    <img src={pin} alt="location" className="sidebar__icon mr-6"/>
                    Portugal, Lisbon
                </a>
            </div>
            <a href="https://nikit34.github.io/nikit34.github.io_v2/"><div className="sidebar_previous">Previous version</div></a>
        </motion.div>
    )
}


export default Sidebar;
