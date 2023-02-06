import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axios'
import './AdminHm.scss'
function AdminHome() {

const [users,setUsers] = useState([])
const [ searchTerm , setSearchTerm] = useState('')
const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:4000/admin/getUsers');
     
      setUsers(response.data.users);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/admin/deleteUser/${userId}`);
      // Remove the user from the table state
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };
  const filteredUsers = searchTerm
  ? users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : users;




  return (
    <div>
      <div className='headerr'>
        <h1>admin home page</h1>

      </div>

      <div className="search-form">
  <input 
    type="text"
    placeholder="Search... "
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value) }
    className="search-input"/>
     <i className="fas fa-search"></i> 
</div>
<button onClick={()=>navigate('/admin/adduser')} className="add-btn">Add</button>

      <div className="container">
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
    
      {   filteredUsers.map((user)=>{
       return(
        <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          
          <button onClick={()=> deleteUser(user._id)} className="delete-btn">Delete</button>
        </td>
        </tr>
    )
      })}
      
  </table>
 
</div>


    </div>
  )
}

export default AdminHome
