import { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { fetchGearByCategory } from "../services/api";
import { Gear } from "../types/gear";
import GearCard from "./GearCard";
import GearSelectionCard from "./GearSelectionCard";

interface BuildCardProps {
  category: string;
  apiCategory: string;
  onAddAnother: () => void;
  onRemove: () => void;
  canRemove: boolean;
}

function BuildCard(props: BuildCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedGear, setSelectedGear] = useState<Gear | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoryGear, setCategoryGear] = useState<Gear[]>([]);

  const handleSelectGear = (gear: Gear) => {
    setSelectedGear(gear);
    handleCloseModal();
  };

  const handleOpenModal = async () => {
    setIsLoading(true);
    try {
      const gear = fetchGearByCategory(props.apiCategory);
      setCategoryGear(await gear);
      console.log(`Loaded gear for ${props.apiCategory}`);
    } catch (error) {
      console.error("Error fetching gear from category ", error);
    }
    setIsLoading(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }} className="bg-primary-subtle p-3 m-3">
          <Card.Title className="text-center">{props.category}</Card.Title>
          <Card.Img variant="top" src={selectedGear?.imageURL}></Card.Img>
          <Card.Text className="mb-0 text-center fw-bold">
            {selectedGear?.name}
          </Card.Text>
          <Card.Text className="mb-0 text-center">
            {selectedGear && `Cost: $${selectedGear?.price}`}
          </Card.Text>
          <Card.Text className="text-center">
            <a href={selectedGear?.purchaseURL} target="_blank">
              {selectedGear && "Buy Now"}
            </a>
          </Card.Text>
          <Button onClick={handleOpenModal} className="mb-1">
            {selectedGear ? "Change Selection" : "Choose Gear"}
          </Button>
          <Button onClick={props.onAddAnother} className="mb-1">
            Add Another
          </Button>
          <Button onClick={() => setSelectedGear(null)} className="mb-1">
            Reset
          </Button>
          <Button
            onClick={props.onRemove}
            disabled={!props.canRemove}
            className="mb-1"
          >
            Remove
          </Button>
        </Card>
      </Container>
      <Modal size="lg" show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton className="border-bottom-0 pb-0">
          <Modal.Title>{`Choose your ${props.category}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-0">
            {categoryGear.map((gear) => (
              <Col key={gear.name} xs={12} md={6} lg={4}>
                <GearSelectionCard gear={gear} onSelect={handleSelectGear} />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BuildCard;
