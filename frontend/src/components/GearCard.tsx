import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Gear } from "../types/gear"; 

interface GearCardProps {
  gear: Gear;
}

function GearCard() {
  return (
    <>
      <Container>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src="https://placehold.co/100x100" />
          <Card.Body>
            <Card.Title>Item Name</Card.Title>
          </Card.Body>
          <ListGroup>
            <ListGroup.Item>Price: </ListGroup.Item>
            <ListGroup.Item>Category: </ListGroup.Item>
          </ListGroup>
          <Button href="purchase.link">Buy Now</Button>
        </Card>
      </Container>
    </>
  );
}

export default GearCard;
