import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Gear } from "../types/gear";

interface GearSelectionCardProps {
  gear: Gear;
  onSelect: (gear: Gear) => void;
}

function GearSelectionCard({ gear, onSelect }: GearSelectionCardProps) {
  return (
    <Container>
      <Card
        className="mb-3 border-0"
        style={{ width: "15rem", height: "28rem" }}
      >
        <Card.Img
          className="rounded-0 border border-bottom-0 border-dark"
          variant="top"
          src={
            gear.imageURL ||
            `https://placehold.co/100x100?text=${encodeURIComponent(gear.name)}`
          }
        />
        <Card.Body className="border border-bottom-0 border-dark pb-0">
          <Card.Title>{gear.brand + " " + gear.name}</Card.Title>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item className="border-dark rounded-0">
            Price: {gear.price}
          </ListGroup.Item>
          <ListGroup.Item className="border-dark rounded-0 mb-1">
            Category: {gear.category}
          </ListGroup.Item>
        </ListGroup>
        <Button className="rounded-5" onClick={() => onSelect(gear)}>
          Choose Gear
        </Button>
      </Card>
    </Container>
  );
}

export default GearSelectionCard;
