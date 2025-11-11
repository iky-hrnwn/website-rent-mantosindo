import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import About from "./pages/About.jsx";
import MyBookings from "./pages/MyBookings.jsx";


const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
  <>
    {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />} 

    <Routes>
      <Route path='/' element={<Home/ >}/>
      <Route path='Catalog/:id' element={<Catalog/ >}/>
      <Route path='About' element={<About/ >}/>
      <Route path='my-bookings' element={<MyBookings/ >}/>
    </Routes>
  </>
  );
};

export default App;
