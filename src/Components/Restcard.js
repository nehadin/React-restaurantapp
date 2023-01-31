import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({ data }) {
        return (
            // using empty fragment instead of div
            <Col sm={12} md={6} lg={4} xl={3} className="p-4">

                <Link style={{ textDecoration: "none" }} to={`view-restaurant/${data.id}`}>

                    <Container>
                        <Card className='text-center mt-4 mb-3' style={{ width: '100%' }}>
                            <Card.Img variant="top" src={data.photograph} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    {data.address}<br />
                                    {data.neighborhood}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Container>
                </Link>
            </Col>
        )
    }

export default Restcard