import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navTop'>
                <Container>
                    <Navbar.Brand href="#home">Maginite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link>Blog</Nav.Link>
                            <Nav.Link eventKey={2}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
};

export default Header;
