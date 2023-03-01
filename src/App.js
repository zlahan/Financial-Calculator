import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import NoMatch from './Components/NoMatch'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import ClosedEnd from "./Components/Closedendinfo/Closedend"
import DepositAccount from "./Components//Depositinfo/DepositAccount"

import Footer from "./Footer"
import Userdetails from "./Components/Userdetails"

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={isLoggedIn==="true" ? <Userdetails /> : <Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ClosedEnd" element={<ClosedEnd />} />
        <Route path="/DepositAccount" element={<DepositAccount />} />
        {/* <Route path="/CreditCard" element={<Creditcard />} /> */}
        {/* <Route path="/Mortgage" element={<Mortgage />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Userdetails" element={<Userdetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  <Footer />
    </>

  );
}

export default App;