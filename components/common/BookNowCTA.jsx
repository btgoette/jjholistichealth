// React Components
import Link from 'next/link'
import { Button } from 'react-bootstrap'


const BookNowCTA = () => {
    return (
        <Link
            href="/forms/book-now" passHref>
            <Button className="book-now-cta">
                Book Your Free Consultation
            </Button>
        </Link>
    )
};

export default BookNowCTA;
