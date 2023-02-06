import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axios'


import './Admin.scss'
function Admin() {
    
  const navigate = useNavigate()
  const [formError, setFormError] = useState('')
  const [form , setForm] = useState({
     email:'',
     password:''
  })


const onChangeHandle = (e)=>{
    const {value , name} = e.target
    setForm({
      ...form,[name]:value
    })
      
 }
 const handleSubmit =async e =>{
 e.preventDefault()


  axios.post(`http://localhost:4000/admin`,{

       email : form.email,
       password : form.password
  }).then((res)=>{
    console.log(res)
    navigate('/admin/home')
  }).catch((err)=>{
    const value = Object.values(err.response.data)
    setFormError(value) 
  })

 }

  return (
    <div className='adBody'>
       <div className='login'>
       {formError && (
        <div className="error-message">
          <p>{formError}</p>
        </div>
      )}
    <form onSubmit={handleSubmit}>
    <div className='formBx'>
      <h2>Admin Login</h2>
      <div className='inputBx'>
       <p>Email</p>
       <input
        type="email"
        name='email'
        onChange={onChangeHandle}
        value={form.email}
        placeholder='Enter Email'
        required
         />
      </div>
     
      <div className='inputBx'>
       <p>Password</p>
       <input
       type="password"
       name='password'
       value={form.password}
       onChange={onChangeHandle}
       placeholder='Enter Password'
       required
        />
      </div>
      <button>Login</button>
    </div>
    </form>
  </div>
    </div>
  )
}

export default Admin
