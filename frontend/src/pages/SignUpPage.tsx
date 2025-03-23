import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    const doPasswordsMatch = password === passwordConfirm;
    setPasswordsMatch(doPasswordsMatch);

    setValidated(true);

    if (form.checkValidity() === true && doPasswordsMatch) {
      console.log("Form is valid");
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                isInvalid={
                  validated &&
                  passwordConfirm !== "" &&
                  password !== passwordConfirm
                }
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={validated && (!password || password.length < 8)}
              />
              <Form.Control.Feedback type="invalid">
                {!password
                  ? "Please enter a password."
                  : "Password must be at least 8 characters long."}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="passwordConfirm" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                // Only use isInvalid, not isValid
                isInvalid={validated && (!passwordsMatch || !passwordConfirm)}
              />
              <Form.Control.Feedback type="invalid">
                {!passwordConfirm
                  ? "Please confirm your password."
                  : "Passwords do not match."}
              </Form.Control.Feedback>
            </Form.Group>

            <p className="text-center">
              <Link to="/signin">
                Already have an account? Click here to sign in.
              </Link>
            </p>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpPage;
