import { Card, Col, Row } from "react-bootstrap";
import BuildCardGrid from "../components/BuildCardGrid";
import { useState } from "react";

function BuildPage() {
  // State for total build cost and pieces of gear
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalPiecesOfGear, setTotalPiecesOfGear] = useState<number>(0);

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <BuildCardGrid
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            totalPiecesOfGear={totalPiecesOfGear}
            setTotalPiecesOfGear={setTotalPiecesOfGear}
          />
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                Build Summary
              </Card.Title>
              {/* Bottom row with total cost and pieces of gear */}
              <Row>
                <Col md={6} className="text-center">
                  <p className="text-muted mb-1">Total Cost</p>
                  {/* Show total cost rounded to 2 decimal places */}
                  <h3>${totalCost.toFixed(2)}</h3>
                </Col>
                <Col md={6} className="text-center">
                  <p className="text-muted mb-1">Total Pieces of Gear</p>
                  <h3>{totalPiecesOfGear}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default BuildPage;
