import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className='w-full flex justify-center'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
