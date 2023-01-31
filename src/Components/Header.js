import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://i.postimg.cc/1RDtgRmV/943-9437060-elegant-traditional-restaurant-logo-design-for-fork-graphic.png"
                            width="65"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        Fork & Spoon
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header