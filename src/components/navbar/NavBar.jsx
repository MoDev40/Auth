import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../../lib/token'
const NavBar = ({isAuth,setIsAuth}) => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    removeToken();
    setIsAuth(false)
    navigate("/login")
    
  }
  return (
    <div className='flex flex-row justify-between cursor-pointer p-6 bg-neutral-700 text-white'>
        <Link to="/" className='text-2xl font-black'>Auth-App</Link>
        <div className='space-x-8 capitalize text-xl'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to={isAuth ? "/profile" :"/signup"}>{isAuth ? "Profile" : "SingUp"}</Link>
            {
              !isAuth&&
              <Link to="/login">LogIn</Link>
            }
            {
              isAuth&& 
              <button className='bg-red-600 py-1 px-2 rounded'
                onClick={handleLogout}
              >Logout</button>
            }
        </div>
    </div>
  )
}

export default NavBar