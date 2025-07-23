import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInUser } from "../services/api";
import { SignInData } from "../types/SignInData";

function SignInPage() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<SignInData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    setValidated(true);
    if (form.checkValidity() === true) {
      try {
        const result = await signInUser(formData);
        console.log("Sign In successful:", result);
        alert("Sign In successful");
      } catch (error) {
        console.error("Sign In failed:", error);
        if (error instanceof Error) {
          alert(`Sign In failed: ${error.message}`);
        } else {
          alert("An unknown Sign In error occurred.");
        }
      }
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
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
