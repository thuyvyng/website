import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Cherry from "../photos/cherry.JPG";

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
        <Row>
          <Col>
            <Card>
              <Card.Img src={Cherry} />
              <Card.Body>
                <Card.Title>Cherry Bracelets!</Card.Title>

                <Card.Link href="https://honestlywtf.com/diy/diy-beaded-cherry-bracelet//">
                  tutorial
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
