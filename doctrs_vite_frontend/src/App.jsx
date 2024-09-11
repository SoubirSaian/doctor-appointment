//  import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Doctors from "./page/Doctors";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import Profile from "./page/Profile";
import Appointments from "./page/Appointments";
import Appointment from "./page/Appointment";
import NavBar from "./component/NavBar";

 
 const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">

      <NavBar/>

      <Routes>

        <Route path="/" element={ <Home/>} />
        <Route path="/doctors" element={  <Doctors/> } />
        <Route path="/doctors/:speciality" element={ <Doctors/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/myprofile" element={ <Profile/>} />
        <Route path="/myappointment" element={ <Appointments/>} />
        <Route path="/appointment/:doctId" element={ <Appointment/>} />

      </Routes>
        
    </div>
  );
 };
 
 export default App;