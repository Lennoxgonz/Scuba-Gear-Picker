import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignInPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    setValidated(true);
    if (form.checkValidity() === true) {
      console.log("Form is valid");
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>

            <p className="text-center">
              <Link to="/signup">
                Don't have an account? Click here to sign up.
              </Link>
            </p>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
