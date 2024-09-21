import React, { useEffect, useState, useContext} from 'react'
import dp from '../../../Assets/Main/profile.png'
import MyNavbar from '../../../components/MyNavbar'
import { addAddress, getAddressById, getUserById } from '../../../Api/Login-api'
import { AuthContext } from '../../../contexts/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import MyFooter from '../../../components/MyFooter'
import AdminNavbar from '../../../components/AdminNav'
import Sidebar from '../../../components/SideBar'
import { getOrderById } from '../../../Api/Product-api'

function UserView() {
    const navigate=useNavigate();
    const [profilePic,setProfilePic]=useState(dp)
    const [user,setUser]=useState([]);
    const [orders,setOrders]=useState([]);
    const [address,setAddress]=useState([]);
    const [userDetails,setUserDetails]=useState(true);
    const [userOrders,setUserOrders]=useState(false);
    const {userId}=useParams()
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
        getAddressById(userId)
        .then(res=>setAddress(res))
        .catch(err=>console.error(err))
        getOrderById(userId)
        .then(res=>setOrders(res))
        .catch(err=>console.error(err))
    },[])

    const handleUserDetails=()=>{
        setUserOrders(false)
        setUserDetails(true)
    }

    const handleUserOders=()=>{
        setUserOrders(true)
        setUserDetails(false)
    }

  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[80px]'>
          <Sidebar/>
        <div className='flex flex-wrap justify-center space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 py-5'>
            <div className='flex lg:flex-col space-y-4 border p-4 shadow-lg lg:h-[550px] h-[340px] justify-evenly items-center lg:items-stretch flex-row lg:w-[320px] w-[800px]'>
                <img className='sm:w-[300px] sm:h-[300px] w-[100px] h-[100px]' src={profilePic} alt="" />
                
                    <div className='flex flex-col space-y-2'>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={handleUserDetails}>Account Details</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={handleUserOders}>Orders</button>
                    </div>
                
                
            </div>
            <div className='w-[800px] flex flex-col shadow-lg p-4 border overflow-auto custon-scrollbar'>
            {userDetails?(
                (userId)?(
                    <>
                        <label htmlFor="" className='text-2xl'>Name</label>
                        <input className='text-xl p-3' type="text" value={user.name} placeholder='Name' disabled/>
                        <label htmlFor="" className='text-2xl'>Username</label>   
                        <input className='text-xl p-3' type="text" value={user.username} placeholder='Username' disabled/>
                        <label htmlFor="" className='text-2xl'>Email</label>   
                        <input className='text-xl p-3' type="text" value={user.email} placeholder='Username' disabled/>
                    {(address)?(
                        <div className='border flex flex-col mt-3'>
                                <span className='text-2xl text-center p-2'>ADDRESS</span>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">Pincode</label>
                                    <input className='text-xl bg-transparent p-2' name='pincode' value={address.pincode} type="text"  placeholder='Pincode' disabled/>
                                    <label htmlFor="">house name</label>
                                    <input className='text-xl bg-transparent p-2' name='housename' value={address.housename} type="text"  placeholder='House Name' disabled/>
                                </div>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">City</label>
                                    <input className='text-xl bg-transparent p-2' name='city' value={address.city} type="text"  placeholder='city'disabled/>
                                    <label htmlFor="">Lank mark</label>
                                    <input className='text-xl bg-transparent p-2' name='landmark' value={address.landmark} type="text"  placeholder='landmark'disabled/>
                                </div>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">District</label>
                                    <input className='text-xl bg-transparent p-2' name='district' value={address.district} type="text"  placeholder='district'disabled/>
                                    <label htmlFor="">State</label>
                                    <input className='text-xl bg-transparent p-2' name='state' value={address.state} type="text"  placeholder='state'disabled/>
                                </div>
                        </div>
                    ):(
                        null
                    )}
                    </>
                ):(
                    null
                )
            ):null}

            {userOrders?(
                (userId)?(
                    orders.map(orderlist=>(
                        <div key={orderlist.id} className=' border shadow-lg flex flex-col space-y-3 p-2'> 
                        {orderlist.item.map(order=>(
                            <div key={order.id} className='border flex rounded-lg'>
                            <div className='flex flex-col items-center justify-center h-[150px] w-[150px]'>
                                <img className='ms-2 w-28 mt-2 rounded hover:transform hover:scale-105  transition-all duration-500 ease-in-out' src={order.images[0]} alt="" />
                                <span>Quantity : {order.count}</span>
                            </div>
                            <div className='sm-flex-row flex  ms-2 w-[800px] justify-between me-4'>
                                <div className='flex flex-col justify-center space-y-2'>
                                    <span className='text-xl'>{order.name}</span>
                                    <div className='flex flex-col '>
                                    <span className='text-lg'>Address : {address.housename}</span>
                                    <span className='text-lg'>{address.city} , {address.district}</span>
                                    <span className='text-lg'>{address.state}</span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className='text-xl'>{order.totalprice}</span>
                                </div>
                                <div className='flex flex-col items-center justify-between'>
                                    <span className='text-xl'>{orderlist.paymentMethod}</span>
                                    <div className='flex flex-col items-center'>
                                        <span className='text'>{orderlist.date.day}</span>
                                        <span className='text'>{orderlist.date.time}</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                        order id : {orderlist.id}
                        </div>
                    ))
                ):null
            ):null}

                
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default UserView
