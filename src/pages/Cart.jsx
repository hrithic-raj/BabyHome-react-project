import React, { useContext, useEffect, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import { AuthContext } from '../contexts/AuthContext'
import { getCartById, deleteCartById, increaseCount} from '../Api/Product-api'

function Cart() {
    const userId=localStorage.getItem('userId')
    const {user}=useContext(AuthContext)
    const [quntity, setQuntity] = useState();
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0);
    
    useEffect(()=>{
        setTotal(cart.reduce((acc,value)=>acc+value.totalprice,0))
    })
    useEffect(()=>{
        getCartById(userId)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
    },[userId])
    
    const removeFromCart=(productId)=>{
        deleteCartById(userId,productId)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
    }
    
    const handleAddCount=(product)=>{
        increaseCount(userId,product)
        .then(res=>setCart(res))
        .catch(err=>console.error(err))
    }
    const handleSubCount=()=>{
       
    }

  return (
    <>
        <div>
            <MyNavbar/>
            <div className='mt-[150px] flex justify-center space-x-5'>
                <div className='border w-[60%]'>
                    <div className=' h-[430px] overflow-auto custom-scrollbar'>
                    {cart.map(item=>(
                        <div className='flex flex-wrap mt-3 mb-1'>
                        <div className='w-[200px] flex flex-col justify-center items-center mt-3 mb-3'>
                            <img className='w-[150px] h-[150px]' src={item.image} alt="product image" />
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
                    ))}
                    </div>
                    <div className='flex justify-end items-center me-5 h-[100px]'>
                        <hr />
                        <button className='bg-orange-400 rounded w-[200px] p-2 h-[50px] text-white '>PLACE ORDER</button>
                    </div>
                </div>
                <div className='border w-[30%]'>
                    <div className='flex flex-col'>
                    <span className='text-2xl text-center font-semibold '>PRICE DETAILS</span><hr />
                    <div className='ms-4 me-4 space-y-5'>
                        <div className='flex justify-between'>
                            <span>Price (3 items)</span>
                            <span>₹12,690</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Discount</span>
                            <span className='text-green-400'>- ₹12,690</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Platform Fee</span>
                            <span>₹12</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Delivary Charge</span>
                            <div><span className='line-through'>₹40</span><span className='text-green-400'>Free</span></div>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-2xl font-bold'>Total Amount</span>
                            <span className='text-2xl font-bold'>₹{total}</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart