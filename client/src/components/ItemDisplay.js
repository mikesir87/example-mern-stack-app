import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { deleteItem, updateItem } from "../util";

export function ItemDisplay({ item, onItemUpdate, onItemRemoval }) {
  const toggleCompletion = useCallback(() => {
    updateItem(item.id, item)
      .then(r => r.json())
      .then(onItemUpdate);
  }, [item, onItemUpdate]);

  const removeItem = useCallback(() => {
    deleteItem(item.id)
      .then(() => onItemRemoval(item));
  }, [item, onItemRemoval]);

  return (
    <Container fluid className={`item ${item.completed && 'completed'}`}>
      <Row>
        <Col xs={1} className="text-center">
          <Button
            className="toggles"
            size="sm"
            variant="link"
            onClick={toggleCompletion}
            aria-label={
                item.completed
                    ? 'Mark item as incomplete'
                    : 'Mark item as complete'
            }
          >
            <i
              className={`far ${
                  item.completed ? 'fa-check-square' : 'fa-square'
              }`}
            />
          </Button>
        </Col>
        <Col xs={10} className="name">
          {item.name}
        </Col>
        <Col xs={1} className="text-center remove">
          <Button
            size="sm"
            variant="link"
            onClick={removeItem}
            aria-label="Remove Item"
          >
            <i className="fa fa-trash text-danger" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}