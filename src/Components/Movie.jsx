import React from 'react'

function Movie({item}) {
  return (
<<<<<<< HEAD
    <div className=' h-auto w-[50vw] sm:w-[33.33%] md:w-[25%] lg:w-[20%] xl:w-[16.6%] relative inline-block m-1'>
      <item.IconTitle className="text-white bg-red-900 w-full h-36 object-cover rounded-md block"/>
=======
    <div className=' h-36 w-60 relative inline-block m-1 rounded-md'>
      <div className='flex w-full h-full justify-center items-center'>
        <item.IconTitle className="text-white rounded-md h-[30vh] w-[30vw] md:h-[30vh] lg:w-[20vw] max-h-[90%] max-w-[90%]"/>
      </div>
>>>>>>> 316a5b41997572cf91c49eb889df107a1b78c5e8
      <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 rounded-md'>
        <h1 className='text-white text-center flex justify-center items-center h-full'>{item.title}</h1>
      </div>
    </div>
    //50 33.3 25 20 16.6
  )
}

export default Movie