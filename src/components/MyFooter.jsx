import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { addEmail } from '../Api/Product-api';

const MyFooter = () => {
  const navigate=useNavigate();
  const userId=localStorage.getItem('userId')
  const [email,setEmail]=useState('');
  const [subscribed,setSubscribed]=useState(false);

  const handleSub= async (e)=>{
    e.preventDefault();
    await addEmail(userId,email)
    .then(()=>setSubscribed(true))
    .catch((err)=>console.error(err))
  }
  return (
    <footer className="bg-red-100 text-black py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Baby Home Logo & About */}
          <div>
            <h2 className="text-2xl font-bold">Baby Home</h2>
            <p className="mt-3">
              Your one-stop shop for baby products, providing quality items for
              your little one with love and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <NavLink to={'/home'}><li className="my-1 hover:text-pink-500 cursor-pointer">Home</li></NavLink>
              <NavLink to={'/store'}><li className="my-1 hover:text-pink-500 cursor-pointer">Store</li></NavLink>
              <NavLink to={'/about'}><li className="my-1 hover:text-pink-500 cursor-pointer">About Us</li></NavLink>
              <NavLink to={'/contactus'}><li className="my-1 hover:text-pink-500 cursor-pointer">Contact Us</li></NavLink>
              <NavLink to={'/cart'}><li className="my-1 hover:text-pink-500 cursor-pointer">Cart</li></NavLink>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
            <ul>
            <NavLink to={'/orders'}><li className="my-1 hover:text-pink-500 cursor-pointer">Your Order</li></NavLink>
            <NavLink to={'/sr'}><li className="my-1 hover:text-pink-500 cursor-pointer">Shipping & Returns</li></NavLink>
            <NavLink to={'/tc'}><li className="my-1 hover:text-pink-500 cursor-pointer">Terms & Conditions</li></NavLink>
            <NavLink to={'/pp'}><li className="my-1 hover:text-pink-500 cursor-pointer">Privacy Policy</li></NavLink>
            </ul>
          </div>

          {!subscribed?(
            <div>
              <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
              <p className="mb-3">
                Subscribe to our newsletter and get the latest updates on new arrivals and special offers!
              </p>
              <form onSubmit={handleSub} className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-l-lg text-black"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button type='submit' className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600">
                  Subscribe
                </button>
              </form>
            </div>
          ):(
            <p className="mb-3">
                Thank you for Subscribing to our newsletter!
              </p>
          )}

        </div>

        <div className="border-t border-gray-700 mt-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-center">
          <div className="mb-4 md:mb-0">
            <span className="mr-3">Follow Us:</span>
            <FaFacebook className="inline-block mx-2 hover:text-pink-500 cursor-pointer" />
            <FaInstagram className="inline-block mx-2 hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="inline-block mx-2 hover:text-pink-500 cursor-pointer" />
          </div>
          <p className="text-gray-500">
            &copy; 2024 Baby Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;