import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'
import { useNavigate } from 'react-router-dom'
import { deleteUserById, getAllUsers } from '../../Api/Admin-api';

function AdminUser() {
  const navigate =useNavigate();
  const [users,setUsers]=useState([]);
  const admin=localStorage.getItem('admin');

  useEffect(()=>{
    getAllUsers()
    .then((res)=>{
      setUsers(res.data)
    })
  },[users])
  const handleDel=(id)=>{
    deleteUserById(id)
  }
  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[100px]'>
          <Sidebar/>
          <div className='lg:ms-20 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-1 mt-4 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-3 md:gap-6 gap-y-3 order-1 justify-items-center'>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 flex justify-between cursor-pointer' onClick={()=>navigate("/admin/users/adduser")}>
                <div>
                  <div className="text-black text-3xl font-bold mt-2">Add User</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/863/863823.png" className='w-[120px] mt-5' alt="" />
                </div>
              </div>
              
              <div className='max-h-[550px] min-h-[400px] w-[330px] md:w-full p-2 bg-white rounded-lg shadow-lg md:col-span-4 md:row-span-4 lg:col-span-6 lg:row-span-3 order-3 lg:order-2'>
                
                <div className='flex flex-col items-center h-[100px] border-b-2'>
                    <span className='text-3xl bg-white text-center'>User List</span>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 border-2 w-[300px] rounded-md focus:outline-none focus:ring-1 focus:ring-pink-100"
                    />
                </div>
                <div className='mt-5 h-[410px] flex flex-col md:w-full w-[300px] overflow-auto'>
                    <div className='mb-6 grid grid-cols-7 justify-items-center w-[700px] md:w-full'>
                        <span className='text-lg font-semibold'>NAME</span>
                        <span className='text-lg font-semibold'>USERNAME</span>
                        <span className='text-lg font-semibold'>EMAIL</span>
                        <span className='text-lg font-semibold'>CITY</span>
                        <span className='text-lg font-semibold'>ORDERS</span>
                        <span className='text-lg font-semibold'>BLOCK</span>
                        <span className='text-lg font-semibold'>DELETE</span>
                    </div>
                    {users.map((user)=>(
                      <div key={user.id} className=' mb-3 grid grid-cols-7 justify-items-center w-[700px] md:w-full'>
                        <span>{user.name}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        {user.address ?<span>{user.address.city}</span>: 'NOT SET'}
                        <span>{user.orders.length}</span>
                        <button className='bg-pink-300 p-1 rounded-md'>BLOCK</button>
                        <button className='bg-red-400 p-1 rounded-md' onClick={()=>handleDel(user.id)}>DELETE</button>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:row-span-2 flex justify-between order-2 lg-order-3'>
              <div>
                  <div className="text-green-600 font-bold">Total Users</div>
                  <div className="text-3xl font-semibold">2034</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/1165/1165725.png" className='w-[130px] mt-3' alt="" />
                </div>
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AdminUser