import React, {useState} from 'react';
import Peaky from '../assets/peaky.jpg';
import PeakyLogo from '../assets/peakylogo.jpg';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
import MoreInfo from './MoreInfo';

const MainTop = () => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div>
      <MoreInfo moreInfo={moreInfo} setMoreInfo={setMoreInfo}/>
          <img className='-z-10 absolute top-0 max-h-[100%] h-[56.25vw] object-cover w-full' src={Peaky}/>
        <div className=' pt-[10vw] pl-8'>
          <div>
            <img src={PeakyLogo} className=' w-[30%] sm:w-[20%]' />
            <p></p>
          </div>
          <div className='flex mt-6'>
            <button className=' bg-white text-[2.5vw] md:text-[1.8vw] font-medium flex flex-row items-center rounded-md py-[0.4vw] pr-[2.3vw] pl-[1.4vw] mr-2 hover:bg-gray-300'><BsFillPlayFill className='text-[3vw] mr-1'/> Play</button>
            <button onClick={()=>{setMoreInfo(true)}} className=' bg-gray-600 bg-opacity-80 text-white text-[2.1vw] md:text-[1.4vw] font-medium flex flex-row items-center rounded-md py-[0.4vw] pr-[2.3vw] pl-[1.4vw] hover:bg-gray-700 hover:bg-opacity-70'><AiOutlineInfoCircle className='text-[2.5vw] mr-1'/> More Info</button>
          </div>
        </div>
    </div>
  )
}

export default MainTop