import './blog.css'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react';

import Post from './Post'
import postsFile from '../../data/posts.csv'


const Blog = function() {
    const [csvData, setCsvData] = useState([]);

    const blog_variants = {
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

    const readFile = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            const rows = text.trim().split('\n');
            const headers = rows.shift().split(',');
            const objects = rows.map(row => {
                const values = row.split(',');
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header.trim()] = values[index].trim();
                });
                return obj;
            });
            setCsvData(objects);
        };
        reader.readAsText(file);
    };

    React.useEffect(() => {
        fetch(postsFile)
          .then(response => response.blob())
          .then(file => readFile(file))
          .catch(error => console.error('Error reading CSV:', error));
      }, []);

    return (
        <motion.div className="blog"
            variants={blog_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
        <div className="blog__container container">
            <div className="row">
                <AnimatePresence initial={false}>
                    {
                        csvData.map((post, index) => <Post key={index} post={post} />)
                    }
                </AnimatePresence>
            </div>
        </div>
        </motion.div>
    )
}

export default Blog;
