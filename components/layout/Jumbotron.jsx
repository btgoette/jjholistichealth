// React Components
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

// Custom Data
import content from 'public/content/en_US/components/layout/jumbotron/jumbotron.content'

export default function Jumbotron() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        {/* Mobile Jumbotron */}
            <div className="jumbotron jumbotron-mobile">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect} variant="dark">
                    {content.mobile.map(({ image }, i) => (
                        <Carousel.Item key={i} interval={3000}>
                            <a href={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-100"
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Desktop Jumbotron */}
            <div className="jumbotron jumbotron-desktop">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect} variant="dark">
                    {content.desktop.map(({ image }, i) => (
                        <Carousel.Item key={i} interval={3000}>
                            <a href={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-100"
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
       
    )

}