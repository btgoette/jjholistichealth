// React Components
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

export default function Jumbotron(promo) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="jumbotron jumbotron-mobile">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect}>
                    {promo.mobile.map(({ image }, i) => (
                        <Carousel.Item key={i}>
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
            <div className="jumbotron jumbotron-desktop">
                <Carousel prevLabel={null} nextLabel={null} fade activeIndex={index} onSelect={handleSelect}>
                    {promo.desktop.map(({ image }, i) => (
                        <Carousel.Item key={i}>
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