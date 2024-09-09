import React, { useEffect, useState } from 'react'
import dp from '../Assets/Main/profile.png'
import MyNavbar from '../components/MyNavbar'
import { getUserById } from '../Api/Login-api'
function Profile() {
    const [profilePic,setProfilePic]=useState(dp)
    const userId=localStorage.getItem('userId')
    const [user,setUser]=useState([]);
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
    },[])
  return (
    <div>
        <MyNavbar/>
        <div className='mt-[150px] flex justify-center gap-4'>
            <div className=''>
                <img src={profilePic} alt="" />
            </div>
            <div className='w-[700px] flex flex-col space-y-3'>
                <input type="text" value={user.name} placeholder='Name' disabled/>
                <input type="text" value={user.username} placeholder='Username' disabled/>
            </div>
        </div>
    </div>
  )
}

export default Profile