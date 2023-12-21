import './blog.css'
import { motion } from 'framer-motion'

import Post from './Post'


const Blog = function() {
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
                        posts.map((post, index) => <Post key={index} post={post} />)
                    }
                </AnimatePresence>
            </div>
        </div>
        </motion.div>
    )
}

export default Blog;
