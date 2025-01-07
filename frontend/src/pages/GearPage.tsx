import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import GearCard from "../components/GearCard";
import fetchAllGear from "../services/api";
import {Gear} from "../types/gear";

function GearPage() {
    const [gearItems, setGearItems] = useState<Gear[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGear = async () => {
            try {
                const data = await fetchAllGear();
                if (data) {
                    setGearItems(data);
                } else {
                    setError("No data received");
                }
            } catch (err) {
                setError("Failed to load gear items");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadGear();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <h1 className="test">All Gear</h1>
            <Row>
                {gearItems.map((item) => (
                    <Col key={item.id}>
                        <GearCard gear={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GearPage;