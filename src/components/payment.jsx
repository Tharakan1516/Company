import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import person from "../../src/photos/User.png";
import treadmill from "../../src/photos/Treadmill.png";
import calender from "../../src/photos/Calendar.png";
import phone from "../../src/photos/Phone Contact.png";
import stethos from "../../src/photos/Stethoscope.png";
import chart2 from "../../src/photos/Bar Chart.png";

import person1 from "../../src/photos/person.png";
import search from "../../src/photos/Search.png";

import bell from "../../src/photos/Bell.png";
import ellipse1 from "../../src/photos/ellipse1.png";
import ellipse2 from "../../src/photos/ellipse2.png";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="Rectaz1">
          <div className="rec2"> </div>
          <div className="rec3">
            <label className="labels">Nethma</label>
            <img src={bell} className="bell" />{" "}
            <img src={person1} className="user1" />{" "}
          </div>
          <div className="circle1"></div>
          <img src={person} className="person" />
          <div className="circle2"></div>
          <img src={treadmill} className="treadmill" />
          <div className="circle3"></div>
          <img src={calender} className="calender" />
          <div className="circle4"></div>
          <img src={phone} className="phone" />
          <div className="circle5"></div>
          <img src={stethos} className="stethos" />
          <img src={chart2} className="chart2" />
          <div className="rec18"></div>
          <img src={search} className="search" />

          <label className="texts1">Payment</label>
          <label className="texts2">Methods</label>

          <img src={ellipse1} className="ellipse1" />
          <label className="texts3">Make a Payment Offline </label>

          <img src={ellipse2} className="ellipse2" />
          <label className="texts4">Make a Payment Offline </label>

          <div className="blog"> </div>
          <label className="texts5">Balance</label>
          <label className="texts6">RS.3,000.00</label>

          <div className="blog1"> </div>
          <div className="blog2"> </div>
          <div className="blog3"> </div>

          <label className="texts7">1234</label>
          <label className="texts8">VALID THRU</label>
          <label className="texts9">CVV</label>
          <label className="texts0">52/94</label>
          <div className="blog4"> </div>

          <div className="blog5"> </div>
          <label className="texts01">TOTAL AMOUNT</label>
          <label className="texts02">payments 1</label>
          <label className="texts03">RS.1000</label>

          <label className="texts04">payments 2</label>
          <label className="texts05">RS.1000</label>

          <label className="texts06">payments 3</label>
          <label className="texts07">RS.1000</label>

          <label className="texts08">Total Bill</label>
          <label className="texts09">RS.3,000.00</label>

          <div className="blog6"> </div>
          <label className="texts10">Make a Payment</label>
        </div>
      </div>
    );
  }
}
