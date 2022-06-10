// React Components
import Link from 'next/link'
import { Col } from 'react-bootstrap'

const RecentPosts = (block) => {

    return (
        <>
            <Col lg={3} className="recentPostsSection">
                <div className="recentPosts">
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

export default RecentPosts;