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
import calender2 from "../../src/photos/calender1.png";
import bell from "../../src/photos/Bell.png";
import front from "../../src/photos/Back-1.png";
import back from "../../src/photos/Back.png";
import woman from "../../src/photos/woman.png";
import map1 from "../../src/photos/map.png";
import loc1 from "../../src/photos/Location.png";
import loc2 from "../../src/photos/Location color.png";
import vector from "../../src/photos/Vector 2.png";
import number from "../../src/photos/Current Number.png";
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
          <div className="box"> </div>
          <img src={calender2} className="calender2" />
          <label className="labels1a">July 2022</label>
          <img src={back} className="back1" />{" "}
          <img src={front} className="front1" /> <div className="box1"> </div>
          <label className="text1">Today Appointments</label>
          <div className="box2"> </div>
          <img src={woman} className="woman" />
          <label className="text2">Dr. Karunarthna</label>
          <label className="text3">Specialist</label>
          <label className="text4">8 A.M - 10 A.M</label>
          <img src={map1} className="map1" />
          <img src={loc1} className="loc1" />
          <img src={loc2} className="loc2" />
          <img src={vector} className="vector" />
          <div className="box3"> </div>
          <img src={loc1} className="loc3" />
          <label className="labelb1">Address</label>
          <label className="labelb2">63 Avissawella Rd,</label>
          <label className="labelb3">Avissawella</label>
          <label className="labelb4">10700</label>
          <div className="box4"> </div>
          <img src={number} className="number" />
        </div>
      </div>
    );
  }
}
