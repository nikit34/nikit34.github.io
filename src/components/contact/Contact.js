import React from 'react'
import { motion } from 'framer-motion'

import './contact.css'


const Contact = function() {
    const contact_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 1.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="contact"
            variants={contact_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <p className="contact__card-title">
                test
            </p>
        </motion.div>
    )
}

export default Contact;
