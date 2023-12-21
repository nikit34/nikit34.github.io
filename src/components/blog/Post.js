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
            <div className="col-lg-6">
                <div className="skill-card">
                    <div className="row">
                        <div className="col-2">
                            <img src={icon} alt="icon" className="skill-card__icon" />
                        </div>
                        <div className="col-10">
                            <h6 className="skill-card__title">{title}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="skill-card__content">{about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Post;
