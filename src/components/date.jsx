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
import doc4 from "../../src/photos/doc4.png";
import doc1 from "../../src/photos/doc1.png";
import doc5 from "../../src/photos/doc5.png";
import doc6 from "../../src/photos/doc6.png";
import stars from "../../src/photos/Stars.png";
import guarant from "../../src/photos/Guarantee.png";
import circz from "../../src/photos/circz.png";
import people from "../../src/photos/People.png";

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

          <label className="word">Available</label>
          <label className="word1">Dates</label>

          <div className="logs"></div>

          <div className="logs1"></div>
          <div className="logs2"></div>
          <label className="word2">S </label>
          <label className="word3">M</label>
          <label className="word4">T </label>
          <label className="word5">W </label>
          <label className="word6">T </label>
          <label className="word7">F </label>

          <div className="logs3"></div>
          <div className="logs4"></div>
          <div className="logs5"></div>
          <div className="logs6"></div>

          <div className="logs7"></div>
          <label className="word8">10 A.M - 4 P.M </label>

          <div className="logs8"></div>
          <label className="word9">10 A.M - 4 P.M </label>

          <label className="words1">Feedback & Ratings </label>

          <div className="logs01"></div>
          <img src={doc4} className="doc4" />
          <label className="words2">Name</label>
          <label className="words3">Lorem ipsum dolor sit amet.</label>
          <img src={stars} className="star01" />

          <div className="logs02"></div>
          <img src={doc5} className="doc5" />
          <label className="words4">Name</label>
          <label className="words5">Lorem ipsum dolor sit amet.</label>
          <img src={stars} className="star02" />

          <div className="logs03"></div>
          <img src={doc6} className="doc6" />
          <label className="words6">Name</label>
          <label className="words7">Lorem ipsum dolor sit amet.</label>
          <img src={stars} className="star03" />

          <div className="logs04"></div>
          <img src={doc1} className="docs1" />
          <img src={circz} className="circs01" />
          <label className="words8">4.6</label>
          <img src={stars} className="starz" />
          <label className="words01">Dr. First Last Name</label>
          <label className="words02">Dr. First Last Name</label>
          <label className="words03">About</label>
          <label className="words04">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra
            purus vehicula aliquet nisl bibendum semper
          </label>

          <div className="logs05"></div>
          <img src={guarant} className="guarant" />
          <label className="words05">7 year</label>
          <label className="words06">Experience</label>

          <div className="logs06"></div>
          <img src={people} className="people" />
          <label className="words07">1.5 K</label>
          <label className="words08">Patient</label>

          <div className="logs07"></div>
          <label className="words09">Make an Appointment</label>
        </div>
      </div>
    );
  }
}
