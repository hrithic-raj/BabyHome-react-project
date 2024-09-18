import React from 'react'
import AdminNavbar from '../../components/AdminNav'
import Sidebar from './SideBar'

function Dashboard() {
  return (
    <div className='relative bg-gray-100'>
        <AdminNavbar/>
        <div className='mt-[100px]'>
        <Sidebar/>
        <div className='lg:ms-20 md:ms-10 flex flex-col items-center'>
          <div className='grid grid-cols-1 mt-4 md:grid-cols-4 lg:grid-cols-8 gap-6'>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
                <div>
                  <div className="text-green-600 font-bold">Total Sales</div>
                  <div className="text-3xl font-semibold">$ 34,945</div>
                  {/* <div className="text-sm text-green-600 mt-2">▲ 1.56%</div> */}
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" className='w-[120px] mt-4' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
              <div>
                  <div className="text-green-600 font-bold">Total Orders</div>
                  <div className="text-3xl font-semibold">394</div>
                  {/* <div className="text-sm text-green-600 mt-2">▲ 1.56%</div> */}
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/1559/1559859.png" className='w-[150px]' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
              <div>
                  <div className="text-green-600 font-bold">Total Users</div>
                  <div className="text-3xl font-semibold">2034</div>
                  {/* <div className="text-sm text-green-600 mt-2">▲ 1.56%</div> */}
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/1165/1165725.png" className='w-[130px] mt-3' alt="" />
                </div>
              </div>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg col-span-2 flex justify-between'>
              <div>
                  <div className="text-green-600 font-bold">Total Products</div>
                  <div className="text-3xl font-semibold">24</div>
                  {/* <div className="text-sm text-green-600 mt-2">▲ 1.56%</div> */}
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/10112/10112502.png" className='w-[130px] mt-4' alt="" />
                </div>
              </div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-3'>Recent Orders</div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-3'>Product Overview</div>
              <div className='h-[400px] bg-white rounded-lg shadow-lg col-span-2 md:col-span-4 lg:col-span-2'>Best Sellers</div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard