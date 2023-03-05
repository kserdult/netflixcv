import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const handleScroll =()=>{
    if(window.scrollY > 10){
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <div className={` z-20 flex justify-between px-4 py-1 fixed w-full transition ease-in-out duration-[.4s] ${show&& `bg-black`}`}>
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