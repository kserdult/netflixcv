import React from 'react'

const MoreInfo = ({moreInfo, setMoreInfo}) => {

  return (
    <div onClick={()=> setMoreInfo(false)} className={`w-[100vw] h-[100vh] z-50 ${moreInfo? `fixed bg-black/50` : `hidden bg-black/0`} `}>
        <div>
            
        </div>
    </div>
  )
}

export default MoreInfo