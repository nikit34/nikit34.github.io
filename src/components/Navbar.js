import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = () => {
    const [active, setActive] = useState('')

    useEffect(() => {
        let currentUrl = window.location.href
        if(currentUrl.endsWith('/'))
            setActive('Projects');
        else if (currentUrl.endsWith('/about'))
            setActive('About');
        else if (currentUrl.endsWith('/resume'))
            setActive('Resume');
    }, [active])

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
            {
                active !== 'Projects' &&
                <Link to="/">
                    <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                </Link>
            }{
                active !== 'About' &&
                <Link to="/about">
                <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                </Link>
            }{
                active !== 'Resume' ?
                <Link to="/resume">
                    <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                </Link> : null
            }
            </div>
        </motion.div>
    );
 };


export default Navbar;