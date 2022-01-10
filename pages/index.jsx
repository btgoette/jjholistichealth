// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Jumbotron from 'components/layout/Jumbotron'
import SectionHead from 'components/layout/SectionHead'
import ConditionsHome from 'components/common/ConditionsHome'

// Custom Styles and Content
import styles from 'scss/pages/home.module.scss'
import content from 'public/content/en_US/pages/index.content'


export default function Home() {

  return (

    <>

      <Head {...content}/>
      

      <div className={styles.home}>

        <Jumbotron {...content.promo}/>
        {/* <Hero {...content} /> */}

        <Container fluid className={styles.youAreWhatYouEat}>
          <Container>
            <Row className="custom-row">

              <Col lg={6} className={styles.youAreWhatYouEatImage}>
                <figure className={styles.healthyWoman}>
                  <LazyLoadImage
                    src={content.section1.block2.healthyWoman.src}
                    alt={content.section1.block2.healthyWoman.alt}
                  />
                </figure>
                <figure className={styles.healthyMan}>
                  <LazyLoadImage
                    src={content.section1.block2.healthyMan.src}
                    alt={content.section1.block2.healthyMan.alt}
                  />
                </figure>
              </Col>

              <Col lg={6}>
                <div className="content">
                  <h1>
                    {content.section1.block1.h2}
                  </h1>
                  <p>
                    {content.section1.block1.p}
                  </p>
                </div>
                <figure className={styles.fruit}>
                  <LazyLoadImage
                    src={content.section1.block1.fruit.src}
                    alt={content.section1.block1.fruit.alt}
                  />
                </figure>
              </Col>
              
            </Row>
          </Container>
        </Container>

        <SectionHead {...content.section2} />

        <ConditionsHome />

      </div>

    </>
  )
}
