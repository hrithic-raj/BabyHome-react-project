import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProductById, getAllProducts } from '../../Api/Admin-api';
import { getByCategory } from '../../Api/Product-api';

function AdminProduct() {
  const navigate=useNavigate();
  const [isEdit,setIsEdit]=useState(false);
  const [products,setProducts]=useState([]);
  const {category} =useParams('category')
  
  const handleDel=(id)=>{
    deleteProductById(id)
    .then((res)=>console.log(res.data))
  }

  useEffect(()=>{
    if(category){
      getByCategory(category)
      .then(res=>{
        setProducts(res.data)
      })
    }
    else{
      getAllProducts()
      .then((res)=>{
        setProducts(res.data)
      })
    }
  },[category,handleDel])

  const handleEdit=()=>{
    setIsEdit(!isEdit)
  }
  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[100px]'>
          <Sidebar/>
          <div className='lg:ms-20 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-1 mt-4 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-3 md:gap-6 gap-y-3 order-1 justify-items-center'>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 flex justify-between cursor-pointer' onClick={()=>navigate('/admin/products/addproduct')}>
                <div>
                  <div className="text-black text-3xl font-bold mt-2">Add Product</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" className='w-[150px] mt-3' alt="" />
                </div>
              </div>
              
              <div className='max-h-[550px] min-h-[400px] w-[330px] md:w-full p-2 bg-white rounded-lg shadow-lg md:col-span-4 md:row-span-4 lg:col-span-6 lg:row-span-3 order-3 lg:order-2'>
                
                <div className='flex flex-col items-center border-b-2'>
                    <span className='text-3xl bg-white text-center'>Product List</span>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 border-2 w-[300px] rounded-md focus:outline-none focus:ring-1 focus:ring-pink-100 mb-2"
                    />
                    <div className='md:w-[600px] flex justify-between mb-2 flex-wrap'>
                      <button className='text-white bg-green-300 p-2 rounded-md w-[100px]' onClick={()=>navigate(`/admin/products/bathing`)}>Bathing</button>
                      <button className='text-white bg-blue-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/toys`)}>Toys</button>
                      <button className='text-white bg-red-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/cloths`)}>Cloths</button>
                      <button className='text-white bg-orange-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/foods`)}>Foods</button>
                      <button className='text-white bg-pink-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/diapers`)}>Diapers</button>
                    </div>
                </div>
                <div className='mt-5  flex flex-col md:w-full w-[300px] h-[370px] overflow-auto custom-scrollbar'>
                    <div className='mb-6 grid grid-cols-8 justify-items-center w-[700px] md:w-full'>
                        <span className='md:text-lg text-md font-semibold'>IMAGE</span>
                        <span className='md:text-lg text-md font-semibold'>NAME</span>
                        <span className='md:text-lg text-md font-semibold'>DESCRIPTION</span>
                        <span className='md:text-lg text-md font-semibold'>BEST SELLERS</span>
                        <span className='md:text-lg text-md font-semibold'>NEWLY ADDED</span>
                        <span className='md:text-lg text-md font-semibold'>CATEGORY</span>
                        <span className='md:text-lg text-md font-semibold'>EDIT</span>
                        <span className='md:text-lg text-md font-semibold'>DELETE</span>
                    </div>
                    <div className=''>
                      {products.map(product=>(
                        <div key={product.id} className='grid grid-cols-8 justify-items-center items-center w-[700px] md:w-full'>
                          <img className='w-[70px]' src={product.images[0]} alt="" />
                          <span>{product.name}</span>
                          <span className='max-w-[100px] max-h-[50px] overflow-hidden'>{product.description}</span>
                          {product.bestseller?<img className='w-10' src="https://cdn-icons-png.flaticon.com/512/2851/2851399.png" alt="" />:<img className='w-10' src="" alt="" />}
                          {product.newlyadded?<img className='w-10' src="https://cdn-icons-png.flaticon.com/512/891/891509.png" alt="" />:<img className='w-10' src="" alt="" />}
                          <span>{product.category}</span>
                          <button className='text-white bg-blue-300 p-2 rounded-md ' onClick={()=>handleEdit()}>EDIT</button>
                          <button className='text-white bg-red-400 p-2 rounded-md' onClick={()=>handleDel(product.id)}>DELETE</button>
                        </div>
                      ))}
                    </div>
                    
                    {/* <div className='grid grid-cols-8 justify-items-center items-center w-[700px] md:w-full'>
                        <img className='w-[70px]' src="https://f.media-amazon.com/images/I/71iEXzJBCOL._SX569_.jpg" alt="" />
                        <span>Shamboo</span>
                        <span>number one in the world</span>
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/2851/2851399.png" alt="" />
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/891/891509.png" alt="" />
                        <span>Toys</span>
                        <button className='text-white bg-blue-300 p-2 rounded-md ' onClick={()=>handleEdit()}>EDIT</button>
                        <button className='text-white bg-red-400 p-2 rounded-md'>DELETE</button>
                    </div> */}
                </div>
              </div>
              
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:row-span-2 flex justify-between order-2 lg-order-3'>
              <div>
                  <div className="text-green-600 font-bold">Total Products</div>
                  <div className="text-3xl font-semibold">34</div>
                </div>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/512/10112/10112502.png" className='w-[130px] mt-4' alt="" />
                </div>
              </div>
          </div>
          </div>
        </div>
        {/* Edit modal */}
        {isEdit?(
          <div className='absolute top-20 left-12 md:left-1/3 lg:left-1/3 w-[300px] min-h-[300px] md:w-[400px] md:min-h-[400px] border bg-blue-100'>
              <button className='text-white bg-red-400 p-2 rounded-md' onClick={()=>setIsEdit(!isEdit)}>cencel</button>
          </div>
        ):(
          null
        )}
        
    </div>
  )
}

export default AdminProduct