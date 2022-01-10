// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

export default function Promo(promo) {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} className="promo">
                <div className="modal-close">
                    <a onClick={handleClose}>
                        <FontAwesomeIcon icon={['fas', 'times']} />
                    </a>
                </div>
                <Link href={promo.mobile[0].image.link} passHref>
                    <Modal.Body>
                        <LazyLoadImage
                            src={promo.mobile[0].image.src}
                            alt={promo.mobile[0].image.alt}
                            className="d-block d-lg-none promo-image"
                        />
                        <LazyLoadImage
                            src={promo.desktop[0].image.src}
                            alt={promo.desktop[0].image.alt}
                            className="d-none d-lg-block promo-image"
                        />
                    </Modal.Body>
                </Link>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link href="/book-now" passHref>
                        <Button variant="primary">
                            Book Now
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
