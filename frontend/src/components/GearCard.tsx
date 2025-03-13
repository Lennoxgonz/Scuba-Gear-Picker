import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Gear } from "../types/gear";

interface GearCardProps {
  gear: Gear;
}

function GearCard({ gear }: GearCardProps) {
  return (
    <>
      <Container>
        <Card
          className="mb-2 border-0"
          style={{ width: "13rem", height: "30rem" }}
        >
          <Card.Img
            variant="top"
            src={
              gear.imageURL ||
              `https://placehold.co/100x100?text=${encodeURIComponent(
                gear.name
              )}`
            }
          />
          <Card.Body>
            <Card.Title>{gear.brand + " " + gear.name}</Card.Title>
          </Card.Body>
          <ListGroup
            style={{
              backgroundColor: "#F5F9FC",
            }}
          >
            <ListGroup.Item className="border border-dark border-bottom-0 rounded-0">
              Price: {gear.price}
            </ListGroup.Item>
            <ListGroup.Item className="border border-dark rounded-0">
              Category: {gear.category}
            </ListGroup.Item>
            <ListGroup.Item
              className="m-1 p-0 border-0 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#F5F9FC",
              }}
            >
              <Button
                className="buy-btn border-0 w-100 rounded-5 m-1"
                target="_blank"
                href={gear.purchaseURL}
              >
                Buy Now
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
}

export default GearCard;
