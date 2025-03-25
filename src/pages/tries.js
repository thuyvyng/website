import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Me from "../photos/thuyvy.jpeg";

export default function Tries() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            {" "}
            <h1 class="display-2 text-left" style={{ textAlign: "right" }}>
              thuyvy tries things!
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
