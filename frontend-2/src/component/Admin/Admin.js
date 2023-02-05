import React from 'react'

function Admin() {
    
  return (
    <div>
       <div className='login'>
    <div className='imgBx'>
      <img src='./images/icons8-u.png' alt="" />
    </div>
    <div className='formBx'>
      <h2>Admin Login</h2>
      <div className='inputBx'>
       <p>Email</p>
       <input type="text" placeholder='Enter Email' />
      </div>
     
      <div className='inputBx'>
       <p>Password</p>
       <input type="password" placeholder='Enter Password' />
      </div>
      <button>Login</button>
    </div>
  </div>
    </div>
  )
}

export default Admin
