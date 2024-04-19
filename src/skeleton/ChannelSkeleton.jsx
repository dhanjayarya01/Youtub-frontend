import React from 'react';

const ChannelSkeleton = () => {
  return (
    <div className='w-full p-14 pt-0 bg h-screen'>
      <div className='w-full h-[35%] rounded-2xl bg-gray-200 animate-pulse'></div>

      <div className='w-full flex h-[40%]'>
        <div className='w-[20%] h-full p-3'>
          <div className='rounded-full h-full w-[90%] border-[0.1rem] border-gray-300 bg-gray-200 animate-pulse'></div>
        </div>
        <div className='w-[80%] h-full pt-5'>
          <div className='w-full h-[31%] bg-gray-200 animate-bounce'></div>
          <div className='w-full mt-[1%] h-[20%] flex'>
            <div className='bg-gray-200 w-[30%] h-[100%] animate-pulse mr-[2%]'></div>
            <div className='bg-gray-200 w-[30%] h-[100%] animate-pulse mr-[2%]'></div>
            <div className='bg-gray-200 w-[30%]  h-[100%] animate-pulse'></div>
          </div>
          <button className='w-[18%] h-[24%] mt-1 rounded-3xl active:bg-gray-300 bg-gray-200 animate-pulse'></button>
        </div>
      </div>

      <div>
        <div className='flex bg-gray-200 items-center text-xl border-b-2 h-[3rem]'>
          <div className='bg-gray-200 w-[25%] h-full animate-pulse'></div>
          <div className='bg-gray-200 w-[25%] h-full animate-pulse'></div>
          <div className='bg-gray-200 w-[25%] h-full animate-pulse'></div>
          <div className='bg-gray-200 w-[25%] h-full animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};

export default ChannelSkeleton;
