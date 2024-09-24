import React, { useContext, useEffect, useState } from 'react'
import MyNavbar from '../../components/MyNavbar'
import { AuthContext } from '../../contexts/AuthContext'
import { getCartById, deleteCartById, increaseCount, decreaseCount} from '../../Api/Product-api'
import { useNavigate } from 'react-router-dom'
import { getAddressById, getUserById } from '../../Api/Login-api'
import MyFooter from '../../components/MyFooter'
import { toast } from 'react-toastify'


function Cart() {
    const userId=localStorage.getItem('userId')
    // const {user}=useContext(AuthContext)
    const [user,setUser]=useState([])
    const navigate =useNavigate();
    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState(0);
    const [oldTotal,setOldTotal]=useState(0);
    const [address,setAddress]=useState([]);
    const [cartRemoveAlert,setCartRemoveAlert]=useState(false);
    useEffect(()=>{
        setTotal(cart.reduce((acc,value)=>acc+value.totalprice,0))
        setOldTotal(cart.reduce((acc,value)=>acc+value.oldtotalprice,0))
    })
    useEffect(()=>{
        getCartById(userId)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
        getAddressById(userId)
        .then(res=>setAddress(res))
        .catch(err=>console.error(err))
    },[userId])
    
    const removeFromCart=(productId)=>{
        deleteCartById(userId,productId)
        .then(res=>{
            setCart(res);
            toast.success("Product Removed From Cart",{position:'bottom-left'});
            setCartRemoveAlert(true);
            setTimeout(() => {
                setCartRemoveAlert(false)
            },3000);
        })
        .catch(err=>console.error(err))
    }
    
    const handleAddCount=(product)=>{
        increaseCount(userId,product)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
    }
    const handleSubCount=(product)=>{
       decreaseCount(userId,product)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
    }

    const handlePayment=()=>{
        if(cart.length>0){
            navigate('/payment')
        }else{
            alert("Your Cart is empty")
        }
    }
  return (
    <>
        <div>
            <MyNavbar cartRemoveAlert={cartRemoveAlert}/>
            <div className='mt-[150px] flex flex-wrap justify-center space-x-0 xl:space-x-5 space-y-5 xl:space-y-0 mb-10'>
                <div className='border w-[60%] p-2 shadow-lg'>
                    <div className='border shadow-lg '>
                        <div className=' ps-2'>
                        {address?(
                            <div className='space-x-3 sm:flex-row flex flex-col justify-between p-5'>
                            <div className='max-w-300px '>
                                
                                <span className='text-2xl font-semibold'>Deliver to : {user.name} </span>
                                <span className='text-2xl max-w-[300px]'>{address.housename}, </span>
                                <span className='text-2xl max-w-[300px]'>{address.city}, </span>
                                <span className='text-2xl max-w-[300px]'>{address.landmark}, </span>
                                <span className='text-2xl max-w-[300px]'>{address.district}, </span>
                                <span className='text-2xl max-w-[300px]'>{address.state}, </span>
                                <span className='text-2xl max-w-[300px]'>-{address.pincode}</span>
                            </div>
                            <button className='bg-orange-400 rounded w-[100px] p-2 h-[50px] text-white' onClick={()=>navigate('/profile')}>Change</button>
                        </div>
                        ):(
                            <div className='h-[100px] xl:flex-row flex flex-col justify-center items-center space-x-2'>
                                <span className='text-xl'>Deliver to : no address added</span>
                                <button className='bg-orange-400 rounded w-[200px] p-2 h-[50px] text-white' onClick={()=>navigate('/profile')}>Add Address</button>
                            </div>
                        )}
                            
                        </div>
                    </div>
                    <div className=' h-[430px] overflow-auto custom-scrollbar'>
                    {cart.length>0?(
                        cart.map(item=>(
                            <>
                            <div key={item.id} className='flex flex-wrap mt-3 ms-2 mb-1'>
                            <div className='w-[200px] flex flex-col justify-center items-center mt-3 mb-3'>
                                <img 
                                    className='w-[150px] h-[150px] hover:cursor-pointer hover:transform hover:scale-105  transition-all duration-500 ease-in-out' 
                                    src={item.images[0]} 
                                    alt="product image" 
                                    onClick={()=>navigate(`/store/product/${item.id}`)}
                                />
                                <div className='mt-5 border border-gray-500 flex justify-center space-x-4 items-center h-10 rounded'>
                                    <button  onClick={()=>handleSubCount(item)}  className='text-2xl rounded w-10 h-10'>-</button>
                                    <span className='text-2xl'>{item.count}</span>
                                    <button onClick={()=>handleAddCount(item)} className='text-2xl rounded w-10 h-10'>+</button>
                                </div>
                            </div>
                            <div className='grid w-[70%]'>
                                <div className='flex flex-col grid-cols-2 h-[100px] overflow-hidden'>
                                    <span className='text-3xl'>{item.name}</span>
                                    <span className='text-2xl'>{item.description}</span>
                                </div>
                                <div>
                                {item.stock===0?(
                                    <span className='bg-gray-400 text-white p-0.5 rounded'>SOLD OUT</span>
                                ):(
                                    (item.stock<10)?(
                                        <span className='bg-red-500 text-white p-0.5 rounded'>Only {item.stock} left</span>
                                    ):(
                                        <span className='bg-lime-300 text-white p-0.5 rounded'>{item.stock} STOCK AVAILABLE</span>
                                    )
                                )}
                                </div>
                                <div className='flex space-x-3 mb-3 grid-cols-1'>
                                    <span className='text-gray-500'>MRP : </span>
                                    <span className='text-gray-500 line-through'> ₹{item.oldprice}.00</span>
                                    <span className=' text-red-500'>Save ₹ {item.oldprice-item.price}.00</span>
                                </div>  
                                <div className='flex justify-between flex-wrap grid-cols-1'>
                                <span className='text-3xl text-black mb-2 font-bold'>₹ {item.totalprice}.00</span>
                                <button className='bg-red-400 rounded p-2 h-[50px] text-white' onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        </>
                        ))
                    ):(
                        <div className='flex relative justify-center'>
                            <img src="https://www.adasglobal.com/img/empty-cart.png" className='h-[430px]' alt="" />
                            <button onClick={()=>navigate('/home')} className='bg-blue-400 rounded p-2 h-[50px] text-white absolute top-3/4'>GO TO STORE</button>
                        </div>
                    )}
                    </div>
                    {cart.length>0?(
                        <>
                            <hr />
                            <div className='hidden xl:flex justify-end items-center me-5 h-[100px]'>
                                <hr />
                                <button className='bg-orange-400 rounded w-[200px] p-2 h-[50px] text-white' onClick={handlePayment}>PLACE ORDER</button>
                            </div>
                        </>    
                    ):null}
                   
                </div>
                <div className='border w-[60%] xl:w-[400px] shadow-lg'>
                    <div className='flex flex-col p-3'>
                    <span className='text-2xl text-center font-semibold '>PRICE DETAILS</span><hr />
                    <div className='ms-4 me-4 mt-5 mb-10 space-y-5'>
                        <div className='flex justify-between'>
                            <span>Price ({cart.length})</span>
                            <span>₹ {oldTotal}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Discount</span>
                            <span className='text-green-400'>- ₹ {oldTotal-total}</span>
                        </div>
                        {total ?(
                            <div className='flex justify-between'>
                                <span>Platform Fee</span>
                                <span>₹ 20</span>
                            </div>
                        ):(
                            <div className='flex justify-between'>
                                <span>Platform Fee</span>
                                <span>₹ 0</span>
                            </div>
                        )}
                        {total>499?(
                            <div className='flex justify-between'>
                                <span>Delivary Charge</span>
                                <div>
                                    <span className='line-through'>₹40</span>
                                    <span className='text-green-400'>Free</span>
                                </div>
                            </div>
                        ):(
                            <div className='flex justify-between'>
                                <span>Delivary Charge</span>
                                <div>
                                    <span className=''>₹ 40</span>
                                </div>
                            </div>
                        )}
                            {total?(
                                total>499?(
                                    <div className='flex justify-between'>
                                        <span className='text-2xl font-bold'>Total Amount</span>
                                        <span className='text-2xl font-bold'>₹{total+20}</span>
                                    </div>
                                ):(
                                    <div className='flex justify-between'>
                                        <span className='text-2xl font-bold'>Total Amount</span>
                                        <span className='text-2xl font-bold'>₹{total+60}</span>
                                    </div>
                                )
                            ):(
                                <div className='flex justify-between'>
                                    <span className='text-2xl font-bold'>Total Amount</span>
                                    <span className='text-2xl font-bold'>₹ 00.00</span>
                                </div>
                            )}
                            
                        
                    </div>
                    {cart.length>0?(
                        <>
                            <hr className='xl:hidden'/>
                            <div className='xl:hidden flex justify-end items-center me-5 h-[100px]'>
                                <button className='bg-orange-400 rounded w-[200px] p-2 h-[50px] text-white' onClick={handlePayment}>PLACE ORDER</button>
                            </div>
                        </>
                    ):null}
                    </div>
                </div>
            </div>
            <MyFooter/>
        </div>
    </>
  )
}

export default Cart