import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaRegAddressBook, FaRegEnvelope } from 'react-icons/fa'

import './contact.css'
import Snackbar from '../snackbar/Snackbar'


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

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch(
            'https://script.google.com/macros/s/AKfycbyPtJyU5gNNyu9PdVj4NIW7MbVJDIa-6WX3CKa3Gaw9PtUdDtMJSYVadDI4L3LdZLaTUA/exec?name='
            + form.name + '&email=' + form.email + '&subject=' + form.subject + '&message=' + form.message,
            {
                method: 'GET',
                mode: 'no-cors'
            }
        ).then(() => {
            setForm({name: '', email: '', subject: '', message: ''});
        }).catch((error) => console.log(error));
        console.log('Data sent successfully!');
    };

    const snackbarRef = useRef(null);

    return (
        <motion.div className="contact"
            variants={contact_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="contact__container container grid">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your full Name <b>*</b>
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                                className="contact__form-input"
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input"
                            />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Subject <b>*</b>
                        </label>
                        <textarea
                            name="subject"
                            onChange={handleChange}
                            value={form.subject}
                            className='contact__form-input'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            className='contact__form-input'
                        />
                    </div>
                    <div className="contact__submit">
                        <button
                            type="submit"
                            className="btn text-cs"
                            onClick={() => {
                                snackbarRef.current.show();
                            }}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="contact__content grid">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">permikov134@yandex.ru</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+7 977 991 80 74</p>
                    </div>
                </div>
                <Snackbar
                    ref={snackbarRef}
                    message="Message sent"
                    type="success"
                />
            </div>
        </motion.div>
    )
}

export default Contact;
