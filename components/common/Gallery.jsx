// React Components
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Row, Col } from 'react-bootstrap'
// Custom Data
import gallery from 'public/content/en_US/data/gallery/gallery.data'


export default function Gallery() {
    return (

        <Row className="photo-gallery">
            <Col className="photos rounded">
                {
                    gallery.images.map(({ order, image, fullImage, alt }, i) => (
                        <div key={i} className={order}>
                            <Link href={fullImage} passHref>
                                <LazyLoadImage
                                    src={image}
                                    alt={alt}
                                />
                            </Link>
                        </div>
                    ))}

            </Col>
        </Row>
    )
}