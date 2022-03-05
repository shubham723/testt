import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../components/Header";
import Image from 'next/image';
import banner from '../../assets/Images/banner.jpg';
import shane from '../../assets/Images/shane warn.jpg';
import { BsPersonFill } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import Subscribe from "../../components/Subscribe";

const BlogDetail = () => {
    return (
        <>
            <Header head='Blog Detail'/>
            <Container className='mt-5'>
                <Row>
                    <Col md={5} xs={12}>
                        <h4> CATEGORY </h4>
                        <div className="finalfooterline mt-3">
                            Sports
                        </div>
                        <div className="finalfooterline mt-3">
                            <h6> TAGS </h6>
                        </div>
                        <div className="finalfooterline mt-3">
                            <Badge bg="#c8102e" className="mt-3 badge">Cricket</Badge>
                            <Badge bg="#c8102e" className="mt-3 badge">Fitness</Badge>
                        </div>
                        <div className="finalfooterline mt-3">
                        </div>
                    </Col>
                    <Col md={7} xs={12}>
                        <Card className='mt-4 mb-3'>
                            <Image variant="top" src={shane} height={300} alt={"Blog Image"} />
                            <Card.Footer>
                                <BsPersonFill className="color" /> Admin/<AiOutlineMessage className="color" /> 0 Comment/ <BsFillEyeFill className="color" />10 views
                            </Card.Footer>
                            <Card.Body>
                                <Card.Title>Shane Warne: Cricket Maradona, bowling Bradman, ultimate magician and a flawed genius</Card.Title>
                                <Card.Text>
                                AROUND 7.30 PM India time on Friday, the world of cricket lost not just one of its greatest cricketers but also one its greatest characters. Australian leg-spinner Shane Warne was found dead in his hotel room at Koh Samui in Thailand of a suspected heart attack. He was 52, long retired but active as a commentator, his insights on the game as rare and precious as his art.<br/>That “there was no one quite like…” is often uttered as a formality at farewells and in obituaries. But the cliche could not have been truer in Warne’s case. Few bowled leg-spin like him — 708 Test wickets and 293 ODI wickets are proof of that. Enough it would be to say that no one bowled like him, any bowler across any era.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <h3>Comments</h3>
                        <Form className="mt-3 mb-3 commentForm">
                            <Row>
                                <Col className="mt-3">
                                    <input type="text" className="form-control ms-2" placeholder="Your name" />
                                </Col>
                                <Col className="mt-3">
                                    <input type="text" className="form-control me-2 width98" placeholder="Email address..." name="email" />
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label></Form.Label> */}
                                    <Form.Control as="textarea" className='ms-2 width98' rows={3} placeholder="Enter your message here..." />
                                </Form.Group>
                            </Row>
                            <Row className="submitContactDiv">
                                <Button className='text-center blogButton mb-3' id="submitContactForm"> Submit Comment </Button>
                            </Row>
                        </Form>

                    </Col>
                </Row>
            </Container>
            <Subscribe />
        </>
    )
}

export default BlogDetail;