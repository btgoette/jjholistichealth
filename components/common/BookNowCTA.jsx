// React Components
import Link from 'next/link'
import { Button } from 'react-bootstrap'


export default function BookNowCTA() {
    return (
        <Link
            href="/forms/book-now" passHref>
            <Button>
                Book Your Free Consultation
            </Button>
        </Link>
    )
};
