import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    return (
        <>
            <Header head='Contact' />
            <Container fluid style={{ backgroundColor: 'white' }}>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="text-center mt-3">
                                GET IN TOUCH WITH US
                            </h4>
                            <h6 className="text-center">
                                Find Our Contact Details To Get in Touch With us.
                            </h6>
                            <div className="footerText mt-4">
                                <div className="t">
                                    <AiOutlineMail className='color'/> admin@maginite.com
                                </div>
                                <div className="t">
                                    <BsFillTelephoneFill className='color'/> 123456789
                                </div>
                                <div className="t">
                                    <BsGeoAltFill className='color'/> Dummy Address
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container className='mb-5'>
                <Row>
                    <Col>
                        <h5 className="text-center mt-5"> LEAVE A COMMENT </h5>
                        <p className="text-center">
                            Leave us you message, suggestion and name the topics you are interested. So, that we can better serve you.
                        </p>
                    </Col>
                </Row>

                <Row className="submitForm">
                    <Form className="mt-3 mb-5">
                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder="Your name" />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Email address..." name="email" />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Number" name="number" />
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label></Form.Label> */}
                                <Form.Control as="textarea" rows={3} placeholder="Enter your message here..." />
                            </Form.Group>
                        </Row>
                        <Row className="submitContactDiv">
                            <Button className='text-center blogButton' id="submitContactForm"> Submit </Button>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </>
    )
};

export default Contact;