import React from 'react'

function Movie({item}) {
  return (
    <div className=' w-[33.33%] md:w-[25%] lg:w-[20%] xl:w-[16.6%] relative inline-block mx-[0.2vw]'>
      <item.IconTitle className="text-white bg-red-900 w-full h-[20vw] md:h-[15vw] lg:h-[10vw] object-cover rounded-md block"/>
      <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 cursor-pointer transition ease-in-out duration-300 rounded-md'>
        <h1 className=' whitespace-normal text-center flex justify-center items-center h-full text-white break-words text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw]'>{item.title}</h1>
      </div>
    </div>
  )
}

export default Movie