import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoesItem.scss";

const ShoesItem = ({ item, onChange }) => {
  return (
    <>
      <Card className="card_item">
        <div className="card_wrapper_img">
          <Card.Img className="img" variant="top" src={item.image} />
        </div>
        <Card.Body
          className="card_content"
          style={{ backgroundColor: "rgb(33, 37, 41)" }}
        >
          <Card.Title style={{ color: "white" }}>
            Бренд : {item.name}
          </Card.Title>
          <Card.Title style={{ color: "white" }}>
            Ціна : {item.price} грн
          </Card.Title>
          <Button variant="outline-light" onClick={() => onChange(item)}>
            Додати до кошику
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShoesItem;
