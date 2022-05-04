import "./App.css";
import "./Contacts.css";
import "./treadmill.css";
import "./calendar.css";
import "./doctor.css";

import styled from "styled-components";

import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Contacts from "./components/contact";
import Treadmill from "./components/treadmill";
import Calendar from "./components/calendar";
import Doctor from "./components/doctor.jsx";
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
      <Doctor />
    </AppContainer>
  );
}

export default App;
