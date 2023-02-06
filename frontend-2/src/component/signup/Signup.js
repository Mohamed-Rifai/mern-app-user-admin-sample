import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios'
import './Signup.scss'
function Signup() {
const navigate = useNavigate()
const [errors,setErrors] =useState(null)
const [form,setForm] =useState({
   name: "",  
   email: "",
   password: "",
   conPassword:""
});

 const handleChange = event =>{
 
    setForm({
      ...form,
      [event.target.name] :event.target.value
    });
 }

  const handleSubmit =async event =>{
     event.preventDefault()
     console.log('calling axios');

     

     axios.post('http://localhost:4000/signup',{
      name: form.name,
      email: form.email,
      password: form.password,
      conPassword: form.conPassword 
  }).then((response)=>{
      console.log(response.data);
      navigate('/login');
  }).catch((error)=>{
     const obj = error.response.data
     const arr = [...Object.values(obj)];
      setErrors(arr[0]);
    
  })

    
     


  }


  return (
    <div className='body-signup'>
    <div className='login'>
     <form onSubmit={handleSubmit}>

    <div className='formBx'>
   
      <h2>Signup</h2>
      {errors && (
        <div className="error-message">
          <p>{errors}</p>
        </div>
      )}
      <div className='inputBx'>
       <p>Username</p>
       <input type="text"
         placeholder='Enter Username'
         name='name'
         value={form.name}
         onChange={handleChange}
         required
         />
      </div>
      <div className='inputBx'>
       <p>Email</p>
       <input type="email" 
       placeholder='Enter Email'
       name='email'
       value={form.email}
       onChange={handleChange}
       required
       />
      </div>
      <div className='inputBx'>
       <p>Password</p>
       <input type="password"
        placeholder='Enter Password' 
        name='password'
        value={form.password}
        onChange={handleChange}
        required
        />
      </div>
      <div className='inputBx'>
       <p>Confirm Password</p>
       <input type="password"
        placeholder='Enter Password'
        name='conPassword'
        value={form.conPassword}
        onChange={handleChange}
        required
         />
       <small>Already have an Account? <Link to='/login' className='fontLog'>Login</Link></small>
      </div>
      <button type='submit'>Submit</button>
    </div>
    </form>
  </div>
  </div>
  )
}

export default Signup
