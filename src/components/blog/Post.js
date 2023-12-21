import './post.css'
import { motion } from 'framer-motion'


const Post = function({ post: { title, link, img } }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 1, scale: 0.9 }}
            exit={{ opacity: 1, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="blog-post"
            key={title}
        >
            <a className="post__container" href="link">
                <div className="row">
                    <p>{title}</p>
                    <img src={`posts/${img}`}></img>
                </div>
            </a>
        </motion.div>
    )
}

export default Post;
