import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaDonate, FaBars, FaTimes ,FaSearch} from 'react-icons/fa';
import logo from '../Assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'
function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate()
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
   <>
  <div className='fixed top-0 w-full z-50 p-4 border-b border-gray-300' style={{backgroundColor :'#FFFFFF' ,height : "130px", width :"100%" ,marginBottom :"300px"}}>
    <nav >
      <div className="container flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-4">
          {/* Hamburger*/}
          <button 
            className="md:hidden text-black hover:text-gray-400" 
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Logo */}
          <div >
              <img onClick={()=>navigate('/home')} style={{width :"270px", height : "120px"}} src={logo} alt="Logo" />
          </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><NavLink to={'/home'} className="text-gray-700 hover:text-gray-400">Home</NavLink></li>
          <li><NavLink to={'/store'} className="text-gray-700 hover:text-gray-400">Store</NavLink></li>
          <li><NavLink to={'/about'} className="text-gray-700  hover:text-gray-400">About Us</NavLink></li>
          <li><NavLink to={'/contactus'} className="text-gray-700  hover:text-gray-400">Contact Us</NavLink></li>
        </ul>

        {/* Search Box */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-2/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-100"

            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-6 me-3">
          <button className="text-gray-600 hover:text-gray-400" onClick={()=>navigate('/home')}>
            <FaDonate size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-400">
          <FaShoppingCart size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-400 "  onClick={()=>navigate('/Profile')}>
            <FaUser size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white min-h-[500px] space-y-10 py-4 px-4">
          <NavLink to={'/home'} className="block hover:text-gray-400">Home</NavLink>
          <NavLink to={'/store'} className="block hover:text-gray-400">Store</NavLink>
          <NavLink className="block hover:text-gray-400">About Us</NavLink>
          <NavLink className="block hover:text-gray-400">Contact Us</NavLink>

          <input 
            type="text" 
            placeholder="Search..." 
            className="block w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      )}
    </nav>
    </div>
    </>
  )
}

export default MyNavbar