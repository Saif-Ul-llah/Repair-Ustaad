import React from 'react';
import Image from 'next/image';
import Pic from '../../../public/images/person-2.png';
import Play from '../../../public/images/ply.png';
import Apple from '../../../public/images/apple.png';

const Luncher = () => {
  return (
    <div>
      {/* first page wiht image intro*/}
      <div className='flex flex-col md:flex-row' id='home'>
        <Image
          className='mt-24 md:mt-24 md:w-1/4 md:h-96  '
          src={Pic}
          alt="Picture of the author" 
        />
        <div className='w-full md:w-3/4 mt-10 md:mt-32 px-4'>

          <div className='flex flex-row md:flex-row mb-6'>
            <p className='font-bold md:mr-0 opacity-95 text-[#2c233bf2] text-left text-5xl md:text-6xl pl-2 md:pl-0 md:-ml-14'>REPA</p>
            <p className='md:text-white text-gray-500 md:ml-0 opacity-95 text-left font-bold text-5xl md:text-6xl '>IR Ustaad</p>
          </div>

          <div className='flex flex-col md:flex-row mb-6'>
            <p className='text-3xl md:mr-2 text-[#2c233bf2] font-extrabold mt-2 md:mt-6 md:-ml-24'>Best Services,</p>
            <p className='text-gray-400 text-xl md:ml-2 font-extrabold mt-2 md:mt-6'>Right people, Right Time</p>
          </div>

          <div className='text-lg md:text-2xl mb-6'>
            Text paragraph to define your work goes here.
          </div>

          <div className='flex flex-col md:flex-row'>
            <button className="w-full md:w-48 h-12 md:h-16 bg-[#2c233bf2] text-white font-extrabold rounded-full text-base md:text-xl px-4 py-2 mb-4 md:mb-0 md:mr-4">Download App</button>

            <button className="w-full md:w-48 shadow-2xl h-12 md:h-16 bg-white text-[#2c233bf2] hover:bg-white focus:ring-4 font-extrabold rounded-full text-base md:text-xl px-4 py-2 md:ml-4">Discover more</button>
          </div>
        </div>
      </div>

        {/* second page services */}
      <div id='services'>
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
        <div className='md:flex'>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl md:shadow-black m-auto mt-10 ">
          <Image class="w-full h-52" src={Pic} alt="Plumber relevent image to be past here "/>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2 text-center ">Plumber</div>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div> 
        </div>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl md:shadow-black m-auto mt-10 ">
          <Image class="w-full h-52" src={Pic} alt="Plumber relevent image to be past here "/>
          <div class="px-3 py-3">
            <div class="font-bold text-xl mb-2 text-center ">Plumber</div>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div> 
        </div>
        <div class="max-w-xs  overflow-hidden h-96 rounded-xl shadow-2xl md:shadow-black m-auto mt-10 ">
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
    <div className='mt-44' id='how'>
       <div className='flex flex-col justify-center items-center'>
       <h1 className='w-full text-5xl text-[#2c233bf2] font-bold text-center mb-6'>How does this app work </h1>
       </div>
      <div className='md:flex mt-14 '>
      <div className='w-96 h-full bg-yellow-400 m-auto'>
          <Image src={Pic} className='w-96 md:h-full  p-5 pb-0 m-auto'/>
          <div className='bg-[#2c233bf2] w-80 h-72 rounded-3xl m-auto mb-6 '>
            <div className='text-4xl text-center font-serif pt-5 text-yellow-400 font-extrabold'> Repair Ustaad</div>
            <div className='text-white m-auto px-10 py-6 text-center'>Best Services, Right Time,Right People</div>
            <div className='text-[#E3BF1E] m-auto px-10 text-xl text-center'>Providing Solution </div>
            <div className='flex flex-col items-center justify-center PY-6'>
            <button className=' bg-[#E3BF1E] rounded-3xl text-xl font-bold w-20 h-12 '>Next</button>
            </div>
          </div>
      </div>
        <div className='hidden md:flex w-28 flex-col items-center m-auto'>
          <div className='w-24 h-24 rounded-full bg-yellow-400'></div>
          <div className='w-1 bg-yellow-500 h-64'></div>
          <div className='w-24 h-24 rounded-full border-yellow-500 border-2'></div>
          <div className='w-1 bg-yellow-500 h-64'></div>
          <div className='w-24 h-24 rounded-full border-yellow-500 border-2'></div>
        </div>
        <div className='md:w-2/5 '>
          <div className='text-center mt-10 md:mt-0 md:text-5xl text-2xl text-[#2c233bf2] font-semibold '> Make A Profile</div>
          <div className='md:hidden w-1 bg-yellow-500 h-20 m-auto'></div>
          <div className='text-center md:text-5xl text-2xl md:my-80 text-[#2c233bf2] font-semibold '> Download App</div>
          <div className='md:hidden w-1 bg-yellow-500 m-auto h-20'></div>
          <div className='text-center md:text-5xl text-2xl text-[#2c233bf2] font-semibold '> Providing Solution</div>
        </div>
      </div>
    </div>
      {/* Download App */}
    <div className='w-11/12 h-full m-auto mt-24 md:mt-80 rounded-3xl bg-[#2c233bf2]'>
      <div className='text-center text-white text-5xl font-semibold py-20'>Download App</div>
      <div className='text-white ml-3 md:ml-40 text-2xl md:text-5xl font-semibold'>Download  app option </div>
      <div className='text-white ml-3 md:ml-40 mt-20 md:text-2xl md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut liquip ex ea commodo consequat</div>
      <div className='md:flex mt-10'>
        <div className='md:w-[507px] md:h-[118px] m-auto w-full h-20 bg-yellow-500 p-3 md:text-4xl text-2xl font-semibold text-white rounded-full justify-center flex mb-6'><Image className='md:w-24 pr-5 pl-0 md:h-24 ' src={Play} /> Download <br/> Google Play </div>
        
        <div className='md:w-[507px] md:h-[118px] p-3 m-auto w-full h-20 bg-white rounded-full text-2xl md:text-4xl font-semibold  justify-center flex '><Image className='md:w-24 pr-5 pl-0 md:h-24 ' src={Apple} /> Download <br/> Apple store </div>
      </div>
    </div>  

    </div>
  );
}

export default Luncher;
