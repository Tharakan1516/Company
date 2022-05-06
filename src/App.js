import "./App.css";
import "./Contacts.css";
import "./treadmill.css";
import "./calendar.css";
import "./doctor.css";
import "./profile.css";
import "./payment.css";
import "./date.css";

import styled from "styled-components";

import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Contacts from "./components/contact";
import Treadmill from "./components/treadmill";
import Calendar from "./components/calendar";
import Doctor from "./components/doctor.jsx";
import Profile from "./components/docprofile";
import Payment from "./components/payment";
import Dates from "./components/date";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Dates />
    </AppContainer>
  );
}

export default App;
