import { useState } from 'react'
import './App.css'
import {Navbar} from "./Component/Navbar"
import { Add_User  } from './Component/Add_user';
import { Update_Student } from './Component/Update_user';
import { User } from './Component/User';
import {  Routes, Route } from "react-router-dom";
import {Update} from "./Component/Update"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/addUser" element={<Add_User  />}/>
        <Route path="/update" element={<Update_Student/>}/>
        <Route path="/update_student:id" element={<Update/>}/>
      </Routes>
     
    </div>
  )
}

export default App
