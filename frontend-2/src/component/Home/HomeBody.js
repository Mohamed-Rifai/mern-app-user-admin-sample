import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'


function HomeBody() {

 const auth = useSelector(state => state)
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const {removeToken} = bindActionCreators(actionCreators,dispatch)

  const handleLogout = () =>{
      const data ={
        token:auth.token,
        id:auth.id
      }
    console.log(data)
      removeToken(data)
      navigate('/')

  }

  useEffect(()=>{

   if(auth.token.token === ''){
    navigate('/')
   }
  },[])


  return (
    <div>
      <p>this is home body</p>
   {auth.token.token !== ''?  <button onClick={handleLogout}> <h1 >Logout</h1></button>:''}
    </div>
  )
}

export default HomeBody
