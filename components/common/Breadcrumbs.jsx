// React Components
import { Breadcrumb, Container, Row } from 'react-bootstrap'


export default function breadcrumbs(page) {
    return (
        <>
        <Container>
            <Row className="block">
                <Breadcrumb className="breadcrumbs">
                    {page.breadcrumbs.map(({ page, link }, index) => (
                        <Breadcrumb.Item key={index} href={link}>
                            {page}
                        </Breadcrumb.Item>
                    ))}
                    <Breadcrumb.Item active>
                        {page.finalcrumb}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        </Container>
        </>

    )
}