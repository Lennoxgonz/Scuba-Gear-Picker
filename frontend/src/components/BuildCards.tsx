import { Col, Row } from "react-bootstrap";
import BuildCard from "./BuildCard";
import { CategoryMapping } from "../types/categoryMapping";

function BuildCards() {
  const categories: CategoryMapping[] = [
    { display: "Mask", api: "mask" },
    { display: "Snorkel", api: "snorkel" },
    { display: "BCD", api: "bcd" },
    { display: "Tank/Valve", api: "tank-valve" },
    { display: "Regulator", api: "regulator" },
    { display: "Dive Computer", api: "diveComputer" },
    { display: "Fins", api: "fins" },
    { display: "Gauge/Compass", api: "gauge-compass" },
    { display: "Weight/Belt", api: "weight-belt" },
  ];
  return (
    <>
      <Row className="g-0">
        {categories.map((category) => (
          <Col key={category.api}>
            <BuildCard category={category.display} apiCategory={category.api} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BuildCards;
