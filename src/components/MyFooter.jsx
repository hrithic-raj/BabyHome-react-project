import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
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
              <li className="my-1 hover:text-pink-500 cursor-pointer">Home</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Shop</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">About Us</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Contact Us</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Cart</li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
            <ul>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Track Your Order</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Shipping & Returns</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Terms & Conditions</li>
              <li className="my-1 hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="mb-3">
              Subscribe to our newsletter and get the latest updates on new arrivals and special offers!
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg text-black"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600">
                Subscribe
              </button>
            </form>
          </div>
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