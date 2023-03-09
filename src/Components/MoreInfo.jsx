import React from 'react'
import {MdCancel, MdEmail, MdLocationCity, MdSchool, MdWork} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const MoreInfo = ({moreInfo, setMoreInfo}) => {

  return (
    <div onClick={()=> setMoreInfo(false)} className={` flex justify-center items-center w-[100vw] h-[100vh] z-50 ${moreInfo? `fixed bg-black/70` : `hidden bg-black/0`} `}>
        <div className='relative bg-[#181818] text-white w-[90vw] sm:w-[80vw] md:w-[70vw] md:h-[95vh] lg:w-[60vw] xl:w-[50vw] h-[90vh] rounded-md'>
        <MdCancel onClick={()=> setMoreInfo(false)} className='absolute top-3 right-3 text-5xl cursor-pointer'/>
          <h1 className='text-2xl w-full text-center mt-[3vw] sm:mt-[2.5vw] md:mt-[2vw] lg:mt-[1.5vw]'>Károly Serdült</h1>
          <ul className='ml-[10%] mt-[5vw] sm:mt-[4vw] md:mt-[3vw] lg:mt-[2vw]'>
            <li className='flex items-center'><BsFillTelephoneFill className=' mr-3'/> 30 784 7672</li>
            <li className='flex items-center'><MdEmail className=' mr-3'/> kserdult@gmail.com</li>
            <li className='flex items-center'><MdLocationCity className=' mr-3'/> Hungary, Debrecen</li>
          </ul>
          <div className='ml-[6%] mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] lg:mt-[1vw]'>
            <h1 className='flex items-center font-bold text-xl'><MdSchool className=' mr-3'/> Education</h1>
            <h2 className='ml-[10%] text-lg'>Mechwart</h2>
            <p>
              
            </p>
          </div>
          <div className='ml-[6%] mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] lg:mt-[1vw]'>
            <h1 className='flex items-center font-bold text-xl'><MdWork className=' mr-3'/> Work Experience</h1>
            <h2 className='ml-[10%] text-lg'>Customer Service Representative</h2>
            <p>
              
            </p>
          </div>
        </div>
    </div>
  )
}

export default MoreInfo