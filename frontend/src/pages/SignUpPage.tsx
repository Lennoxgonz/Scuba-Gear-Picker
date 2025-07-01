import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    const doPasswordsMatch = formData.password === passwordConfirm;
    setPasswordsMatch(doPasswordsMatch);

    setValidated(true);

    if (form.checkValidity() === true && doPasswordsMatch) {
      try {
        const result = await registerUser(formData);
        console.log("Registration successful:", result);
        alert("Registration successful! You can now sign in.");
        navigate("/signin")
      } catch (error) {
        console.error("Registration failed:", error);
        if (error instanceof Error) {
          alert(`Registration failed: ${error.message}`);
        } else {
          alert("An unknown registration error occurred.");
        }
      }
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Form noValidate onSubmit={handleSubmit}>
            {/* Username Field */}
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                minLength={8}
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                isInvalid={validated && formData.password.length < 8}
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 8 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group controlId="passwordConfirm" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                isInvalid={validated && !passwordsMatch}
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match.
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
