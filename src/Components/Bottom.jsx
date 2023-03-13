import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineCloudDownload} from 'react-icons/ai';
import CVENG from '../assets/CV-ENG.pdf'
import CVHUN from '../assets/CV-HUN.pdf'

const Bottom = () => {
  return (
    <div>
      <div className=' flex justify-between w-[80%] lg:w-[70%] mx-auto text-white my-[10vw] md:mt-[5vw]'>
        <div>
          <h1 className='text-[5vw] md:text-[4vw] lg:text-[3vw] mb-[2vw] md:mb-[1vw]'>About Me</h1>
          <ul className='mx-auto justify-between'>
            <li className='text-[4vw] mb-[1vw] md:text-[3vw] lg:text-[2vw]'><a href="https://www.linkedin.com/in/k%C3%A1roly-serd%C3%BClt-1b998720a/" target="_blank" rel="noopener noreferrer" className=' flex items-center'><AiFillLinkedin className=' text-[5vw]'/> Linkedin</a></li>
            <li className='text-[4vw] mb-[1vw] md:text-[3vw] lg:text-[2vw]'><a href="https://github.com/kserdult" target="_blank" rel="noopener noreferrer" className=' flex items-center'><AiFillGithub className=' text-[5vw]'/> GitHub</a></li>
            <li className='text-[4vw] mb-[1vw] md:text-[3vw] lg:text-[2vw]'><a href="https://github.com/kserdult/netflixcv" target="_blank" rel="noopener noreferrer" className=' flex items-center'><AiFillGithub className=' text-[5vw]'/> SourceCode</a></li>
          </ul>
        </div>
        <div>
          <h1 className='text-[5vw] md:text-[4vw] lg:text-[3vw] mb-[2vw] md:mb-[1vw]'> Download my CV</h1>
          <ul>
            <li className='text-[4vw] mb-[1vw] md:text-[3vw] lg:text-[2vw]'><a href={CVENG} download="CV-ENG.pdf" rel="noopener noreferrer" className=' flex items-center'><AiOutlineCloudDownload className=' text-[5vw]'/>English CV</a></li>
            <li className='text-[4vw] mb-[1vw] md:text-[3vw] lg:text-[2vw]'><a href={CVHUN} download="CV-HUN.pdf" rel="noopener noreferrer" className=' flex items-center'><AiOutlineCloudDownload className=' text-[5vw]'/>Hungarian CV</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Bottom