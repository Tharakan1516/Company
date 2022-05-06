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
import doc1 from "../../src/photos/doc1.png";
import doc2 from "../../src/photos/doc2.png";
import doc3 from "../../src/photos/doc3.png";
import circz from "../../src/photos/circz.png";
import stars from "../../src/photos/Stars.png";
import addbtn from "../../src/photos/Add btn.png";
import filter from "../../src/photos/Filtered File.png";

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

          <div className="reboxz"> </div>

          <div className="block"> </div>
          <img src={doc1} className="doc1" />
          <img src={circz} className="circz" />
          <label className="lbels">4.6</label>
          <label className="lbels1">Dr . First Last Name</label>
          <label className="lbels2">Dr . First Last Name</label>
          <img src={stars} className="stars" />
          <img src={addbtn} className="addbtn" />

          <div className="block1"> </div>
          <img src={doc2} className="doc2" />
          <img src={circz} className="circz1" />
          <label className="lbels3">4.6</label>
          <label className="lbels4">Dr . First Last Name</label>
          <label className="lbels5">Dr . First Last Name</label>
          <img src={stars} className="stars1" />
          <img src={addbtn} className="addbtn1" />

          <div className="block2"> </div>
          <img src={doc3} className="doc3" />
          <img src={circz} className="circz2" />
          <label className="lbels6">4.6</label>
          <label className="lbels7">Dr . First Last Name</label>
          <label className="lbels8">Dr . First Last Name</label>
          <img src={stars} className="stars2" />
          <img src={addbtn} className="addbtn2" />

          <div className="block3"> </div>
          <img src={filter} className="filter" />

          <div className="block4"> </div>

          <div className="block5"> </div>
        </div>
      </div>
    );
  }
}
