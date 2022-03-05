import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import banner from '../assets/Images/banner.jpg';
import blog from '../assets/Images/blog.jpg';

const Header = ({ head }) => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <Container fluid>
                <Row>
                    <Col className="headersection" md={6} xs={12}>
                        <h1> {head} </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </Col>
                    <Col md={6} xs={12}>
                        <Image src={blog} alt="header" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Header;