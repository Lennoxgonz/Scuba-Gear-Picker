import { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { fetchGearByCategory } from "../services/api";
import { Gear } from "../types/gear";
import GearCard from "./GearCard";
import GearSelectionCard from "./GearSelectionCard";

interface BuildCardProps {
  category: string;
  apiCategory: string;
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
          <Card.Text className="mb-0">{selectedGear?.name}</Card.Text>
          <Card.Text>{selectedGear && <Card.Text>Cost: ${selectedGear?.price}</Card.Text>}</Card.Text>
          <Button onClick={handleOpenModal} className="mb-1">
            Choose Gear/Change Selection
          </Button>
          <Button>Add Another</Button>
        </Card>
      </Container>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{`Choose your ${props.category}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {categoryGear.map((gear) => (
              <Col key={gear.name}>
                <GearSelectionCard gear={gear} onSelect={handleSelectGear}/>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BuildCard;
