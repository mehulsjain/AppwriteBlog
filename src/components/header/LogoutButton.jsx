import React from 'react'
import { useDispatch } from 'react-redux'
import authServie from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    authServie.logout().then(() => {
        dispatch(logout())
        navigate('/')
    }).catch(() => console.log("Logout failed from LogoutBtn"))
  }

  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutButton