import React from 'react'
import Image from 'next/image'
import Choose from "../../../public/images/choose.png"

const Service = () => {
  return (
    <div className='md:flex mt-32'>
      <div className='text-6xl w-8/12 py-60 ml-11 text-[#2C233BF2] font-bold '>
        Easy to manage your <br/>
        Repair available Services. 
      </div>
      <div>
        <Image className='' src={Choose}/>
      </div>
    </div>
  )
}

export default Service
