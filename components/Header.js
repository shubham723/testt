import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Image from 'next/image';
import banner from '../assets/Images/banner.jpg';
import blog from '../assets/Images/blog.jpg';

const Header = ({ head }) => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <header>
                {/* <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@magnite.com</a></li>
                                    <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Dummy Address </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a href="tel:+23-345-67890" >
                                        <span>Call Now : </span>
                                        <span className="h4">*******</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Magnitie</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Nav className="d-flex">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                        <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

                                        <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <Nav.Link href="">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
};

export default Header;