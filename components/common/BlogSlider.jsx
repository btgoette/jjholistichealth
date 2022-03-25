/* About Testimonials Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BlogSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var Blog = [
    {
      src: "/images/pages/blog/preview/herbal-shield.webp",
      alt: "Herbal Shield",
      title: "J&J Nutritional Therapy Herbal Shield",
      href: "/blog/posts/j-and-j-herbal-shield",
    },
    {
      src: "/images/pages/blog/preview/the-adverse-effects-of-stress-on-the-adrenal-gland.webp",
      alt: "The Adverse Effects of Stress on the Adrenal Gland",
      title: "The Adverse Effects of Stress",
      href: "/blog/posts/the-adverse-effects-of-stress-on-the-adrenal-gland",
    },
    {
      src: "/images/pages/blog/preview/cbd-oil-therapy.webp",
      alt: "CBD Oil Therapy",
      title: "CBD Oil Therapy",
      href: "/blog/posts/cbd-oil-therapy",
    },
    {
      src: "/images/pages/blog/preview/top-6-pituitary-herbs-for-a-healthy-pituitary-gland.webp",
      alt: "Top 6 Pituitary Herbs for a Healthy Pituitary Gland",
      title: "Top 6 Pituitary Herbs",
      href: "/blog/posts/top-6-pituitary-herbs-for-a-healthy-pituitary-gland",
    },
    {
      src: "/images/pages/blog/preview/benefits-of-aromatherapy.webp",
      alt: "Aromatherapy",
      title: "Aromatherapy",
      href: "/blog/posts/benefits-of-aromatherapy",
    },
  ];

  return (
    <div fluid className="blog-slider">
      <Slider {...settings}>
        {Blog.map(({ src, alt, title, href }, i) => (
          <a key={i} href={href}>
            <div>
              <figure>
                <img src={src} alt={alt} />
                <p>{title}</p>
              </figure>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}
