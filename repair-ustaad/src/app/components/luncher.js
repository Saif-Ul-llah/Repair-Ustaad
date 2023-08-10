import React from 'react';
import Image from 'next/image';
import Pic from '../../../public/images/person-2.png';

const Luncher = () => {
  return (
    <div>
      {/* first page wiht image intro*/}
      <div className='flex flex-col md:flex-row '>
        <Image
          className='mt-24 md:mt-24 w-1/4 h-96 '
          src={Pic}
          alt="Picture of the author" 
        />
        <div className='w-full md:w-3/4 mt-10 md:mt-32 px-4'>

          <div className='flex flex-row md:flex-row mb-6'>
            <p className='font-bold md:mr-0 opacity-95 text-left text-5xl md:text-6xl pl-2 md:pl-0 -ml-14'>REPA</p>
            <p className='text-white md:ml-0 opacity-95 text-left font-bold text-5xl md:text-6xl'>IR Ustaad</p>
          </div>

          <div className='flex flex-col md:flex-row mb-6'>
            <p className='text-3xl md:mr-2 font-extrabold mt-2 md:mt-6 -ml-24'>Best Services,</p>
            <p className='text-gray-400 text-xl md:ml-2 font-extrabold mt-2 md:mt-6'>Right people, Right Time</p>
          </div>

          <div className='text-lg md:text-2xl mb-6'>
            Text paragraph to define your work goes here.
          </div>

          <div className='flex flex-col md:flex-row'>
            <button className="w-full md:w-44 h-12 md:h-16 shadow-inner shadow-black sha bg-[#E3BF1E] text-white font-extrabold rounded-full text-base md:text-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-yellow-800">Download App</button>

            <button className="w-full md:w-48 shadow-2xl h-12 md:h-16 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-semibold rounded-full text-base md:text-lg px-4 py-2 md:ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-yellow-800">Discover more</button>
          </div>
        </div>
      </div>

        {/* second page services */}
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-80 text-5xl font-bold mt-52 text-center mb-6'>Best Services Available</h1>
          <hr className='h-1 w-2/5 bg-yellow-500 rounded-full'/>
          <p className='text-xl text-gray-600 font-semibold mt-6'>
          Explore the Awesome Repair Services feature,
          </p>
          <p className='text-xl text-gray-600 font-semibold'>
          Feel the joy of serving you the best. 
          </p>
        </div>
        {/* Service cards */}
        <div className='flex'>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl shadow-black m-auto mt-10 ">
          <Image class="w-full h-52" src={Pic} alt="Plumber relevent image to be past here "/>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2 text-center ">Plumber</div>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div> 
        </div>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl shadow-black m-auto mt-10 ">
          <Image class="w-full h-52" src={Pic} alt="Plumber relevent image to be past here "/>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2 text-center ">Plumber</div>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div> 
        </div>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl shadow-black m-auto mt-10 ">
          <Image class="w-full h-52" src={Pic} alt="Plumber relevent image to be past here "/>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2 text-center ">Plumber</div>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div> 
        </div>
        </div>
        </div>
        {/* Work progress section */}
        <div className='mt-44'>
       <div className='flex flex-col justify-center items-center'>
       <h1 className='w-full text-5xl font-bold text-center mb-6'>How does this app work </h1>
       </div>
      <div className='flex '>
        <Image src={Pic} className='w-96 h-full m-auto'/>
        <div className='w-2/4'>
          
        </div>
      </div>

        </div>

      

    </div>
  );
}

export default Luncher;
