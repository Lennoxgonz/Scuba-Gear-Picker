import { Col, Row } from "react-bootstrap";
import BuildCard from "./BuildCard";
import { CategoryMapping } from "../types/categoryMapping";
import { useState } from "react";

function BuildCards() {
  const [categoryQuantities, setCategoryQuantities] = useState<{ [key: string]: number }>({
    mask: 1,
    snorkel: 1,
    bcd: 1,
    "tank-valve": 1,
    regulator: 1,
    diveComputer: 1,
    fins: 1,
    "gauge-compass": 1,
    "weight-belt": 1,
  });

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

  const handleAddCard = (categoryApi: string) => {
    setCategoryQuantities(prev => ({
      ...prev,
      [categoryApi]: prev[categoryApi] + 1
    }));
  };

  const handleRemoveCard = (categoryApi: string) => {
    setCategoryQuantities(prev => {
      if (prev[categoryApi] > 1) {
        return {
          ...prev,
          [categoryApi]: prev[categoryApi] - 1
        };
      }
      return prev; 
    });
  };

  return (
    <Row className="g-0">
      {categories.map((category) => (
        Array(categoryQuantities[category.api])
          .fill(null)
          .map((_, index) => (
            <Col key={`${category.api}-${index}`}>
              <BuildCard
                category={category.display}
                apiCategory={category.api}
                onAddAnother={() => handleAddCard(category.api)}
                onRemove={() => handleRemoveCard(category.api)}
                canRemove={categoryQuantities[category.api] > 1}
              />
            </Col>
          ))
      ))}
    </Row>
  );
}

export default BuildCards