import React from 'react'
import Circle from '../../../public/images/cricle.png';
import Twt from '../../../public/images/twt.png';
import Fb from '../../../public/images/fb.png';
import Inta from '../../../public/images/inta.png';
import Image from 'next/image';




const Footer = () => {
  return (
   <div className='md:flex md:h-[474px] w-full bg-[#4B4358] mt-28 text-white' id='about'>
        <div className='w-80 h-[487px] bg-[#2c233b] mx-6 rounded-3xl -mt-6'>
            <div className='text-4xl text-center mt-12 font-serif pt-5 text-yellow-400 font-extrabold'>
                 Repair Ustaad
            </div>
        </div>
        <div className=''>
            <div className='mt-20 '>
                <h2 className='text-2xl font-semibold m-4'>Address</h2>
                <p className='m-4 mt-10'>
                    Phone: +92 324 3387656<br/>
                    Email: info@coderatory.com<br/>
                    Address: L17, Block 3A, Gulistan e Jauhar, <br/>
                    Karachi, Pakistan
                </p>
            </div>
            <div className='md:flex m-auto'> 
            <div className='m-auto md:mx-80 flex mt-20  md:w-3/4'>
                <Image src={Twt}/>
                <Image className='mx-20' src={Fb}/>
                <Image src={Inta}/>
            </div>
            <Image src={Circle}/>
            </div>
        </div>
   </div>
  )
}

export default Footer
