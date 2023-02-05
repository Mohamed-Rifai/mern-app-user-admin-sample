import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from './component/Admin/Admin';
import Login from './component/Login/Login';
import Signup from './component/signup/Signup';
import Home from './pages/Home';
function App() {
 
  return (
  <>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/adminlogin' element={<Admin/>}/>

  </Routes>
  

  </>
     
   
  
 
  )
}

export default App;
