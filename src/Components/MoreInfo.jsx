import React from 'react'
import {MdCancel} from 'react-icons/md'

const MoreInfo = ({moreInfo, setMoreInfo}) => {

  return (
    <div onClick={()=> setMoreInfo(false)} className={` flex justify-center items-center w-[100vw] h-[100vh] z-50 ${moreInfo? `fixed bg-black/50` : `hidden bg-black/0`} `}>
        <div className='relative bg-white w-[90vw] sm:w-[80vw] md:w-[70vw] md:h-[95vh] lg:w-[60vw] xl:w-[50vw] h-[90vh] rounded-md'>
        <MdCancel onClick={()=> setMoreInfo(false)} className='absolute top-3 right-3 text-5xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default MoreInfo