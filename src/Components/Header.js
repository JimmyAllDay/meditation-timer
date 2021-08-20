import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Header = (props) => {

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                        <Navbar.Brand className="text-light">Meditation Timer</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header