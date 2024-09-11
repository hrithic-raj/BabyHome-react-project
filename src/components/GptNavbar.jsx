import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GptNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Fetch products when the search term changes
  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === "") {
        setProducts([]); // Clear products when the search box is empty
        setShowModal(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/products?search=${searchTerm}`);
        setProducts(response.data);
        setShowModal(true); // Show modal with the results
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    // Add a slight delay to reduce unnecessary API calls (debounce)
    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleProductClick = (id) => {
    setShowModal(false); // Close modal
    navigate(`/store/product/${id}`); // Redirect to the product page
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl">My Store</h1>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 rounded bg-gray-200 focus:outline-none"
          />

          {/* Modal for search results */}
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
    </div>
  );
};

export default GptNavbar;