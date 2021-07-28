import React, {useState} from 'react'
import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'
import SoundPicker from './SoundPicker'
import ESoundPicker from './ESoundPicker'

const Header = (props) => {
    // Hooks used here to reproduce React-bootstrap example code
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                        <Navbar.Brand className="text-light">Meditation Timer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Button variant="outline-light" onClick={handleShow}>
                            Settings
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                            <br />

                            <p>Timer start sound:</p>  <SoundPicker data={props}/> 
                            <p>Timer finish sound:</p>  <ESoundPicker data={props}/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="outline-dark" onClick={handleClose}>
                                Close 
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header