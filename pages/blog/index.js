import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import Image from 'next/image';
import banner from '../../assets/Images/banner.jpg';
import punjab from '../../assets/Images/punjab.jpg';
import { useRouter } from 'next/router';
import Subscribe from "../../components/Subscribe";

const Blog = () => {
    const router = useRouter();
    return (
        <>
            <Header head='Blogs' />
            <Container className='mt-5'>
                <Row>
                    <Col md={5} xs={12}>
                        <h2> CATEGORIES </h2>
                        <div className="finalfooterline mt-3">
                            Bonds
                        </div>
                        <div className="finalfooterline mt-3">
                            Finance
                        </div>
                        <div className="finalfooterline mt-3">
                            Current Affairs
                        </div>
                        <div className="finalfooterline mt-3">
                            Sports
                        </div>
                        <div className="finalfooterline mt-3">
                        </div>
                    </Col>
                    <Col md={7} xs={12}>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Card key={idx} className='mt-4 mb-3'>
                                <Image variant="top" src={punjab} alt={"Blog Image"} />
                                <Card.Body>
                                    <Card.Title>Punjab Election Result 2022, Constituency-wise, Live Counting</Card.Title>
                                    <Card.Text>
                                    Punjab Election Result 2022 is going to be announced on 10th March 2022 by the Punjab State Election Commission on their official website. Residents of Punjab will be able to check the Punjab Assembly Election Result 2022 by visiting the official website of Punjab State Election Commission on the counting day. Counting of the votes is going to take place on 10th March 2022 from the morning, every individual will be able to check the result of Punjab Assembly Election 2022 on the counting day. Through this writing you are going to get the detailed information regarding the checking the Punjab Legislative Assembly Election Result...
                                    </Card.Text>
                                    <Button variant="primary" className="blogButton" onClick={() => router.push(`/blog/1`)}>Read More</Button>
                                </Card.Body>
                            </Card>

                        ))}
                    </Col>
                </Row>
            </Container>
            <Subscribe />
        </>
    )
};

export default Blog;
