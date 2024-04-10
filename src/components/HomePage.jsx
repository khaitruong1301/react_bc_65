//rafce
import React from 'react'
import Header from './Header'
import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

const HomePage = () => {
  return (
    <div className='vh-100'>
        <Header />
        {/* tạo sử dụng các componetn t.ứng */}
        <div className='d-flex h-75'>
            <div className='w-25 h-100 bg-primary d-flex flex-column justify-content-center'>
                <NavComponent />
            </div>
            <div className='w-75 h-100 bg-danger'>
                <ContentComponent />
            </div>
        </div>
        <FooterComponent />
    </div>
  )
}

export default HomePage