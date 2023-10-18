import React from 'react'
import { useGetUserQuery } from '../../store/features/userSlice'
import { removeToken } from '../../lib/token'

const Profile = ({setIsAuth}) => {
    const {data:user = {} } = useGetUserQuery()
    const handleLogout = ()=>{
        removeToken();
        setIsAuth(false)        
      }
  return (
    <div className='w-full flex flex-col'>
        <div className='flex flex-col bg-sky-900 justify-center items-center space-y-6'>
            <img className='w-[100px] h-[100px] mt-4  rounded-full' src="/images/profile.jpg" alt="profile image"  />
            <div className='flex flex-col justify-center text-white items-center space-y-4 font-medium'>
                <span>Name:  {user.name}</span>
                <span>Email:  {user.email}</span>
                <span>Joined:  {user.created}</span>
            </div>
            <div className='flex space-x-6 p-4'>
                <button className='btn'>Setting</button>
                <button onClick={handleLogout} className='btn bg-red-500'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Profile