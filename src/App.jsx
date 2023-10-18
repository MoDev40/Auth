import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/user/SignUp'
import Home from './components/pages/Home'
import LogIn from './components/user/LogIn'
import NavBar from './components/navbar/NavBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { getToken } from './lib/token'
import Profile from './components/user/Profile'
import PrivateRoute from './PrivateRoute'
import About from './components/pages/About'
const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  useEffect(()=>{
    if(getToken()){
      setIsAuth(true)
    }
  },[getToken(),isAuth])
  
  return (
    <div>
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/profile' element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile setIsAuth={setIsAuth}/>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App