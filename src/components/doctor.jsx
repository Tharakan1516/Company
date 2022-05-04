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
import call from "../../src/photos/Call male.png";
import video from "../../src/photos/Video Call.png";
import message1 from "../../src/photos/Message1.png";
import message2 from "../../src/photos/Message2.png";
import woman from "../../src/photos/woman.png";
import green from "../../src/photos/green circ.png";
import blackz from "../../src/photos/black man.png";
import phonewoman from "../../src/photos/woman with phone.png";
import thumbwoman from "../../src/photos/thumb woman.png";
import peace from "../../src/photos/peace woman.png";
import addnew from "../../src/photos/Add New.png";
import files from "../../src/photos/Attach.png";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="Rectazz">
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

          <div className="reboxs"> </div>

          <div className="rebox"> </div>
          <label className="lbls">Active Doctors</label>

          <div className="rebox1"> </div>
          <img src={woman} className="woman1" />
          <label className="lbls1">Dr.</label>
          <label className="lbls2">Karunarathna</label>
          <img src={green} className="green1" />

          <div className="rebox2"> </div>
          <img src={blackz} className="blackz" />
          <label className="lbls3">Dr.</label>
          <label className="lbls4">Karunarathna</label>
          <img src={green} className="green2" />

          <div className="rebox3"> </div>
          <img src={phonewoman} className="phonewoman" />
          <label className="lbls5">Dr.</label>
          <label className="lbls6">Karunarathna</label>
          <img src={green} className="green3" />

          <div className="rebox4"> </div>
          <img src={thumbwoman} className="thumbwoman" />
          <label className="lbls7">Dr.</label>
          <label className="lbls8">Karunarathna</label>
          <img src={green} className="green4" />

          <div className="rebox5"> </div>

          <div className="rebox6"> </div>
          <img src={peace} className="peace" />
          <label className="lbls9">Nimali Dissanayake</label>
          <img src={call} className="call" />
          <img src={video} className="video" />

          <img src={peace} className="peace2" />
          <img src={message1} className="message1" />

          <img src={thumbwoman} className="thumbwoman2" />
          <img src={message2} className="message2" />

          <div className="rebox7"> </div>
          <img src={addnew} className="addnew" />
          <div className="rebox8"> </div>
          <img src={files} className="files" />
        </div>
      </div>
    );
  }
}
