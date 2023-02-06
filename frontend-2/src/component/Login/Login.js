import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index'
import axios from '../../axios'

import './Login.scss'
function Login() {
const [errors,setErrors] =useState(null)
  const navigate = useNavigate()
  const [form,setForm] = useState({
      email:"",
      password:""

  })

  const auth = useSelector((state)=>state)
  const dipatch = useDispatch()
  const {storeToken} = bindActionCreators(actionCreators,dipatch)

  const handleChange = e => {
    const { name , value} = e.target
    setForm({
      ...form,
      [name]:value
    });
  }

  const handleSubmit =async event => {
    event.preventDefault()
   
       axios.post(`http://localhost:4000/login`, {
        email: form.email,
        password: form.password
      }).then((res)=>{  
        const data ={
          token:res.data.token,
          id:res.data.id
        }
        storeToken(data)
        navigate('/')

      }).catch((error)=>{
        const obj = error.response.data
        const arr = [...Object.values(obj)]
        setErrors(arr)

      })
  }

  useEffect(()=>{
    if(auth.token.token !==  ""){
      navigate('/')
    }

  },[])



  return (
    <div className='body'>
      <form onSubmit={handleSubmit}>
    <div className='login'>
    <div className='formBx'>
    {errors && (
        <div className="error-message">
          <p>{errors}</p>
        </div>
      )}
      <h2>Login</h2>
      <div className='inputBx'>
    
       <p>Email</p>
       <input
        type="email"
        name='email'
        value={form.email}
        onChange={handleChange}
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
       onChange={handleChange}
       placeholder='Enter Password'
       required
       />
       <small>Don't have an Account? <Link to='/signup' className='fontLog'>signup</Link>   </small>
      </div>
      <button type='submit'>Login</button>
    </div>
  </div>
  </form>
  </div>
  )
}

export default Login
