import { Card, Col, Row } from "react-bootstrap";
import BuildCards from "../components/BuildCards";

function BuildPage() {
  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <BuildCards />
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                Build Summary
              </Card.Title>
              <Row>
                <Col md={6} className="text-center">
                  <p className="text-muted mb-1">Total Price</p>
                  <h3>xx</h3>
                </Col>
                <Col md={6} className="text-center">
                  <p className="text-muted mb-1">Components</p>
                  <h3>xx</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default BuildPage;
