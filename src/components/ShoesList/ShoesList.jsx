import ShoesItem from "../ShoesItem/ShoesItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ShoesList.scss";
import { Container } from "react-bootstrap";
import "./ShoesList.scss";

const ShoesList = ({ array, onChange }) => {
  return (
    <section>
      <Container
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",

          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row>
          {array.length > 0 &&
            array.map((item) => (
              <Col
                xs="12"
                md="5"
                lg="4"
                style={{
                  marginBottom: "15px",
                }}
                key={item.id}
              >
                <ShoesItem item={item} onChange={onChange} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShoesList;
