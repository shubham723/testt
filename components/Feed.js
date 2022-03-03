import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import banner from '../assets/Images/banner.jpg';

const Feed = () => {
    return (
        <>
            <Container>

                <Row xs={12} md={12}>
                    <h2 className='text-center'>READ OUR TRENDING ARTICLE </h2>
                    <section className='text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>
                </Row>

                <Row xs={12} md={12} className='mt-2'>
                    <Col className="mt-4">
                        <Image src={banner} height={900} alt={'blog'} />
                    </Col>
                    <Col className='mt-4'>
                        <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                        </p>
                        {/* <Image className="authorImg" src={banner} height={60} width={80} alt={"author"} /> by Shubham <br /> */}
                        <Button> View More </Button>
                    </Col>
                </Row>

                <Row xs={12} md={12} className='mt-2'>
                    <Col className='mt-4'>
                        <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                        </p>
                        {/* <Image className="authorImg" src={banner} height={60} width={80} alt={"author"} /> by Shubham <br /> */}
                        <Button> View More </Button>
                    </Col>
                    <Col className="mt-4">
                        <Image src={banner} height={900} alt={'blog'} />
                    </Col>

                </Row>


            </Container>

            {/* Categories */}
            <Container className="mt-5">
                <h2 className='text-center'>Popular Categories</h2>
                <section className='text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>

                <Row xs={1} md={2} className="g-4 mt-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Image variant="left" src={banner} alt={'Top Categories'} />
                                <Card.Body>
                                    <Card.Title>
                                        Card title <br />
                                        <small className="color">7 Posts</small>
                                    </Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Footer className="color point">
                                        Read More
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="mt-5">
                <h2 className='text-center'>LATEST POST</h2>
                <section className='text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>

                <Row xs={12} md={12} className="g-4 mt-2">
                    <Col>
                        <Image variant="left" src={banner} alt={'Top Categories'} />
                    </Col>
                    <Col className="mb-3">
                        <h3> Card title </h3>
                        <p className="color">7th March 2022</p>
                        <p>This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer</p>
                        <Button>Read More</Button>
                    </Col>
                </Row>

                <Row xs={12} md={12} className="g-4 mt-2">
                    <Col>
                        <h3> Card title </h3>
                        <p className="color">4th March 2022</p>
                        <p>This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer</p>

                        <Button>Read More</Button>
                    </Col>
                    <Col>
                        <Image variant="left" src={banner} alt={'Top Categories'} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Feed