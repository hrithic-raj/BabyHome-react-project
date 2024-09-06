import React, { useState } from 'react'
import dp from '../Assets/Main/profile.png'
import MyNavbar from '../components/MyNavbar'
function Profile() {
    const [profilePic,setProfilePic]=useState(dp)
  return (
    <div>
        <MyNavbar/>
        <div className='mt-[150px] flex justify-center gap-4'>
            <div className=''>
                <img src={profilePic} alt="" />
            </div>
            <div className='w-[700px] flex flex-col space-y-3'>
                <input type="text" placeholder='Name' disabled/>
                <input type="text" placeholder='Username' disabled/>
            </div>
        </div>
    </div>
  )
}

export default Profile