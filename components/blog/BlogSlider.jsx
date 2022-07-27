/* About Testimonials Component */

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
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
      title: "Herbal Shield",
      href: "/blog/posts/j-and-j-herbal-shield",
    },
    {
      src: "/images/pages/blog/preview/the-adverse-effects-of-stress-on-the-adrenal-gland.webp",
      alt: "The Adverse Effects of Stress on the Adrenal Gland",
      title: "The Adverse Effects of Stress",
      href: "/blog/posts/the-adverse-effects-of-stress-on-the-adrenal-gland",
    },
    {
      src: "/images/pages/blog/preview/benefits-of-aromatherapy.webp",
      alt: "Aromatherapy",
      title: "Aromatherapy",
      href: "/blog/posts/benefits-of-aromatherapy",
    },
  ];

  return (
    <div className="blog-slider">
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
};

export default BlogSlider;
