import React from 'react'
import img from '../../Assets/404.png'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const admin=localStorage.getItem('admin')
    const navigate=useNavigate();
  return (
    <div>
        <div className='relative'>
        <div className='flex justify-center'>
            <img className='w-[40rem]' src={img} alt="" />
        </div>
        {admin?(
            <button onClick={()=>navigate('/admin')} className='absolute z-50 top-[83%] left-[44%] bg-sky-700 text-white text-xl font-bold w-48 h-10 rounded-lg hover:bg-sky-500'>Go To Dashboard</button>
        ):(
            <button onClick={()=>navigate('/home')} className='absolute z-50 top-[83%] left-[44%] bg-sky-700 text-white text-xl font-bold w-48 h-10 rounded-lg hover:bg-sky-500'>Go To Home</button>
        )}
        </div>
    </div>
  )
}

export default PageNotFound