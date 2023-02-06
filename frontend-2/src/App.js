import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from './component/Admin/Login/Admin';
import AdminHome from './component/Admin/Home/AdminHome';
import Login from './component/Login/Login';
import Signup from './component/signup/Signup';
import Home from './pages/Home';
import AddUser from './component/Admin/AddUser/AddUser';
function App() {
 
  return (
  <>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/admin/home' element={<AdminHome/>}/>
    <Route path='/admin/adduser' element={<AddUser/>}/>



  </Routes>
  

  </>
     
   
  
 
  )
}

export default App;
