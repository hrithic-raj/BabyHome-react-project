import React from 'react'
import AdminNavbar from '../../components/AdminNav'

function AdminProduct() {
  return (
    <div>
        <AdminNavbar/>
        <div className='grid'>
            <div className='border w-[200px] h-[100px]'></div>
            <div className='border w-[200px] h-[100px]'></div>
            <div className='border w-[200px] h-[100px]'></div>
            <div className='border w-[200px] h-[100px]'></div>
        </div>
    </div>
  )
}

export default AdminProduct