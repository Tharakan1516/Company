import React, { Component } from "react";
import Logo from "../../src/photos/girl and boy sitting on a bench and looking at laptop.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import img5 from "../../src/photos/Man and woman riding bicycles.png";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="rectangle1">
          {" "}
          <img src={img5} className="image" />
        </div>

        <div className="formRectangle1">
          <h1 className="heading1">LOGIN</h1>
          <Form>
            <Container>
              <Row>
                <Col xs={8}>
                  <Form.Group controlId="form.Name">
                    <Form.Control
                      className="class4"
                      type="text"
                      placeholder="Enter your Secret Number"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <label className="class5">Do you not register yet</label>
            <label className="class6">Join Now</label>
          </Form>
        </div>
      </div>
    );
  }
}
