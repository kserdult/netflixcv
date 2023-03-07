import React from 'react'
import Movie from './Movie'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md/index'

const Slide = ({rowID, title, items}) => {
  

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
  <div className=' mb-[1vw]'>
    <h1 className='text-[4vw] md:text-[3vw] lg:text-[2vw] ml-2 mb-[0.2vw] text-white'>{title}</h1>
      <div className='relative flex items-center group'>
        <MdOutlineKeyboardArrowLeft onClick={slideLeft} className='rounded text-8xl w-8 h-[25vw] sm:h-[20vw] md:h-[15vw] lg:h-[12vw] bg-black/30 absolute top-0 left-0 z-10 text-white cursor-pointer hover:bg-black/80 hidden group-hover:block' />
        <div id={'slider' + rowID} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {items.map((item, id) => (
                <Movie key={id} item={item} />
          ))}
        </div>
        <MdOutlineKeyboardArrowRight onClick={slideRight} className='rounded text-8xl w-8 h-[25vw] sm:h-[20vw] md:h-[15vw] lg:h-[12vw] bg-black/30 absolute top-0 right-0 z-10 text-white cursor-pointer hover:bg-black/80 hidden group-hover:block' />
      </div>
    </div>
  )
}

export default Slide;