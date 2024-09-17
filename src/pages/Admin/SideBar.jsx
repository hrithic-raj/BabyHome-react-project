import { useState } from 'react';
import { FaHome, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa'; // Example icons
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon
import logoS from '../../Assets/logo-small.png'
import logoB from '../../Assets/title.png'
import productIcon from '../../Assets/Main/product.png'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className='fixed z-50'>
        <div className="flex ">
            {/* Desktop Sidebar */}
            <div
                className={`hidden lg:flex flex-col  absolute top-0 z-50 bg-gray-800 h-screen text-white transition-all duration-300 ${
                isOpen ? 'w-64' : 'w-16'
                }`}
                onMouseEnter={toggleSidebar}
                onMouseLeave={toggleSidebar}
            >
                {/* Icons + Button Names */}
                <div className="flex flex-col items-center mt-6 space-y-4">
                <div className='h-200px flex space-x-4 items-center mb-10'>
                    {/* {isOpen ? <img className='w-64' src={logoB} alt="" />:<img className='max-w-[60px] text-left mb-5' src={logoS} alt="" />} */}
                    <img className='max-w-[60px]' src={logoS} alt="" />
                    {isOpen && <img className='w-[150px] h-12' src={logoB}/>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    <FaHome className='ms-3' size={24} />
                    {isOpen && <span>Home</span>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    <FaUser className='ms-3' size={24} />
                    {isOpen && <span>User</span>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    {/* <FaShoppingCart size={24} /> */}
                    <img className='ms-3' src={productIcon} size={24} alt="" />
                    {isOpen && <span>Products</span>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    <FaShoppingCart className='ms-3' size={24} />
                    {isOpen && <span>Orders</span>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    <FaShoppingCart className='ms-3' size={24} />
                    {isOpen && <span>Orders</span>}
                </div>
                <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                    <FaShoppingCart className='ms-3' size={24} />
                    {isOpen && <span>Orders</span>}
                </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden absolute top-0 z-50">
                <button onClick={toggleMobileSidebar} className="p-4 ">
                <GiHamburgerMenu size={24} />
                </button>
                {isMobileOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50">
                    <div className="flex flex-col bg-gray-800 h-screen w-64 text-white p-4 space-y-4">
                    <button
                        onClick={toggleMobileSidebar}
                        className="self-end p-2 focus:outline-none"
                    >
                        <FaTimes size={24} />
                    </button>
                    {/* Icons + Button Names */}
                    <div className="flex flex-col space-y-4">
                        <div className=''>
                            <img src={logoB} alt="" />
                        </div>
                        <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                        <FaHome size={24} />
                        <span>Home</span>
                        </div>
                        <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                        <FaUser size={24} />
                        <span>User</span>
                        </div>
                        <div className="flex items-center space-x-4 w-full p-2 hover:bg-gray-700">
                        <FaShoppingCart size={24} />
                        <span>Orders</span>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
    </div>
  );
};

export default Sidebar;
