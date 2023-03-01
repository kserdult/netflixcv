import React from 'react'
import Movie from './Movie'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'

const Slide = ({rowID}) => {
  const movies =[
    {id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11}
  ]

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
  <div>
    <h1 className='text-2xl ml-2 text-white'>Skills</h1>
      <div className='relative flex items-center group'>
        <MdOutlineKeyboardArrowLeft onClick={slideLeft} className='rounded text-8xl w-8 h-36 bg-black/30 absolute top-1 left-0 z-10 text-white cursor-pointer hover:bg-black/80 hidden group-hover:block' />
        <div id={'slider' + rowID} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
                <Movie key={id} item={item} />
          ))}
        </div>
        <MdOutlineKeyboardArrowRight onClick={slideRight} className='rounded text-8xl w-8 h-36 bg-black/30 absolute top-1 right-0 z-10 text-white cursor-pointer hover:bg-black/80 hidden group-hover:block' />
      </div>
    </div>
  )
}

export default Slide;