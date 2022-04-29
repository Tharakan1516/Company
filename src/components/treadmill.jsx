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
import pink from "../../src/photos/heart pink.png";
import pulse from "../../src/photos/Pulse.png";
import meter1 from "../../src/photos/Glucometer 2.png";
import done from "../../src/photos/Done.png";
import pill from "../../src/photos/pill.png";
//import circ from "../../src/photos/Ellipse 3.png";
import map from "../../src/photos/Basemap image.png";
import fire from "../../src/photos/circle progress.png";
import lchart from "../../src/photos/Line Chart 2.png";
import location from "../../src/photos/Location.png";
import run from "../../src/photos/run.png";

import bell from "../../src/photos/Bell.png";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="Recta">
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

          <div className="Recta1"></div>
          <div className="Rectaz"></div>
          <img src={pink} className="pink" />
          <div className="Recta2"></div>
          <label className="texts">Heart Beat Scan</label>
          <img src={pulse} className="pulse" />
          <label className="texts1">102</label>
          <label className="texts2">bpm</label>

          <div className="Recta3"></div>
          <label className="texts3">Glucose Test</label>
          <img src={meter1} className="meter1" />
          <label className="texts4">90</label>
          <label className="texts5">mg/dl</label>

          <div className="Recta4"></div>
          <label className="texts6">Today Drugs Progress</label>
          <div className="Recta5"></div>
          <img src={pill} className="pill1" />
          <label className="texts7">Acetaminophen</label>
          <label className="texts8">Morning</label>
          <label className="texts9">10 A.M</label>
          <img src={done} className="done" />

          <div className="Recta6"></div>
          <img src={pill} className="pill2" />
          <label className="texts10">Acetaminophen</label>
          <label className="texts11">Lunch</label>
          <label className="texts12">1 P.M</label>
          <div className="circ1"></div>

          <div className="Recta7"></div>
          <img src={pill} className="pill3" />
          <label className="texts13">Acetaminophen</label>
          <label className="texts14">Lunch</label>
          <label className="texts15">1 P.M</label>
          <div className="circ2"></div>

          <div className="Recta8"></div>
          <div className="Recta9"></div>
          <label className="texts16">10%</label>
          <div className="Recta10"></div>

          <div className="Recta11"></div>
          <img src={map} className="map" />
          <div className="Recta12"></div>
          <img src={location} className="location" />
          <img src={fire} className="fire" />
          <img src={run} className="run" />
          <img src={lchart} className="lchart" />
          <label className="texts17">90%</label>
        </div>
      </div>
    );
  }
}
