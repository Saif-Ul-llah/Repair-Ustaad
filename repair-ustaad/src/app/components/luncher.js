import React from 'react';
import Image from 'next/image';
import Pic from '../../../public/images/person-2.png';

const Luncher = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <Image
          className='mt-24 md:mt-24'
          src={Pic}
          width={450}
          height={500}
          alt="Picture of the author" 
        />
        <div className='w-full md:w-3/4 mt-10 md:mt-32 px-4'>

          <div className='flex flex-row md:flex-row mb-6'>
            <p className='font-bold md:mr-0 opacity-95 text-left font-inter text-4xl md:text-6xl pl-2 md:pl-0'>REPA</p>
            <p className='text-white md:ml-0 opacity-95 text-left font-inter font-bold text-4xl md:text-6xl'>IR Ustaad</p>
          </div>

          <div className='flex flex-col md:flex-row mb-6'>
            <p className='text-xl md:mr-2 font-semibold mt-2 md:mt-6'>Best Services,</p>
            <p className='text-gray-400 text-xl md:ml-2 font-extrabold mt-2 md:mt-6'>Right people, Right Time</p>
          </div>

          <div className='text-lg md:text-2xl mb-6'>
            Text paragraph to define your work goes here.
          </div>

          <div className='flex flex-col md:flex-row'>
            <button className="w-full md:w-44 h-12 md:h-16 bg-[#E3BF1E] text-white font-extrabold rounded-full text-base md:text-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-yellow-800">Download App</button>

            <button className="w-full md:w-48 shadow-2xl h-12 md:h-16 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-semibold rounded-full text-base md:text-lg px-4 py-2 md:ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-yellow-800">Discover more</button>
          </div>
        </div>
      </div>

      <div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-72 text-5xl font-semibold mt-40 text-center'>Best Services Available</h1>
          <hr className='h-1 w-2/5 bg-yellow-500 rounded-full'/>
          <p className='text-xl text-gray-600 font-semibold w-1/3'>
          Explore the Awesome Repair Services feature,<br/>
            Feel the joy of serving you the best. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Luncher;
