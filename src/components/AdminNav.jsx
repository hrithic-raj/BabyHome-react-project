import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaShoppingCart, FaUser, FaDonate, FaBars, FaTimes ,FaSearch} from 'react-icons/fa';
import logo from '../Assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { getUserById } from '../Api/Login-api';
// import axios from 'axios';
import { getCartById, getProducts } from '../Api/Product-api';
import { getAllUsers } from '../Api/Admin-api';

function AdminNavbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [cart, setCart] = useState(false);
    const navigate=useNavigate()
    const {logout}=useContext(AuthContext);
    const userId=localStorage.getItem('userId')
    const admin=localStorage.getItem('admin')
    const cartAddAlert=props.cartAddAlert
    const cartRemoveAlert=props.cartRemoveAlert
    const cartCount=props.cartCount
    const paymentOptionAlert=props.paymentOptionAlert
    const cartEmptyAlert=props.cartEmptyAlert
    const orderPlacedAlert=props.orderPlacedAlert
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };
    useEffect(() => {
      const fetchResults = async () => {
        if (searchTerm.trim() === '') {
          setProducts([]);
          setUsers([]);
          setShowModal(false);
          return;
        }
        try {
          // Fetch products and users simultaneously
          const [productRes, userRes] = await Promise.all([getProducts(), getAllUsers()]);
          
          // Filter products based on searchTerm
          const searchProducts = productRes.data.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          
          // Filter users based on searchTerm
          const searchUsers = userRes.data.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          
          // Set the results
          setProducts(searchProducts);
          setUsers(searchUsers);
          setShowModal(true);
        } catch (error) {
          console.error("Error fetching results: ", error);
        }
      };
  
      // Add a debounce to prevent excessive API calls
      const delaySearch = setTimeout(() => {
        fetchResults();
      }, 300);
  
      return () => clearTimeout(delaySearch);
    }, [searchTerm]);


    useEffect(()=>{
      if(userId){
        getCartById(userId)
        .then((res)=>{
          setCart(res)
        })
      }
    },[userId,cartAddAlert,cartRemoveAlert])
    
    const handleProductClick=(productId)=>{
      setShowModal(false);
      navigate(`/admin/products/product/${productId}`)
    }
    const handleUserClick = (userId) => {
      setShowModal(false);
      navigate(`/admin/users/${userId}`)
    };

    useEffect(()=>{
      if(!admin){
        navigate('/home')
      }
    })
  return (
   <>
  <div className='fixed top-0 w-full z-30 p-4 border-b border-gray-300' style={{backgroundColor :'#FFFFFF' ,height : "100px", width :"100%" ,marginBottom :"300px"}}>
    <nav className='ms-16'>
      <div className="container flex items-center justify-between">
        {/* Search Box */}
        <div className="hidden lg:flex flex-1 justify-start items-center">
          <div className="relative w-2/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border-2 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-100"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Box Modal */}
            {showModal && (products.length > 0 || users.length > 0) && (
              <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                <ul className="divide-y divide-gray-300">
                  {/* Display users */}
                  {users.length > 0 && (
                    <li className="p-2 font-bold text-gray-600">Users</li>
                  )}
                  {users.map((user) => (
                    <li
                      key={user.id}
                      onClick={() => handleUserClick(user.id)}
                      className="cursor-pointer p-2 hover:bg-gray-100"
                    >
                      {user.name} (User)
                    </li>
                  ))}

                  {/* Display products */}
                  {products.length > 0 && (
                    <li className="p-2 font-bold text-gray-600">Products</li>
                  )}
                  {products.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="cursor-pointer p-2 hover:bg-gray-100"
                    >
                      {product.name} (Product)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        

        {/* Right */}
        <div className="flex items-center space-x-6 me-3 relative transition-all ease-in-out">
          <button className="text-gray-600 hover:text-gray-400" onClick={()=>navigate('/donation')}>
            <FaDonate size={24} />
          </button>
          <button className="text-gray-600 bg-rose-300 p-2 rounded-lg hover:text-gray-400 flex"  onClick={()=>logout()}>
            LOGOUT
            <span></span>
          </button>
          
        {cartAddAlert?(
          <div className="absolute text-center right-2 top-20 w-[200px] h-[45px] p-2 mt-2 bg-white border rounded-lg shadow-lg z-40 transition-all duration-500 ease-in-out">
                <span className='text-lg'>Item added to Cart ✅</span>
            </div>
        ):null}
        {cartRemoveAlert?(
          <div className="absolute text-center right-2 top-20 w-[260px] h-[45px] p-2 mt-2 bg-white border rounded-lg shadow-lg z-40  transition-all duration-500 ease-in-out">
                <span className='text-lg'>Item removed from Cart ❎</span>
            </div>
        ):null}
        {paymentOptionAlert?(
          <div className="absolute text-center right-2 top-20 w-[260px] h-[45px] p-2 mt-2 bg-white border rounded-lg shadow-lg z-40 transition-all duration-500 ease-in-out ">
                <span className='text-lg'>Add a Payment option ❌</span>
            </div>
        ):null}
        {cartEmptyAlert?(
          <div className="absolute text-center right-2 top-20 w-[260px] h-[45px] p-2 mt-2 bg-white border rounded-lg shadow-lg z-40 transition-all duration-500 ease-in-out ">
                <span className='text-lg'>Your Cart is Empty ❌</span>
            </div>
        ):null}
        {orderPlacedAlert?(
          <div className="absolute text-center right-2 top-20 w-[260px] h-[45px] p-2 mt-2 bg-white border rounded-lg shadow-lg z-40 transition-all duration-500 ease-in-out ">
                <span className='text-lg'>Your Order is placed ✅</span>
            </div>
        ):null}
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

export default AdminNavbar