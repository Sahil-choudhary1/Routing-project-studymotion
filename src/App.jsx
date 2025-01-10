import React, { useState } from "react"
import Navbar from "./Components/Navbar"
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"

function App (){

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-zinc-950 w-screen h-screen flex flex-col">
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </div>
    
  )
}
export default App;