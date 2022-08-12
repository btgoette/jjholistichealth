import { Container, Row, Col } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialVideo = () => {
  // Slick Slider Settings
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  var testimonialVideoData = {
    testimonialVideo: [
      {
        src: "/videos/posters/jj-testimonial-mother-daughter.webp",
        alt: "Mother Daughter",
      },
      {
        src: "/videos/posters/jj-testimonial-congestion.webp",
        alt: "Congestion",
      },
      {
        src: "/videos/posters/jj-testimonial-diet.webp",
        alt: "Diet",
      },
      {
        src: "/videos/posters/jj-testimonial-stomach.webp",
        alt: "Stomach",
      },
      {
        src: "/videos/posters/jj-testimonial-thyroid.webp",
        alt: "Thyroid",
      },
      {
        src: "/videos/posters/jj-testimonial-rash.webp",
        alt: "Rash",
      },
      {
        src: "/videos/posters/jj-testimonial-soap.webp",
        alt: "Soap",
      },
      {
        src: "/videos/posters/jj-testimonial-hair.webp",
        alt: "Hair",
      },
    ],
  };

  // Video State
  const [video, setVideo] = useState(0);

  var videoList = {
    videos: [
      {
        poster: "/videos/posters/jj-testimonial-mother-daughter.webp",
        src: "/videos/jj-testimonial-mother-daughter.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-congestion.webp",
        src: "/videos/jj-testimonial-congestion.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-diet.webp",
        src: "/videos/jj-testimonial-diet.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-stomach.webp",
        src: "/videos/jj-testimonial-stomach.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-thyroid.webp",
        src: "/videos/jj-testimonial-thyroid.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-rash.webp",
        src: "/videos/jj-testimonial-rash.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-soap.webp",
        src: "/videos/jj-testimonial-soap.mp4",
      },
      {
        poster: "/videos/posters/jj-testimonial-hair.webp",
        src: "/videos/jj-testimonial-hair.mp4",
      },
    ],
  };

  return (
    <section className="testimonial-video-section pt-0">
      <Container>
        <Row>
          <Col>
            <h1>Our Testimonials</h1>
          </Col>
        </Row>
        <div className="video">
          <Player
            playsInline
            poster={videoList.videos[video].poster}
            src={videoList.videos[video].src}
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
        <Row className="testimonial-video-slider">
          <Slider {...settings}>
            {testimonialVideoData.testimonialVideo.map(({ src, alt }, i) => (
              <div
                className="testimonial-video-thumbnail"
                key={i}
                onClick={() => setVideo(i)}
              >
                <figure className="testimonial-video-image">
                  <LazyLoadImage src={src} alt={alt} />
                </figure>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialVideo;
