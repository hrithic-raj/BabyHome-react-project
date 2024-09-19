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

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct= () => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     category: '',
//     price: '',
//     oldprice: '',
//     bestseller: false,
//     newlyadded: false,
//     stock: '',
//     rating: '',
//     images: [''] // Main image is always the first one
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleImageChange = (e, index) => {
//     const updatedImages = [...product.images];
//     updatedImages[index] = e.target.value;
//     setProduct((prev) => ({
//       ...prev,
//       images: updatedImages,
//     }));
//   };

//   const addNewImageField = () => {
//     setProduct((prev) => ({
//       ...prev,
//       images: [...prev.images, '']
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newProduct = {
//       ...product,
//       price: Number(product.price),
//       oldprice: Number(product.oldprice),
//       stock: Number(product.stock),
//       rating: Number(product.rating),
//     };

//     axios.post('http://localhost:3000/products', newProduct)
//       .then(response => {
//         console.log('Product added successfully', response.data);
//         setProduct({
//           name: '',
//           description: '',
//           category: '',
//           price: '',
//           oldprice: '',
//           bestseller: false,
//           newlyadded: false,
//           stock: '',
//           rating: '',
//           images: ['']
//         });
//       })
//       .catch(error => {
//         console.error('Error adding product', error);
//       });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Product Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Description</label>
//           <textarea
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={product.category}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Price */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Old Price */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Old Price</label>
//           <input
//             type="number"
//             name="oldprice"
//             value={product.oldprice}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Bestseller */}
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="bestseller"
//               checked={product.bestseller}
//               onChange={handleChange}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700 font-medium">Best Seller</span>
//           </label>
//         </div>

//         {/* Newly Added */}
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="newlyadded"
//               checked={product.newlyadded}
//               onChange={handleChange}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700 font-medium">Newly Added</span>
//           </label>
//         </div>

//         {/* Stock */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Stock</label>
//           <input
//             type="number"
//             name="stock"
//             value={product.stock}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Rating */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Rating</label>
//           <input
//             type="number"
//             step="0.1"
//             name="rating"
//             value={product.rating}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>

//         {/* Main Image */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Main Image URL</label>
//           <input
//             type="text"
//             value={product.images[0]}
//             onChange={(e) => handleImageChange(e, 0)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             placeholder="Main Image URL"
//             required
//           />
//         </div>

//         {/* Additional Images */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Additional Images</label>
//           {product.images.slice(1).map((img, index) => (
//             <div key={index} className="mb-2">
//               <input
//                 type="text"
//                 value={img}
//                 onChange={(e) => handleImageChange(e, index + 1)}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 placeholder={`Additional Image URL ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={addNewImageField}
//           className="mb-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
//         >
//           Add Another Image
//         </button>

//         <div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     name: '',
//     description: '',
//     category: 'cloths', // Default value
//     price: '',
//     oldprice: '',
//     stock: '',
//     images: [],
//     image: '',
//     additionalImageInput: '',
//   });
//   const [error, setError] = useState('');

//   // Handle input changes
//   const handleInputChange = (e) => {
//     setProductData({
//       ...productData,
//       [e.target.name]: e.target.value,
//     });
//     console.log(productData)
//   };

//   // Handle image adding
//   const addAdditionalImage = () => {
//     if (productData.additionalImageInput) {
//       setProductData({
//         ...productData,
//         images: [...productData.images, productData.additionalImageInput],
//         additionalImageInput: '',
//       });

//     }
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation: check if required fields are filled
//     if (!productData.name || !productData.description || !productData.price || !productData.stock) {
//       setError('Please fill all required fields.');
//       return;
//     }

//     // Add main image to the images array if it's not empty
//     if (productData.image) {
//       productData.images = [productData.image, ...productData.images];
//     }

//     try {
//       // Send data to your JSON server
//       await axios.post('http://localhost:5000/products', productData);
//       alert('Product added successfully');
//       setError(''); // Clear any existing error
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
//       <form className="w-full max-w-lg bg-white shadow-md rounded p-8" onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Product Name *</label>
//           <input
//             type="text"
//             name="name"
//             value={productData.name}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Name"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Description *</label>
//           <textarea
//             name="description"
//             value={productData.description}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Description"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Category *</label>
//           <select
//             name="category"
//             value={productData.category}
//             onChange={handleInputChange}
//             className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           >
//             <option value="bathings">Bathings</option>
//             <option value="toys">Toys</option>
//             <option value="diapers">Diapers</option>
//             <option value="foods">Foods</option>
//             <option value="cloths">Cloths</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Price *</label>
//           <input
//             type="number"
//             name="price"
//             value={productData.price}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Product Price"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Old Price</label>
//           <input
//             type="number"
//             name="oldprice"
//             value={productData.oldprice}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Old Price"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Stock *</label>
//           <input
//             type="number"
//             name="stock"
//             value={productData.stock}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Stock"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Main Image *</label>
//           <input
//             type="text"
//             name="image"
//             value={productData.image}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Main Image URL"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Additional Images</label>
//           <div className="flex">
//             <input
//               type="text"
//               name="additionalImageInput"
//               value={productData.additionalImageInput}
//               onChange={handleInputChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Additional Image URL"
//             />
//             <button
//               type="button"
//               onClick={addAdditionalImage}
//               className="ml-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//             >
//               Add
//             </button>
//           </div>
//         </div>

//         <div className="mb-6">
//           {productData.images.length > 0 && (
//             <div className="text-gray-700 text-sm">
//               <strong>Images:</strong>
//               <ul className="list-disc list-inside">
//                 {productData.images.map((img, index) => (
//                   <li key={index}>{img}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-green-500 w-full text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;




import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'bathing',
    image: '',
    images: [''],
    price: 0,
    oldprice: 0,
    stock: 0,
    bestseller: false,
    newlyadded: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.image) newErrors.image = 'Main image is required';
    if (formData.images.length === 0 || formData.images.includes('')) newErrors.images = 'At least one image URL is required';
    
    if (typeof formData.price !== 'number' || formData.price <= 0) newErrors.price = 'Price must be a positive number';
    if (typeof formData.oldprice !== 'number' || formData.oldprice < 0) newErrors.oldprice = 'Old price must be a positive number';
    if (typeof formData.stock !== 'number' || formData.stock < 0) newErrors.stock = 'Stock must be a non-negative number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'price' || name === 'oldprice' || name === 'stock') {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-700">Add Product</h2>
      
      <div>
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div>
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
      </div>

      <div>
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
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

      <div>
        <label className="block text-gray-700">Main Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
      </div>

      <div>
        <label className="block text-gray-700">Other Images (comma separated URLs)</label>
        <input
          type="text"
          name="images"
          value={formData.images.join(', ')}
          onChange={(e) =>
            setFormData({ ...formData, images: e.target.value.split(',').map(url => url.trim()) })
          }
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.images && <span className="text-red-500 text-sm">{errors.images}</span>}
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
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
            value={formData.oldprice}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
          {errors.oldprice && <span className="text-red-500 text-sm">{errors.oldprice}</span>}
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
        {errors.stock && <span className="text-red-500 text-sm">{errors.stock}</span>}
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-700">Bestseller</label>
        <input
          type="checkbox"
          name="bestseller"
          checked={formData.bestseller}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-700">Newly Added</label>
        <input
          type="checkbox"
          name="newlyadded"
          checked={formData.newlyadded}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;