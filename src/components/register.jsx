import React, { Component } from "react";
import Logo from "../../src/photos/girl and boy sitting on a bench and looking at laptop.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../src/photos/Man.png";
import img2 from "../../src/photos/Daughter.png";
import img3 from "../../src/photos/Add Camera.png";
import img4 from "../../src/photos/young man standing alone.png";
import { Button } from "react-bootstrap";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="rectangle">
          <img src={Logo} className="image" />
        </div>

        <div className="formRectangle">
          <h1 className="heading">Patients Registration</h1>
          <br />
          <br />
          <br />
          <br />
          <Form>
            <Container>
              <Row>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class1"
                      type="text"
                      placeholder="Enter name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class1"
                      type="date"
                      placeholder="DateOfBirth"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <br />

            <Container>
              <Row>
                <Col xs={4}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Label>Gender :- {"   "}</Form.Label>
                      <Form.Check
                        inline
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <img src={img1} className="image1" />
                      <Form.Check
                        inline
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <img src={img2} className="image2" />
                    </div>
                  ))}
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="form.Textarea">
                    <Form.Control
                      className="cls1"
                      as="textarea"
                      placeholder="Address"
                      rows={3}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
            <br />

            <Container>
              <Row>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="cls2"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </Col>
                <br />
                <Col xs={5}>
                  <div>
                    <button className="cls6">
                      <img src={img4} />
                      <img src={img3} />
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class9"
                      type="text"
                      placeholder="Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
            <br />

            <Container>
              <Row>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class1"
                      type="text"
                      placeholder="KG"
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class1"
                      type="text"
                      placeholder="Height"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Button className="button1">Register Me</Button>
          </Form>
        </div>
      </div>
    );
  }
}
