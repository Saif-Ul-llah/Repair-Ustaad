import React from 'react'
import Image from 'next/image'
import Sc1 from '../../../public/images/scr1.png';
import Sc2 from '../../../public/images/scr2.png';
import Sc3 from '../../../public/images/scr3.png';

const AppSS = () => {
  return (
    <div className='m-auto w-full justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
       <h1 className='w-full text-5xl my-20 text-[#2c233bf2] font-bold text-center mb-6'> App Screen shots  </h1>
       </div>
        <div className='md:flex m-auto justify-center items-center '>
            <Image src={Sc1} className='w-[358px] h-[792px]' alt="App SS"/>
            <Image className='md:mx-12 w-[358px] h-[792px]' src={Sc2} alt="App SS"/>
            <Image src={Sc3} className='w-[358px] h-[792px]' alt="App SS"/>
        </div>
    </div>
  )
}

export default AppSS
