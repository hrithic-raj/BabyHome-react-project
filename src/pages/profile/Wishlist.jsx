import React, { useEffect, useState, useContext, useCallback} from 'react'
import dp from '../../Assets/Main/profile.png'
import MyNavbar from '../../components/MyNavbar'
import { addAddress, getAddressById, getUserById } from '../../Api/Login-api'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
    const navigate=useNavigate();
    const [profilePic,setProfilePic]=useState(dp)
    const userId=localStorage.getItem('userId')
    const [user,setUser]=useState([]);
    const [component,setComponent]=useState([]);
    const {logout}=useContext(AuthContext)
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
    },[])
    const handleLogout=()=>{
        logout()
        navigate('/home')
    }
  return (
    <div>
        <MyNavbar/>
        <div className='mt-[150px] flex flex-wrap justify-center space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 mb-[100px]'>
            <div className='flex flex-col space-y-4 border p-4 shadow-lg h-[600px]'>
                <img className='w-[300px] h-[300px]' src={profilePic} alt="" />
                {userId?(
                    <>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/profile')}>Account Details</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/orders')}>Orders</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/wishlist')}>Wishlist</button>
                        <button className='text-white bg-red-400 h-[40px] rounded sticky top-0' onClick={handleLogout}>LOGOUT</button>
                    </>
                ):(
                    <button className='text-white bg-blue-400 h-[40px] rounded' onClick={()=>navigate('/login')}>LOG-IN</button>
                )
                }
                
            </div>
            <div className='w-[800px] flex flex-col shadow-lg p-4 border'>
                
            </div>
            
        </div>
    </div>
  )
}

export default Wishlist