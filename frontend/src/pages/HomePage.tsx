import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Container fluid className="bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <h1 className="display-4 fw-bold">Build Your Perfect Dive Kit</h1>
                            <p className="lead">Customize and compare diving equipment to create your ideal setup</p>
                            <Button variant="light" size="lg" href="/build" className="mt-3">
                                Start Building
                            </Button>
                        </Col>
                        <Col md={6} className="mt-4 mt-md-0">
                            {/* Placeholder for hero image */}
                            <img 
                                src="" 
                                alt="Diving Equipment Picture" 
                                className="img-fluid rounded-3 shadow"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Featured Equipment Section */}
            <Container className="py-5">
                <h2 className="text-center mb-4">Featured Equipment</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="" alt="Picture of a diving mask" />
                            <Card.Body>
                                <Card.Title>Diving Masks</Card.Title>
                                <Card.Text>
                                    Explore our selection of high-quality diving masks for optimal visibility.
                                </Card.Text>
                                <Button variant="outline-primary">View Masks</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="/placeholder-regulator.jpg" />
                            <Card.Body>
                                <Card.Title>Regulators</Card.Title>
                                <Card.Text>
                                    Find the perfect regulator for your diving needs and experience level.
                                </Card.Text>
                                <Button variant="outline-primary">View Regulators</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src="/placeholder-computer.jpg" />
                            <Card.Body>
                                <Card.Title>Dive Computers</Card.Title>
                                <Card.Text>
                                    Stay safe with our advanced dive computers and monitoring systems.
                                </Card.Text>
                                <Button variant="outline-primary">View Computers</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Why Choose Us Section */}
            <Container fluid className="bg-light py-5">
                <Container>
                    <h2 className="text-center mb-5">Why Choose Our Builder</h2>
                    <Row className="g-4">
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <i className="bi bi-gear-fill fs-1 text-primary mb-3"></i>
                                <h4>Customizable Builds</h4>
                                <p>Create the perfect combination of gear tailored to your needs</p>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                                <h4>Quality Equipment</h4>
                                <p>Only the best brands and most reliable diving equipment</p>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <i className="bi bi-chat-dots-fill fs-1 text-primary mb-3"></i>
                                <h4>Expert Support</h4>
                                <p>Get guidance from experienced divers and equipment specialists</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Call to Action Section */}
            <Container fluid className="bg-primary text-white text-center py-5">
                <h2 className="mb-4">Ready to Build Your Kit?</h2>
                <p className="lead mb-4">Start customizing your perfect diving equipment setup today</p>
                <Button variant="light" size="lg" href="/build">
                    Start Building Now
                </Button>
            </Container>
        </>
    );
}

export default HomePage;