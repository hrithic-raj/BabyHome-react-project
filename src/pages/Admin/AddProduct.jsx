// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { addUser,checkUsername } from '../../Api/Login-api';
// import {useFormik} from 'formik';
// import * as yup from 'yup';
// import AdminNavbar from '../../components/AdminNav';
// import Sidebar from './SideBar';

// const validationSchema=yup.object({
//   name: yup.string().required('Name required'),
//   username:yup.string().required('Username required'),
//   email:yup.string().email('Invalid email format').required('Email required'),
//   password:yup.string().min(6,'Password must be at least 6 characters').required('Password required')
// })

// function AddProduct() {
//     const navigate=useNavigate()
//     const userId=localStorage.getItem('userId')

//     const formik=useFormik({
//       initialValues: {
//                     name: '',
//                     username: '',
//                     email: '',
//                     password: '',
//                     cart:[],
//                     orders:[],
//                     wishlist:[],
//       },
//       validationSchema,
//       onSubmit: async (values)=>{
//         const isUsername= await checkUsername(values.username)
//         if(!isUsername){
//           addUser(values)
//           alert('User Added')
//           navigate('/admin/user')
//         //   pass a modal
//         }
//         else{
//           formik.setFieldError('Username already exists');
//         }
//       }

//     })
//     // useEffect(()=>{
//     //   if(userId){
//     //     navigate('/home')
//     //   }
//     // },[userId])

//   return (
//     <div className='relative bg-gray-100'>
//         <AdminNavbar/>
//         <div className='mt-[100px]'>
//           <Sidebar/>
//         <div className='flex items-center justify-center'>
//             <div className='mt-5 bg-white rounded-lg shadow-lg w-[500px] mb-10 flex flex-col items-center justify-center space-y-2 p-5'>
//                 <span className='text-3xl font-bold mb-10'>ADD PRODUCT</span>
//                 <form className='login-form w-[500px] flex flex-col items-center space-y-4' onSubmit={formik.handleSubmit} >
//                     <label htmlFor="name" className='w-[300px] text-left'>Name</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='name' type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.name && formik.errors.name ? (
//                     <div className="text-red-500">{formik.errors.name}</div>
//                     ) : null}
//                     <label htmlFor="username" className='w-[300px] text text-left'>Username</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='username' type="text" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.username && formik.errors.username ? (
//                     <div className="text-red-500">{formik.errors.username}</div>
//                     ) : null}
//                     <label htmlFor="email" className='w-[300px] text text-left'>Email</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='email' type="text" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.email && formik.errors.email ? (
//                     <div className="text-red-500">{formik.errors.email}</div>
//                     ) : null}
//                     <label htmlFor="password" className='w-[300px] text-left'>Password</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='password' type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Password'/>
//                     {formik.touched.password && formik.errors.password ? (
//                     <div className="text-red-500">{formik.errors.password}</div>
//                     ) : null}
//                     <button type='submit' className='bg-blue-400 text-white font-bold w-[300px] h-[39px] rounded'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default AddProduct


// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { addUser,checkUsername } from '../../Api/Login-api';
// import {useFormik} from 'formik';
// import * as yup from 'yup';
// import AdminNavbar from '../../components/AdminNav';
// import Sidebar from './SideBar';

// const validationSchema=yup.object({
//   name: yup.string().required('Name required'),
//   username:yup.string().required('Username required'),
//   email:yup.string().email('Invalid email format').required('Email required'),
//   password:yup.string().min(6,'Password must be at least 6 characters').required('Password required')
// })

// function AddProduct() {
//     const navigate=useNavigate()
//     const userId=localStorage.getItem('userId')
//     const product=[
//       {
//         "id": "1010",
//         "name": "Baby Bibs (Set of 5)",
//         "description": "Cute and absorbent bibs with adjustable snap closure, perfect for feeding time.",
//         "category": "cloths",
//         "image": "https://f.media-amazon.com/images/I/61U2BVM9bPL.SX679.jpg",
//         "images": [
//           "https://f.media-amazon.com/images/I/61U2BVM9bPL.SX679.jpg",
//           "https://f.media-amazon.com/images/I/51Pg5eOm9gL.jpg",
//           "https://f.media-amazon.com/images/I/51D0phOimQL.jpg",
//           "https://f.media-amazon.com/images/I/51BSpPsw52L.jpg",
//           "https://f.media-amazon.com/images/I/51uAUJqW4tL.jpg"
//         ],
//         "price": 250,
//         "oldprice": 350,
//         "bestseller": false,
//         "newlyadded": true,
//         "stock": 28,
//         "rating": 4.6
//       },
//     ]
//     const formik=useFormik({
//       initialValues: {
//                     name: '',
//                     description: '',
//                     image: '',
//                     images: [],
//                     price: '',
//                     oldprice: '',
//                     bestseller: '',
//                     newlyadded: '',
//                     stock: '',
//       },
//       validationSchema,
//       onSubmit: async (values)=>{
//         const isUsername= await checkUsername(values.username)
//         if(!isUsername){
//           addUser(values)
//           alert('User Added')
//           navigate('/admin/user')
//         //   pass a modal
//         }
//         else{
//           formik.setFieldError('Username already exists');
//         }
//       }

//     })
//     // useEffect(()=>{
//     //   if(userId){
//     //     navigate('/home')
//     //   }
//     // },[userId])

//   return (
//     <div className='relative bg-gray-100'>
//         <AdminNavbar/>
//         <div className='mt-[100px]'>
//           <Sidebar/>
//         <div className='flex items-center justify-center'>
//             <div className='mt-5 bg-white rounded-lg shadow-lg w-[500px] mb-10 flex flex-col items-center justify-center space-y-2 p-5'>
//                 <span className='text-3xl font-bold mb-10'>ADD PRODUCT</span>
//                 <form className='login-form w-[500px] flex flex-col items-center space-y-4' onSubmit={formik.handleSubmit} >
//                     <label htmlFor="name" className='w-[300px] text-left'>Name</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='name' type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.name && formik.errors.name ? (
//                     <div className="text-red-500">{formik.errors.name}</div>
//                     ) : null}
//                     <label htmlFor="username" className='w-[300px] text text-left'>Username</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='username' type="text" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.username && formik.errors.username ? (
//                     <div className="text-red-500">{formik.errors.username}</div>
//                     ) : null}
//                     <label htmlFor="email" className='w-[300px] text text-left'>Email</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='email' type="text" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
//                     {formik.touched.email && formik.errors.email ? (
//                     <div className="text-red-500">{formik.errors.email}</div>
//                     ) : null}
//                     <label htmlFor="password" className='w-[300px] text-left'>Password</label>
//                     <input  className='w-[300px] h-[37px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='password' type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Password'/>
//                     {formik.touched.password && formik.errors.password ? (
//                     <div className="text-red-500">{formik.errors.password}</div>
//                     ) : null}
//                     <button type='submit' className='bg-blue-400 text-white font-bold w-[300px] h-[39px] rounded'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default AddProduct

import React, { useState } from 'react';
import axios from 'axios';

const AddProduct= () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    oldprice: '',
    bestseller: false,
    newlyadded: false,
    stock: '',
    rating: '',
    images: [''] // Main image is always the first one
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e, index) => {
    const updatedImages = [...product.images];
    updatedImages[index] = e.target.value;
    setProduct((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const addNewImageField = () => {
    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      price: Number(product.price),
      oldprice: Number(product.oldprice),
      stock: Number(product.stock),
      rating: Number(product.rating),
    };

    axios.post('http://localhost:3000/products', newProduct)
      .then(response => {
        console.log('Product added successfully', response.data);
        setProduct({
          name: '',
          description: '',
          category: '',
          price: '',
          oldprice: '',
          bestseller: false,
          newlyadded: false,
          stock: '',
          rating: '',
          images: ['']
        });
      })
      .catch(error => {
        console.error('Error adding product', error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Old Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Old Price</label>
          <input
            type="number"
            name="oldprice"
            value={product.oldprice}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Bestseller */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="bestseller"
              checked={product.bestseller}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700 font-medium">Best Seller</span>
          </label>
        </div>

        {/* Newly Added */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="newlyadded"
              checked={product.newlyadded}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700 font-medium">Newly Added</span>
          </label>
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Main Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Main Image URL</label>
          <input
            type="text"
            value={product.images[0]}
            onChange={(e) => handleImageChange(e, 0)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Main Image URL"
            required
          />
        </div>

        {/* Additional Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Additional Images</label>
          {product.images.slice(1).map((img, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={img}
                onChange={(e) => handleImageChange(e, index + 1)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={`Additional Image URL ${index + 1}`}
              />
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

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;