// React Components
import Link from 'next/link'
import { Col } from 'react-bootstrap'

// Custom Styles and Data
import styles from 'scss/pages/blog.module.scss'

export default function RecentPosts(block) {

    return (
        <>
            <Col lg={3} className={styles.recentPostsSection}>
                <div className={styles.recentPosts}>
                    <h2>Recent Posts</h2>
                    {block.posts.map(({ id, title }, i) => (
                        <Link key={i} href={`/blog/posts/${id}`}>
                            {title}
                        </Link>
                    ))}
                </div>
            </Col>
        </>
    )
}