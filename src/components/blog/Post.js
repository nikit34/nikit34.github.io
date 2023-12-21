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
            <div className="post__container">
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Post;
