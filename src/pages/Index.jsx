import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'


const Index = () => {
  return (
    <main className='relative'>
      <div className="md:mx-4 lg:mx-auto flex justify-between">
        <Sidebar />

        <div className="content">
            <Navbar />

            
            <div className="mt-6 overflow-auto flex flex-1 flex-col">
              <Outlet />

            </div>
            
        </div>
      </div>
    </main>
  )
}

export default Index
