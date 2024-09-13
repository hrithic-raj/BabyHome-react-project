import React, { useEffect, useState, useContext, useCallback} from 'react'
import dp from '../../Assets/Main/profile.png'
import MyNavbar from '../../components/MyNavbar'
import { addAddress, getAddressById, getUserById } from '../../Api/Login-api'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getOrderById } from '../../Api/Product-api'
import MyFooter from '../../components/MyFooter'

function Orders() {
    const navigate=useNavigate();
    const [profilePic,setProfilePic]=useState(dp)
    const userId=localStorage.getItem('userId')
    const [user,setUser]=useState([]);
    const [orders,setOrders]=useState([]);
    const [address,setAddress]=useState([]);
    const {logout}=useContext(AuthContext)
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
        getOrderById(userId)
        .then(res=>setOrders(res))
        .catch(err=>console.error(err))
        getAddressById(userId)
        .then(res=>setAddress(res))
        .catch(err=>console.error(err))
    },[])
    const handleLogout=()=>{
        logout()
        navigate('/home')
    }
  return (
    <div>
        <MyNavbar/>
        <div className='mt-[150px] flex flex-wrap justify-center space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 mb-[100px]'>
            <div className='flex flex-col space-y-4 border p-4 shadow-lg h-[600px]'>
                <img className='w-[300px] h-[300px]' src={profilePic} alt="" />
                {userId?(
                    <>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/profile')}>Account Details</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/orders')}>Orders</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/wishlist')}>Wishlist</button>
                        <button className='text-white bg-red-400 h-[40px] rounded sticky top-0' onClick={handleLogout}>LOGOUT</button>
                    </>
                ):(
                    <button className='text-white bg-blue-400 h-[40px] rounded' onClick={()=>navigate('/login')}>LOG-IN</button>
                )
                }
                
            </div>
            <div className='w-[800px] h-[600px] overflow-auto custom-scrollbar flex flex-col-reverse shadow-md p-4 border space-y-4'>
                {userId?(
                        orders.map(orderlist=>(
                            <div key={orderlist.id} className=' border shadow-lg flex flex-col space-y-3 p-2'> 
                            {orderlist.item.map(order=>(
                                <div key={order.id} className='border flex rounded-lg'>
                                <div className='flex flex-col items-center justify-center h-[150px] w-[150px]'>
                                    <img className='ms-2 w-28 mt-2 rounded hover:transform hover:scale-105  transition-all duration-500 ease-in-out' src={order.image} alt="" />
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
            }
                
                
            </div>
        </div>
        <MyFooter/>
    </div>
  )
}

export default Orders