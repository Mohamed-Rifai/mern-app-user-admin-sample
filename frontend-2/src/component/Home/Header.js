import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {

  const auth = useSelector(state => state)
    return (
        <div style={{backgroundColor:'lightgray',height:'105px'}}>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand style={{fontSize:'2rem',margin:'10px' }}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{display:'flex',justifyContent:'center'}} className="mr-auto">
            {auth.token.token === ''?       
  <button style={{width:'60px',height:'40px',fontSize:'1rem',}}><Link to='/login'>Login</Link> </button>:''}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      )
      
}

export default Header
