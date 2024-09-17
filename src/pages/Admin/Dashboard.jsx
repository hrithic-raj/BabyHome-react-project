import React from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'

function Dashboard() {
  return (
    <div className='relative'>
        <AdminNavbar/>
        <div className='flex'>
        <Sidebar/>
        <div className='mt-[100px] ms-20'>
            <div className=''>Hi chelloooo</div>
            <div className='w-[400px] h-[400px] border'></div>
            <div className='w-[400px] h-[400px] border'></div>
            <div className='w-[400px] h-[400px] border'></div>
            <div className='w-[400px] h-[400px] border'></div>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard