import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import youtube from '../assets/icons/youtube.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import avatar from '../assets/avatar.png'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={avatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Permyakov <span>Nikita</span></div>
            <div className="sidebar__item sidebar__title"><p>Full-Stack</p><p>Python, JavaScript, C++</p></div>
            <a href="https://drive.google.com/file/d/1HYt3qZudCBFhw5EhumidqXVtLDOwZobx/view">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/nikitapermikov/"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
                <a href="https://www.youtube.com/channel/UCSdYMimys_AWyo015UK2gWA"><img src={youtube} alt="youtube" className="sidebar__icon mr-3"/></a>
                <a href="https://www.linkedin.com/in/nikitapermikov/"><img src={linkedin} alt="linkedin" className="sidebar__icon"/></a>
            </figure>
            <div className="sidebar__contact">
            <a href="https://github.com/nikit34">
                <div className="sidebar__item sidebar__github">
                    <img src={github} alt="github" className="sidebar__icon mr-3"/>GitHub
                </div>
            </a>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                    Russia, Moscow
                </div>
                <div className="sidebar__item">permikov134@yandex.ru</div>
                <div className="sidebar__item">+7(977)991-80-74</div>
            </div>
            <div className="sidebar__item sidebar__email">Email me</div>
        </div>
    )
}


export default Sidebar;