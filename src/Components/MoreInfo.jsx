import React from 'react'
import {MdCancel, MdEmail, MdLocationCity, MdSchool, MdWork} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const MoreInfo = ({moreInfo, setMoreInfo}) => {
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("cancel")) {
      setMoreInfo(false)
    }
  };
  return (
    <div onClick={exitDetailHandler} className={`cancel flex justify-center items-center w-[100vw] h-[100vh] z-50 ${moreInfo? `fixed bg-black/70` : `hidden bg-black/0`} `}>
        <div className=' pb-[20px] relative bg-[#181818] text-white w-[90vw] sm:w-[80vw] md:w-[70vw] md:h-[95vh] lg:w-[60vw] xl:w-[50vw] h-[90vh] rounded-md overflow-y-scroll pr-5 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <MdCancel onClick={()=>setMoreInfo(false)} className='absolute top-3 right-3 text-5xl cursor-pointer'/>
          <h1 className='text-2xl w-full text-center mt-[3vw] sm:mt-[2.5vw] md:mt-[2vw] lg:mt-[1.5vw]'>Károly Serdült</h1>
          <ul className='ml-[10%] mt-[5vw] sm:mt-[4vw] md:mt-[3vw] lg:mt-[2vw]'>
            <li className='flex items-center'><BsFillTelephoneFill className=' mr-3'/> 30 784 7672</li>
            <li className='flex items-center'><MdEmail className=' mr-3'/> kserdult@gmail.com</li>
            <li className='flex items-center'><MdLocationCity className=' mr-3'/> Hungary, Debrecen</li>
          </ul>
          <div className='ml-[6%] mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] lg:mt-[1vw]'>
            <h1 className='flex items-center font-bold text-xl'><MdSchool className=' mr-3'/> Education</h1>
            <h2 className='ml-[10%] text-lg'>Debreceni SZC Mechwart András Gépipari és Informatikai Technikum</h2>
            <p>
            I completed my studies at Mechwart, where I earned a certification in System Operation (Rendszerüzemeltető OKJ). During my studies, I gained knowledge in networking, programming, and hardware, with a particular emphasis on networking. While I found all of these subjects fascinating, programming captured my attention and continues to be my passion. In fact, I am currently studying programming in my free time to further my skills. Additionally, I have obtained several certifications, including ECDL, Cisco IT Essentials, CCNA Routing and Switching: Introduction to Networks, and CCNA Routing and Switching: Routing and Switching Essentials.
            </p>
          </div>
          <div className='ml-[6%] mt-[2.5vw] sm:mt-[2vw] md:mt-[1.5vw] lg:mt-[1vw]'>
            <h1 className='flex items-center font-bold text-xl'><MdWork className=' mr-3'/> Work Experience</h1>
            <h2 className='ml-[10%] text-lg'>Customer Service Representative</h2>
            <p>
            I have extensive experience working as a Customer Service Representative, starting out as a Call/Chat agent and working my way up to the back office/claim team. Over the years, I have become proficient in nearly every aspect of the role. This includes handling customer inquiries via calls, chats, and emails, processing transactions, investigating issues, and resolving problems. My expertise in these areas has allowed me to provide top-notch service to customers and ensure their satisfaction.
            </p>
          </div>
        </div>
    </div>
  )
}

export default MoreInfo