import { Button, Card, Container } from "react-bootstrap";

interface BuildCardProps {
  category: string;
}

function BuildCard(props: BuildCardProps) {
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }} className="bg-primary-subtle p-3 m-3">
          <Card.Title className="text-center">{props.category}</Card.Title>
          <Card.Img variant="top" src="https://picsum.photos/220"></Card.Img>
          <Card.Text className="mb-0">
            Selected Item Name with hyperlink
          </Card.Text>
          <Card.Text>Cost: $xxx.xx</Card.Text>
          <Button className="mb-1">Choose Gear/Change Selection</Button>
          <Button>Add Another</Button>
        </Card>
      </Container>
    </>
  );
}

export default BuildCard;
