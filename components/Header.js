import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = ({ settings }) => {
    console.log(settings);
    const router = useRouter();
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <header>
                <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>{settings?.email}</a></li>
                                    <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i> {settings?.address} </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a href="tel:+23-345-67890" >
                                        <span>Call Now : </span>
                                        <span className="h4"> {settings?.contact} </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand onClick={() => router.push('/')} className='head'>
                            <Image src={`http://3.88.73.172:3001/${settings?.logo}`} height={50} width={50} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Nav className="d-flex">
                                <Nav.Link onClick={() => router.push('/about')}>About Us</Nav.Link>
                                <Nav.Link onClick={() => router.push('/blog')}>Blogs</Nav.Link>
                                <Nav.Link onClick={() => router.push('/contact')}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
};

export default Header;
