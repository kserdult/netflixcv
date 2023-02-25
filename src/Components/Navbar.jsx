import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-black'>
        <h1 className='text-red-600 text-lg'>Resume</h1>
        <div className='text-white'>
            <button>
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