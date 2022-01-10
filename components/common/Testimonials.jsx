// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Row } from 'react-bootstrap'

// Slick Slider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


export default function TeamMembers() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    var testimonialData = {
        'testimonial': [
            {
                'src': '/images/pages/about/testimonials/anya-sifton.webp',
                'alt': 'Anya Sifton',
                'name': 'Anya Sifton',
                'content': "Krystal is very knowledgeable when it comes to nutrition and self-care. I thought that I had a pretty solid understanding about what is good for you and what is not when it comes to nutrition but Krystal has taught me so much! She helped me in so many areas of my health and I feel great!"
            },
            {
                'src': '/images/pages/about/testimonials/dominique-wong.webp',
                'alt': 'Dominque Wong',
                'name': 'Dominique Wong',
                'content': "I tried the shampoo from Johnson & Johnson holistic and I really like how soft my hair was after using it. I have very curly hair and I left it soft and easy to detangle. Thank you Krystal"
            },
            {
                'src': '/images/pages/about/testimonials/pasha-oliver-carter.webp',
                'alt': 'Pasha Oliver-Carter',
                'name': 'Pasha Oliver-Carter',
                'content': "I am so proud of Krystal Johnson and the creation of Johnson & Johnson Nutritional Practice. Krystal is very knowledgeable and professional. She believes in a holistic approach to solving health challenges, and I love that. She practices health care vs. sick care."
            },
            {
                'src': '/images/pages/about/testimonials/roy-griffin.webp',
                'alt': 'Roy Griffin',
                'name': 'Roy Griffin',
                'content': "Johnson & Johnson I want to thank you, for helping my family and friends live better with their day to day lives. They are not experiencing the same pain and issues that they had before being introduced to Johnson Holistic Nutritional Therapy. It also help a young guy like myself sleep better. Thank you again… Highly recommend!!!!!”"
            }
        ]
    };

    return (

        <>

            <Row className="custom-row">
                <Slider {...settings}>
                    {
                        testimonialData.testimonial.map(({ src, alt, name, content }, i) => (
                            <div key={i}>
                                <div className="testimonial-card">
                                    <figure className="testimonial-image">
                                        <LazyLoadImage
                                            src={src}
                                            alt={alt}
                                            width="150"
                                            height="150"
                                        />
                                    </figure>
                                    <p className="testimonial-text">
                                        &ldquo;
                                        {content}
                                        &rdquo;
                                    </p>
                                    <p className="h5 testimonial-name">
                                        &ndash;&nbsp;{name}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </Slider>
            </Row>
        </>
    );
}