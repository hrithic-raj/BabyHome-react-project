import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaDonate, FaBars, FaTimes ,FaSearch} from 'react-icons/fa';
import logo from '../Assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'
function AuthNav() {
    const navigate=useNavigate()
  return (
   <>
  <div className='fixed top-0 w-full z-50 p-4 border-b border-gray-300' style={{backgroundColor :'#FFFFFF' ,height : "120px", width :"100%"}}>
    <nav >
      <div className="container flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className='hover:cursor-pointer' onClick={()=>navigate('/home')}>
              <img style={{width :"270px", height : "100px"}} src={logo} alt="Logo" />
          </div>
        </div>
        {/* Right*/}
        <div className="flex items-center space-x-4 me-3">
          <button className="bg-red-300 p-2 rounded-lg text-white hover:text-gray-200" onClick={()=>navigate('/signup')}>
            SIGN UP
          </button>
          <button className=" bg-pink-300 p-2 rounded-lg text-white hover:text-gray-200 "  onClick={()=>navigate('/login')}>
            LOGIN
          </button>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}

export default AuthNav