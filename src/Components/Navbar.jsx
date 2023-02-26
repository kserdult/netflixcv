import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-1 fixed w-full'>
        <h1 className='text-red-600 text-lg font-bold cursor-pointer'>RESUME</h1>
        <div className='text-white'>
            <button className='mr-5'>
                Sign In
            </button>
            <button>
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default Navbar