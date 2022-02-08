// React Components
import Link from "next/link"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'
import RecentPosts from 'components/blog/RecentPosts'

// Custom Styles and Content
import styles from 'scss/pages/blog.module.scss'
import content from 'public/content/en_US/pages/blog/blog.content'
import { getSortedPostsData } from 'public/getAllPosts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogIndexPage({ allPostsData }) {

  return (

    <>

      <Head {...content} />

      <div className={styles.blog}>

        <Container fluid className={styles.blogPosts}>
          <Container>
            <Row>
              <Breadcrumbs {...content} />
            </Row>
            <Row>
              <Col lg={9}>
                <Row>
                  <Col>
                    <h1>J&amp;J Holistic Nutritional Blog</h1>
                  </Col>
                </Row>
                <Row>
                  {allPostsData.map(({ id, formalDate, title, preview, description }, i) => (
                    <Col key={i} md={6}>
                      <article>
                        <div className={styles.blogHead}>
                          <Link href={`/blog/posts/${id}`} passHref>
                            <a><h2 className={styles.blogTitle}>{title}</h2></a>
                          </Link>
                          <span className={styles.blogDate}>
                            {formalDate}
                          </span>
                        </div>
                        <figure className={styles.blogImage}>
                          <Link href={`/blog/posts/${id}`} passHref>
                            <a><LazyLoadImage src={preview} alt={title} /></a>
                          </Link>
                        </figure>
                        <div className={styles.blogDescription}>
                          <p>{description}</p>
                        </div>
                        <div className={styles.readMore}>
                          <Link href={`/blog/posts/${id}`} passHref>
                            <Button>Read More</Button>
                          </Link>
                        </div>
                      </article>
                    </Col>
                  ))}
                </Row>
              </Col>
              <RecentPosts />
            </Row>
          </Container>
        </Container>
      </div>
    </>
  )
}