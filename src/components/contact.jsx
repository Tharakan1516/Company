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

import blackman from "../../src/photos/black man.png";
import thumbman from "../../src/photos/thumb man.png";
import weight from "../../src/photos/Weighing.png";
import height from "../../src/photos/Compare Heights.png";
import blood from "../../src/photos/Drop of Blood.png";
import heart from "../../src/photos/Heart with Pulse.png";
import temp from "../../src/photos/Temperature.png";
import glucose from "../../src/photos/Glucometer.png";
import water from "../../src/photos/water section.png";
import caps from "../../src/photos/capsule.png";
import color from "../../src/photos/Back color.png";
import double from "../../src/photos/Double Right.png";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="rec1">
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
          <div className="recs1"></div>
          <label className="labelz">Hello,</label>
          <label className="labelz1">Saman Jayasinghe</label>
          <label className="labelz2">
            Have a Nice day and dont forget to take care of your Activities
          </label>
          <label className="labelz3">Click</label>
          <img src={color} className="color" />
          <img src={blackman} className="blackman" />
          <div className="recs2"></div>
          <label className="labelz4">Saman Jayasinghe</label>
          <label className="labelz5">30 years</label>
          <img src={thumbman} className="thumbman" />
          <img src={double} className="double" />
          <div className="recs4"></div>
          <img src={weight} className="weight" />
          <label className="labelz6">70Kg</label>
          <div className="recs5"></div>
          <img src={height} className="height" />
          <label className="labelz7">138CM</label>
          <div className="recs6"></div>
          \<img src={blood} className="blood" />
          <label className="labelz8">O+</label>
          <div className="recs7"></div>
          <div className="res1"></div>
          <img src={heart} className="heart" />
          <label className="labelz9">102</label>
          <label className="lablz9">bpm</label>
          <label className="labelz10">Heart rate</label>
          <label className="labelz11">Pluse is the most important </label>
          <div className="recs8"></div>
          <div className="res2"></div>
          <img src={temp} className="temp" />
          <label className="labelz12">36,6 C</label>
          <label className="labelz13">Temperature</label>
          <label className="labelz14">temptrure is the most important </label>
          <div className="recs9"></div>
          <div className="res3">
            <img src={glucose} className="glucose" />
          </div>
          <label className="lablz1">mg/dl</label>
          <label className="labelz15">90</label>
          <label className="labelz16">Glucose</label>
          <label className="labelz17">Normal glucose is 80-120 </label>
          <div className="recs10"></div>
          <img src={water} className="water" />
          <label className="laz1">water balance</label>
          <label className="laz2">99%</label>
          <label className="laz3">10% less </label>
          <div className="recs11"></div>
          <img src={caps} className="caps" />
          <label className="laz4">10 Days</label>
          <label className="laz5">Remaining</label>
          <label className="laz6">Day 1 : done Day 2 : done</label>
        </div>
      </div>
    );
  }
}
