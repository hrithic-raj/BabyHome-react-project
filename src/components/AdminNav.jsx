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
      navigate(`/admin/users/user/${userId}`)
    };

    useEffect(()=>{
      if(!admin){
        navigate('/home')
      }
    })
  return (
   <>
  <div className='fixed top-0 w-full z-30 p-4 border-b border-gray-300' style={{backgroundColor :'#FFFFFF' ,height : "80px", width :"100%"}}>
    <nav className='ms-16'>
      <div className="container flex items-center justify-between">
        {/* Search Box */}
        <div className="hidden sm:flex flex-1 justify-start items-center">
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
      </div>
    </nav>
    </div>
    </>
  )
}

export default AdminNavbar