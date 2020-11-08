import React from "react";
import Navbar from 'react-bootstrap/esm/Navbar';

function Head(props) {
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Employee Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>)


}

export default Head