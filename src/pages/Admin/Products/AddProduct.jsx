import React, { useState } from 'react';
import Sidebar from '../../../components/SideBar';
import AdminNavbar from '../../../components/AdminNav';
import { addtoProduct } from '../../../Api/Admin-api';
import { toast } from 'react-toastify';

const AddProductForm = () => {
const [newProduct,setNewProduct]=useState({
  name:'',
  description:'',
  category:'bathing',
  price:null,
  oldprice:null,
  stock:null,
  bestseller:false,
  newlyadded:false,
  addedDate:new Date().toISOString(),
  images:['']
})
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!newProduct.name) newErrors.name = 'Name is required';
    if (!newProduct.description) newErrors.description = 'Description is required';
    if (!newProduct.images[0]) newErrors.image = 'Main image is required';
    if (newProduct.images.length === 0 || newProduct.images.includes('')) newErrors.images = 'At least one image URL is required';
    
    if (typeof newProduct.price !== 'number' || newProduct.price <= 0) newErrors.price = 'Price must be a positive number';
    if (typeof newProduct.oldprice !== 'number' || newProduct.oldprice <= 0) newErrors.oldprice = 'Old price must be a positive number';
    if (newProduct.oldprice < newProduct.price) newErrors.oldprice1 = 'Oldprice must be greater than oru equal to price';
    if (typeof newProduct.stock !== 'number' || newProduct.stock <=0) newErrors.stock = 'Stock must be a non-negative number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleChange =(e) => {
  const {name, value, type, checked} = e.target;
  if(type==='checkbox'){
    setNewProduct({ ...newProduct,[name]: checked});
  }
  else if(name==='price' || name==='oldprice' || name==='stock'){
    setNewProduct({ ...newProduct, [name]: Number(value) });
  }
  else{
    setNewProduct({ ...newProduct, [name]: value });
  }
  // console.log(newProduct)
}
      const addNewImageField = () => {
      setNewProduct((prev) => ({
        ...prev,
        images: [...prev.images, '']
      }));
    };

  const handleImageChange = (e, index) => {
    const updatedImages = [...newProduct.images];
    updatedImages[index] = e.target.value;
    setNewProduct((prev) => ({
      ...prev,
      images: updatedImages,
    }));
    // console.log([...newProduct.images])
  };

const handleSubmit=async(e)=>{
  e.preventDefault();
  if(validateForm()){
    addtoProduct(newProduct)
    .then(()=>{
      setNewProduct({
        name:'',
        description:'',
        category:'bathing',
        price:null,
        oldprice:null,
        stock:null,
        bestseller:false,
        newlyadded:false,
        addedDate:'',
        images:['']
      })
      setErrors('')
      toast.success("New Product Added")
    })
    .catch(err=>console.error('Error adding product:', err))
    // console.log('Product added',newProduct)
  }
  else{
    console.log('Validation error',errors)
  }
}

  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[80px]'>
          <Sidebar/>
          <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
              <h2 className="text-2xl font-bold text-gray-700">Add Product</h2>
              
              <div>
                <label className="block text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
              </div>

              <div>
                <label className="block text-gray-700">Category</label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                >
                  <option value="bathing">Bathing</option>
                  <option value="toys">Toys</option>
                  <option value="diapers">Diapers</option>
                  <option value="foods">Foods</option>
                  <option value="cloths">Cloths</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700">Old Price</label>
                  <input
                    type="number"
                    name="oldprice"
                    value={newProduct.oldprice}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.oldprice && <span className="text-red-500 text-sm">{errors.oldprice}</span>}
                  {errors.oldprice1 && <span className="text-red-500 text-sm">{errors.oldprice1}</span>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.stock && <span className="text-red-500 text-sm">{errors.stock}</span>}
              </div>

              <div className='flex flex-wrap justify-center space-x-5'>
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700">Bestseller</label>
                  <input
                    type="checkbox"
                    name="bestseller"
                    checked={newProduct.bestseller}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="text-gray-700">Newly Added</label>
                  <input
                    type="checkbox"
                    name="newlyadded"
                    checked={newProduct.newlyadded}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Main Image */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Main Image URL</label>
                  <input
                    type="text"
                    value={newProduct.images[0]}
                    onChange={(e) => handleImageChange(e, 0)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Main Image URL"
                  />
                  {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
                </div>

                {/* Additional Images */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Additional Images</label>
                  {newProduct.images.slice(1).map((img, index) => (
                    <div key={index} className="mb-2">
                      <input
                        type="text"
                        value={img}
                        onChange={(e) => handleImageChange(e, index + 1)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder={`Additional Image URL ${index + 1}`}
                      />
                      {errors.images && <span className="text-red-500 text-sm">{errors.images}</span>}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addNewImageField}
                  className="mb-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                >
                  Add Another Image
                </button>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default AddProductForm;