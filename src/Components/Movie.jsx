import React from 'react'

function Movie({image, title}) {
  return (
    <div className=' w-60'>
      <img src={image} className="bg-black w-full h-36 object-cover rounded-md"/>
      <h1 className='text-center'>{title}</h1>
    </div>
  )
}

export default Movie