// React Components
import Link from 'next/link'
import { Col } from 'react-bootstrap'

// Custom Styles and Data
import styles from 'scss/pages/blog.module.scss'
import data from 'public/content/en_US/data/blog/blogPosts.data'


export default function RecentPosts() {

    return (
        <>
            <Col lg={3} className={styles.recentPostsSection}>
                <div className={styles.recentPosts}>
                    <h2>Recent Posts</h2>
                    {data.posts.map(({ id, title }, i) => (
                        <Link key={i} href={`/blog/posts/${id}`}>
                            {title}
                        </Link>
                    ))}
                </div>
            </Col>
        </>
    )
}