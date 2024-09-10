import React, { useEffect, useState, useContext, useCallback} from 'react'
import dp from '../Assets/Main/profile.png'
import MyNavbar from '../components/MyNavbar'
import { getUserById } from '../Api/Login-api'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const navigate=useNavigate();
    const [profilePic,setProfilePic]=useState(dp)
    const userId=localStorage.getItem('userId')
    const [user,setUser]=useState([]);
    const {logout}=useContext(AuthContext)
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
    },[])

    const handleLogout=()=>{
        logout()
        navigate('/login')
    }
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
                {userId?(
                    <button className='text-white bg-blue-400 h-[40px] rounded' onClick={handleLogout}>LOGOUT</button>
                ):(
                    <button className='text-white bg-blue-400 h-[40px] rounded' onClick={()=>navigate('/login')}>LOG-IN</button>
                )
                }
                
            </div>
        </div>
    </div>
  )
}

export default Profile