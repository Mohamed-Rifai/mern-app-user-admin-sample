import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios'
import './AddUser.scss'


const AddUser = () => {
  const [errors,setErrors] =useState(null) 
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
    
  });
  
  const navigate = useNavigate()

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log('Submitted:', formData);


    axios.post('http://localhost:4000/signup',{
        name: formData.name,
        email: formData.email,
        password: formData.password,
        conPassword: formData.conPassword 
    }).then((response)=>{
        console.log(response.data);
        navigate('/admin/home');
    }).catch((error)=>{
       const obj = error.response.data
       const arr = [...Object.values(obj)];
        setErrors(arr[0]);
      
    })
  };

  return (
    <>

    <form onSubmit={handleSubmit}>
    {errors && (
        <div className="error-message">
          <p>{errors}</p>
        </div>
      )}
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="conPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="conPassword"
          name="conPassword"
          required
          value={formData.conPassword}
          onChange={handleChange}
        />
      </div>
   
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
};

export default AddUser;
