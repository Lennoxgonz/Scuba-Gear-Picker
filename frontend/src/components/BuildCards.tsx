import { Col, Row } from "react-bootstrap";
import BuildCard from "./BuildCard";

function BuildCards() {
  const categories = [
    "Mask",
    "Snorkel",
    "BCD",
    "Tank/Valve",
    "Regulator",
    "Dive Computer",
    "Fins",
    "Gauge/Compass",
    "Weight/Belt",
  ];
  return (
    <>
      <Row className="g-0">
        {categories.map((category) => (
          <Col>
            <BuildCard category={category} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BuildCards;
