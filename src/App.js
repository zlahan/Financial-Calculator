import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from './Components/NavBar'
import NoMatch from './Components/NoMatch'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import Calculate from "./Components/Calculate"
import Contact from "./Components/Contact"
import Footer from "./Footer"
import Userdetails from "./Components/Userdetails"

import Closedend from "./Components/Closedend"
import Creditcard from "./Components/Creditcard"
import Depositaccount from "./Components/Depositaccount"
import Mortgage from "./Components/Mortgage"

const App = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={isLoggedIn==="true" ? <Userdetails /> : <Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/contact" element={<Contact />} />
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

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route path="Home" element={<Home />} />
//           <Route path="Calculate" element={<Calculate />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
//   <Footer />
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);