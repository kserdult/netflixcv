import React from 'react'
import PeakyLogo from '../assets/peakylogo.png';


function Movie({image, title}) {
  return (
    <div className=' h-36 w-60 relative inline-block m-1'>
      <img src={PeakyLogo} className="bg-black w-full h-36 object-cover rounded-md block"/>
      <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 rounded-md'>
        <h1 className='text-white text-center flex justify-center items-center h-full'>Peaky Blinders</h1>
      </div>
    </div>
  )
}

export default Movie