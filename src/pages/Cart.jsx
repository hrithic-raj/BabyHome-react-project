import React, { useContext, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import { AuthContext } from '../contexts/AuthContext'
function Cart() {
    const {user}=useContext(AuthContext)
    const [quntity, setQuntity] = useState(1);
    const userss=localStorage.getItem('userId')
  return (
    <>
        <div>
            <MyNavbar/>
            <div className='mt-[150px] flex justify-center'>
                <div className='border w-[60%]'>
                    <div className='flex'>
                        <div className='w-[200px] flex flex-col justify-center items-center mt-3 mb-3'>
                            <img className='w-[150px] h-[150px]' src="https://babymoo.in/cdn/shop/products/IMG_0336_6380e315-28db-4b96-a1dd-257127599fec.jpg?v=1719856944&width=800" alt="" />
                            <div className='mt-5 border border-gray-500 flex justify-center space-x-4 items-center h-10 rounded'>
                                <button onClick={()=>setQuntity(prev=>prev===1?1:prev-1)} className='text-2xl rounded w-10 h-10'>-</button>
                                <span className='text-2xl'>{quntity}</span>
                                <button onClick={()=>setQuntity(prev=>prev+1)} className='text-2xl rounded w-10 h-10'>+</button>
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 justify-between'>
                            <div className='flex flex-col'>
                                <span className='text-3xl'>Product name</span>
                                <span className='text-2xl'>Product details will show here (discription)</span>
                            </div>
                            <div className='mb-5'>
                            <div className='flex space-x-3 mt-3 mb-3'>
                                <span className='text-gray-500'>MRP : </span>
                                <span className='text-gray-500 line-through'> ₹1590.00</span>
                                <span className=' text-red-500'>Save ₹ 90.00</span>
                            </div>  
                            <span className='text-3xl text-black mb-2 font-bold'>₹ 1500.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border bg-slate-600 w-[30%]'></div>
            </div>
        </div>
    </>
  )
}

export default Cart