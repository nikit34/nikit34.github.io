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
            <a className="post__container container" href={link}>
                <div className="row">
                    <div className="col">
                        <p>{title}</p>
                    </div>
                    <div className="col">
                        <img className="post_img" src={`posts/${img}`}></img>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}

export default Post;
