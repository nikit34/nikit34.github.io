import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [active, setActive] = useState('')

    useEffect(() => {
        let currentUrl = window.location.href
        if(currentUrl.endsWith('/'))
            setActive('About');
        else if (currentUrl.endsWith('/projets'))
            setActive('Projects');
        else if (currentUrl.endsWith('/resume'))
            setActive('Resume');
    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
            {active !== 'About' &&
                <Link to="/">
                <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                </Link>
            }{
                active !== 'Resume' ?
                <Link to="/resume">
                    <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                </Link> : null
            }{
                active !== 'Projects' &&
                <Link to="projects">
                    <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                </Link>
            }
            </div>
        </div>
    );
 };


export default Navbar;