// React Components
import { Breadcrumb, Container, Row } from 'react-bootstrap'

const Breadcrumbs = (page) => {
    return (
        <>
        <Container>
            <Row className="breadcrumbs">
                <Breadcrumb>
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

export default Breadcrumbs;