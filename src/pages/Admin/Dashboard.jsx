import React from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'

function Dashboard() {
  return (
    <div className='relative'>
        <AdminNavbar/>
        <div className='flex'>
        <Sidebar/>
        <div className='mt-[120px] ms-20'>
          <div className='grid grid-cols-4 gap-x-6 gap-y-6'>
              <div className='w-[400px] h-[200px] border'></div>
              <div className='w-[400px] h-[200px] border'></div>
              <div className='w-[400px] h-[200px] border'></div>
              <div className='w-[400px] h-[200px] border'></div>
              <div className='w-[400px] h-[400px] border'></div>
          </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard