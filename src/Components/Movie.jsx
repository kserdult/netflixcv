import React from 'react'

function Movie({item}) {
  return (
    <div className=' h-36 w-60 relative inline-block m-1 rounded-md'>
      <div className='flex w-full h-full justify-center items-center'>
        <item.IconTitle className="text-white rounded-md h-[30vh] w-[30vw] md:h-[30vh] lg:w-[20vw] max-h-[90%] max-w-[90%]"/>
      </div>
      <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 rounded-md'>
        <h1 className='text-white text-center flex justify-center items-center h-full'>{item.title}</h1>
      </div>
    </div>
  )
}

export default Movie