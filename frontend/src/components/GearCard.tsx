import {Button, Card, Container, ListGroup} from "react-bootstrap";
import {Gear} from "../types/gear";

interface GearCardProps {
    gear: Gear;
}

function GearCard({gear}: GearCardProps) {
    return (
        <>
            <Container>
                <Card className="mb-2" style={{width: "15rem", height: "30rem"}}>
                    <Card.Img variant="top"
                              src={gear.imageURL || `https://placehold.co/100x100?text=${encodeURIComponent(gear.name)}`}/>
                    <Card.Body>
                        <Card.Title>{gear.brand + " " + gear.name}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Price: {gear.price}</ListGroup.Item>
                        <ListGroup.Item>Category: {gear.category}</ListGroup.Item>
                    </ListGroup>
                    <Button target="_blank" href={gear.purchaseURL}>Buy Now</Button>
                </Card>
            </Container>
        </>
    );
}

export default GearCard;
