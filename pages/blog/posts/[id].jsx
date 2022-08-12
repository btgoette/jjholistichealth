import Link from "next/link";

import {
  FacebookShareButton,
  FacebookIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Main from "components/layout/Main";
import BookNowCTA from "components/common/BookNowCTA";
import FDA from "components/common/FDA";
import RecentPosts from "components/blog/RecentPosts";
import Nav from "components/layout/JJNav.jsx";

// Custom Styles, Content, and Data

import page from "public/content/en_US/Page/Blog/blog.content";
import { getAllPostIds, getPostData } from "public/getAllPosts";
import { post } from "jquery";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const BlogPost = ({ postData }) => {
  return (
    <>
      <Nav/>
      <Head {...postData} />
      <Main>
        <div className="blog">
          <Container>
            <Row className="breadcrumbs">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
                <Breadcrumb.Item active>{postData.title}</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
          </Container>

          <section className="blogPost">
            <Container>
              <Row>
                <Col lg={9}>
                  <Row>
                    <Col className="blogPostSection">
                      <div className="blogHead">
                        <h1 className="blogTitle">{postData.title}</h1>
                        <span className="blogDate">{postData.formalDate}</span>
                      </div>
                      <figure className="blogImage">
                        <LazyLoadImage
                          src={postData.banner}
                          alt={postData.title}
                        />
                      </figure>
                      <div className="share">
                        <strong>Share:&nbsp;&nbsp;</strong>
                        <FacebookShareButton
                          url={postData.url}
                          quote={postData.description}
                          hashtag={postData.tags}
                        >
                          <FacebookIcon size={32} borderRadius={20} />
                        </FacebookShareButton>
                        <PinterestShareButton
                          url={postData.url}
                          media={postData.description}
                        >
                          <PinterestIcon size={32} borderRadius={20} />
                        </PinterestShareButton>
                        <RedditShareButton
                          url={postData.url}
                          title={postData.description}
                          windowWidth={660}
                          windowHeight={460}
                        >
                          <RedditIcon size={32} borderRadius={20} />
                        </RedditShareButton>
                        <TumblrShareButton
                          url={postData.url}
                          title={postData.description}
                        >
                          <TumblrIcon size={32} borderRadius={20} />
                        </TumblrShareButton>
                        <TwitterShareButton
                          url={postData.url}
                          title={postData.description}
                        >
                          <TwitterIcon size={32} borderRadius={20} />
                        </TwitterShareButton>
                        <WhatsappShareButton
                          url={postData.url}
                          title={postData.description}
                          separator=":: "
                        >
                          <WhatsappIcon size={32} borderRadius={20} />
                        </WhatsappShareButton>
                        <LinkedinShareButton url={postData.url}>
                          <LinkedinIcon size={32} borderRadius={20} />
                        </LinkedinShareButton>
                      </div>
                      <article
                        dangerouslySetInnerHTML={{
                          __html: postData.contentHtml,
                        }}
                      ></article>
                      <BookNowCTA />
                      <FDA />
                    </Col>
                  </Row>
                </Col>
                <RecentPosts {...page.block.recentPosts} />
              </Row>
            </Container>
          </section>
        </div>
      </Main>
    </>
  );
}

export default BlogPost;