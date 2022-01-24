// React Components
import { Breadcrumb, Row } from 'react-bootstrap'


export default function breadcrumbs(page) {
    return (
        <>
            <Row>
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
        </>
    )
}