import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const TopNav = () => {
    return (<Navbar sticky="top" expand="lg" variant="dark" bg="dark">
        <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
    </Navbar>
    )
}
export default TopNav