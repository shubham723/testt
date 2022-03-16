import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const router = useRouter();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navTop'>
                <Container>
                    <Navbar.Brand className="pointer" onClick={() => router.push('/')}>
                        Maginite
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className="pointer" onClick={() => router.push('/blog/1')}>
                                Blog
                            </Nav.Link>
                            <Nav.Link className="pointer" onClick={() => router.push('/contact')}>
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
