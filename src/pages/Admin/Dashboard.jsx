import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'
import { useNavigate } from 'react-router-dom';
import { getAllProducts, getAllUsers } from '../../Api/Admin-api';

function Dashboard() {
  const navigate =useNavigate();
  const [users,setUsers]=useState([]);
  const [products,setProducts]=useState([]);
  const [bestSellers,setBestSellers]=useState([]);
  const admin=localStorage.getItem('admin');

  useEffect(()=>{
    getAllUsers()
    .then((res)=>{
      setUsers(res.data)
    })
    getAllProducts()
    .then((res)=>{
      setProducts(res.data)
      setBestSellers(products.filter(product=>product.bestseller===true))
    })
  },[users,products])
  
  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[100px]'>
        <Sidebar/>
        <div className='lg:ms-20 md:ms-10 flex flex-col items-center'>
          <div className='grid grid-cols-1 mt-4 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center'>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
                <div>
                  <div className="text-green-600 font-bold">Total Sales</div>
                  <div className="text-3xl font-semibold">$ 34,945</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" className='w-[120px] mt-4' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
                <div>
                  <div className="text-green-600 font-bold">Total Orders</div>
                  <div className="text-3xl font-semibold">300</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/1559/1559859.png" className='w-[150px]' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
                <div>
                  <div className="text-green-600 font-bold">Total Users</div>
                  <div className="text-3xl font-semibold">{users.length}</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/1165/1165725.png" className='w-[130px] mt-3' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
                <div>
                  <div className="text-green-600 font-bold">Total Products</div>
                  <div className="text-3xl font-semibold">{products.length}</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/10112/10112502.png" className='w-[130px] mt-4' alt="" />
                </div>
              </div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-3'>
                <div className='flex flex-col h-[400px]'>
                  <span className='text-2xl text-center font-semibold border-b-2'>RECENT ORDERS</span>
                  <div className='grid grid-cols-4 justify-items-center items-center'>
                        <span className='text-lg font-semibold'>IMAGE</span>
                        <span className='text-lg font-semibold'>ORDER ID</span>
                        <span className='text-lg font-semibold'>DATE</span>
                        <span className='text-lg font-semibold'>USER</span>
                        
                        <span className='text-lg font-semibold'></span>
                  </div>
                  <div className='h-[400px] overflow-auto custom-scrollbar'>
                  {users.map(user=>(
                    user.orders.map(order=>(
                      order.item.map(item=>(
                        <div key={item.id} className='grid grid-cols-4 justify-items-center items-center mb-3'>
                          <img className='w-[70px]' src={item.image} alt="" />
                          <span>{order.id}</span>
                          <span>{order.date.day}</span>
                          <span>{user.name}</span>
                        </div>
                      ))
                    ))
                  ))}
                  </div>
                </div>
              </div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-3'>
              <div className='flex flex-col h-[400px]'>
                  <span className='text-2xl text-center font-semibold border-b-2'>PRODUCT OVERVIEW</span>
                  <div className='grid grid-cols-4 justify-items-center items-center'>
                        <span className='text-lg font-semibold'>IMAGE</span>
                        <span className='text-lg font-semibold'>NAME</span>
                        <span className='text-lg font-semibold'>PRICE</span>
                        <span className='text-lg font-semibold'>STOCK</span>
                  </div>
                  <div className='h-[400px] overflow-auto custom-scrollbar'>
                    {products.map(product=>(
                          <div key={product.id} className='grid grid-cols-4 justify-items-center items-center mb-3'>
                            <img className='w-[70px]' src={product.image} alt="" />
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            <span>{product.stock}</span>
                          </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-2'>
              <div className='flex flex-col h-[400px]'>
                  <span className='text-2xl text-center font-semibold border-b-2'>BEST SELLERS</span>
                  <div className='grid grid-cols-4 justify-items-center items-center'>
                        <span className='text-lg font-semibold'>IMAGE</span>
                        <span className='text-lg font-semibold'>NAME</span>
                        <span className='text-lg font-semibold'>PRICE</span>
                        <span className='text-lg font-semibold'>STOCK</span>
                  </div>
                  <div className='h-[400px] overflow-auto custom-scrollbar'>
                    {bestSellers.map((product)=>
                          <div key={product.id} className='grid grid-cols-4 justify-items-center items-center mb-3'>
                            <img className='w-[70px]' src={product.image} alt="" />
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            <span>{product.stock}</span>
                          </div>
                    )}
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default Dashboard