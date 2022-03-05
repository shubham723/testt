import { Button, Card, Form } from "react-bootstrap";

const Subscribe = () => {
    return (
        <>
            <Card className='mt-2'>
                <Card.Body>
                    <h3 className="text-center"> Subscribe to our newsletter </h3>
                    <p className="text-center">Receive the latests news, curated posts and highlights from us. We will never spam, we promise.</p>
                    <Form>
                        <Form.Group className="mb-3 text-center submitContactDiv" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" style={{ width: '50%' }} />
                            <Button className="ms-2"> Subscribe </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
};

export default Subscribe;
