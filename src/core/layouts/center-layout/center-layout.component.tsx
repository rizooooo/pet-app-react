import React from 'react'
import { Container, Row, Col } from 'reactstrap';

interface IProps {
    children: React.ReactNode;
}

const CenterLayoutComponent = ({ children }: IProps) => {
    return (
        <Container className='h-100'>
            <Row className='h-100 align-items-center'>
                <Col >
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default CenterLayoutComponent
