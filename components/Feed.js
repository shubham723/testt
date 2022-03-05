import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import banner from '../assets/Images/banner.jpg';
import { useRouter } from 'next/router';
import Ukraine from '../assets/Images/ukraine.jpg';
import Jammu from '../assets/Images/jammu.jpg';
import Sports from '../assets/Images/sports.jpg';
import Zirakpur from '../assets/Images/zirakpur.jpg';
import Gangubai from '../assets/Images/gangubai.jpg';

const Feed = () => {
    const router = useRouter();
    return (
        <>
            <Container>
                <Row xs={12} md={12}>
                    <h2 className='text-center'>READ OUR TRENDING ARTICLE </h2>
                    <section className='text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>
                </Row>

                <Row xs={12} md={12} className='mt-2'>
                    <Col className="mt-4">
                        <Image src={Ukraine} height={300} alt={'blog'} />
                    </Col>
                    <Col className='mt-4'>
                        <h4>Russia Temporary Ceasefire Begins in Mariupol</h4>
                        <p>
                            Ukraine’s strategic port city of Mariupol is under a “blockade” by the Russian army after days of “ruthless” attacks, its mayor said on Saturday, calling for the establishment of a humanitarian corridor. “For now, we are looking for solutions to humanitarian problems and all possible ways to get Mariupol out of the blockade,” said Vadim Boychenko...
                        </p>
                        {/* <Image className="authorImg" src={banner} height={60} width={80} alt={"author"} /> by Shubham <br /> */}
                        <Button className="blogButton" onClick={() => router.push(`/blog/1`)}> View More </Button>
                    </Col>
                </Row>

                <Row xs={12} md={12} className='mt-2'>
                    <Col className='mt-4'>
                        <h4>BSF opens fire at suspected Pakistani drone along IB in Jammu</h4>
                        <p>
                            This comes 10 days after police recovered a huge consignment of arms and ammunition dropped by the Lashkar-e-Taiba (LeT) and its offshoot, The Resistance Front, by a drone in the same area in R S Pura sector.<br />The officials said BSF troops fired around 18 rounds within a span of 10 minutes after picking up the movement of the drone...
                        </p>
                        {/* <Image className="authorImg" src={banner} height={60} width={80} alt={"author"} /> by Shubham <br /> */}
                        <Button className="blogButton" onClick={() => router.push(`/blog/1`)}> View More </Button>
                    </Col>
                    <Col className="mt-4">
                        <Image src={Jammu} height={500} alt={'blog'} />
                    </Col>

                </Row>


            </Container>

            {/* Categories */}
            <Container className="mt-5">
                <h2 className='text-center'>POPULAR CATEGORIES</h2>
                <section className='text-center'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </section>

                <Row xs={1} md={2} className="g-4 mt-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Image variant="left" src={Sports} height={300} alt={'Top Categories'} />
                                <Card.Body>
                                    <Card.Title>
                                        Sports <br />
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
                        <Image variant="left" src={Zirakpur} alt={'Top Categories'} />
                    </Col>
                    <Col className="mb-3">
                        <h3> Two new flyovers in the pipeline for Zirakpur </h3>
                        <p className="color">7th March 2022</p>
                        <p>To decongest roads between Zirakpur and Ambala, two flyovers are now in the pipeline. One flyover shall come up near Singhpura Chowk while the other shall come near Ghaggar river. The project is estimated to be completed at a cost of Rs 48 crore...</p>
                        <Button className="blogButton" onClick={() => router.push(`/blog/1`)}>Read More</Button>
                    </Col>
                </Row>

                <Row xs={12} md={12} className="g-4 mt-2">
                    <Col>
                        <h3> Gangubai Kathiawadi box office collection: Alia Bhatt film crosses Rs 100 crore mark worldwide </h3>
                        <p className="color">4th March 2022</p>
                        <p>Alia Bhatt’s Gangubai Kathiawadi is unstoppable at the box office. The film, which released on February 25, has been performing steadily at the box office. On Friday, the Sanjay Leela Bhansali-directed film crossed the Rs 100 crore milestone at the global box office after a week in theatres...</p>
                        <Button className="blogButton" onClick={() => router.push(`/blog/1`)}>Read More</Button>
                    </Col>
                    <Col>
                        <Image variant="left" src={Gangubai} alt={'Top Categories'} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Feed