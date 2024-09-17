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
          <div className='grid grid-cols-8 grid-rows-3 gap-x-6 '>
              <div className='w-[400px] h-[200px] col-span-2 border'></div>
              <div className='w-[400px] h-[200px] col-span-2 border'></div>
              <div className='w-[400px] h-[200px] col-span-2 border'></div>
              <div className='w-[400px] h-[200px] col-span-2 border'></div>
              <div className='w-[400px] h-[400px] col-start-1 col-end-3 border'></div>
              <div className='w-[400px] h-[400px] border'></div>
              <div className='w-[400px] h-[400px] border'></div>
          </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard