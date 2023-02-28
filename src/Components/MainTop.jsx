import React from 'react';
import Peaky from '../assets/peaky.jpg';
import PeakyLogo from '../assets/peakylogo.jpg';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';

const MainTop = () => {
  return (
    <div>
        <img className='-z-10 absolute top-0 max-h-[500px] object-cover w-full' src={Peaky}/>
        <div className=' pt-32 pl-8'>
          <div>
            <img src={PeakyLogo} className=' w-[200px]' />
            <p></p>
          </div>
          <div className='flex mt-6'>
            <button className=' bg-white text-lg font-medium flex flex-row rounded-md py-1 pr-5 pl-3 mr-2 hover:bg-gray-300'><BsFillPlayFill className='text-3xl mr-1'/> Play</button>
            <button className=' bg-gray-600 bg-opacity-80 text-white text-md font-medium flex flex-row rounded-md py-1 pr-5 pl-3 hover:bg-gray-700 hover:bg-opacity-70'><AiOutlineInfoCircle className='text-2xl mr-1'/> More Info</button>
          </div>
        </div>
    </div>
  )
}

export default MainTop