import React from 'react'

const Footer = () => {
  return (
    <div className='grid justify-center items-center m-auto p-12 gap-5 text-center bg-gray-100 relative bottom-0'>
        <h1 className='font-light text-4xl w-2/4 m-auto text-center'>Get latest posts delivered right to your inbox</h1>
        <div className='flex gap-5 m-auto'>
            <input className='border p-3 rounded-lg ' type="email" placeholder='Enter your E-mail' />
            <button className='flex justify-center p-5 border bg-purple-200 rounded-lg m-auto text-gray-600'>Join Today</button>
        </div>
        <small className='m-auto'>© 2023 MyBloG. All rights reserved.</small>
    </div>
  )
}

export default Footer