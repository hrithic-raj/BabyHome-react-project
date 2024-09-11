import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart, FaUser, FaDonate, FaBars, FaTimes ,FaSearch} from 'react-icons/fa';
import logo from '../Assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { getUserById } from '../Api/Login-api';
import axios from 'axios';
import { getProductById, getProducts } from '../Api/Product-api';

function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate=useNavigate()
    const {cart}=useContext(AuthContext);
    const userId=localStorage.getItem('userId')
    
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    useEffect(()=>{
      const fetchProducts = async () => {
        if(searchTerm.trim()===''){
          setProducts([])
          setShowModal(false)
          return;
        }
        try{
          const res= await getProducts();
          const searchProducts=res.data.filter(product=>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setProducts(searchProducts);
          setShowModal(true);
        }
        catch(error){
          console.error("Error searching result :", error);
        }
      }

      const delaySearch = setTimeout(() => {
        fetchProducts();
      }, 300);
      
      return () => clearTimeout(delaySearch);
    },[searchTerm])

    const handleProductClick=(id)=>{
      setShowModal(false);
      navigate(`/store/product/${id}`)
    }

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
              onChange={(e)=>setSearchTerm(e.target.value)}
            />

            {/* Search Box Modal */}
        {showModal && products.length > 0 && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              <ul className="divide-y divide-gray-300">
                {products.map((product) => (
                  <li
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                  >
                    {product.name} 
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>

        

        {/* Right */}
        <div className="flex items-center space-x-6 me-3">
          <button className="text-gray-600 hover:text-gray-400" onClick={()=>navigate('/donation')}>
            <FaDonate size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-400 relative h-10"  onClick={()=>(userId)?navigate('/cart'):navigate('/login')}>
          <FaShoppingCart size={24} />
          {cart?(
            <span className='absolute top-1 left-4 bg-yellow-300 rounded-lg h-5 w-5 text-sm text-center'>{cart.length}</span>
          ):(
            <span>0</span>
          )}
          </button>
          <button className="text-gray-600 hover:text-gray-400 flex"  onClick={()=>navigate('/Profile')}>
            <FaUser size={24} />
            <span></span>
          </button>
          {/* {userId?(
            <span className='text-lg text-black'>{user.username}</span>
          ):(
            <></>
          )} */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white min-h-[500px] space-y-10 py-4 px-4">
          <NavLink to={'/home'} className="block hover:text-gray-400">Home</NavLink>
          <NavLink to={'/store'} className="block hover:text-gray-400">Store</NavLink>
          <NavLink to={'/about'} className="block hover:text-gray-400">About Us</NavLink>
          <NavLink to={'/contactus'} className="block hover:text-gray-400">Contact Us</NavLink>
          <div className='relative'>
          <input 
            type="text" 
            placeholder="Search..." 
            className="block w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            {/* Search Box Modal */}
            {showModal && products.length > 0 && (
              <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                <ul className="divide-y divide-gray-300">
                  {products.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="text-black  cursor-pointer p-2 hover:bg-gray-100"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
    </div>
    </>
  )
}

export default MyNavbar