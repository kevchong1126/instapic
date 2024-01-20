import React from 'react'
import styles from './PostPhoto.module.scss'

/*Components*/
import PostsPhoto from '../components/reels/PostsPhoto'

const PostPhoto = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <PostsPhoto />
        </div>
    </div>
  )
}

export default PostPhoto