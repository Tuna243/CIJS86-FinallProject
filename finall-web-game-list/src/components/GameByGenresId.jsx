import React, { useEffect } from 'react'
import { HiOutlineStar } from "react-icons/hi2";
import { HiMiniEye } from "react-icons/hi2";
import { HiMiniComputerDesktop } from "react-icons/hi2";


function GameByGenresId({gameList}) {
    useEffect(()=>{
        console.log(gameList);
    })
  return (
    <div>
        <h2 className='font-bold text-[#172554] text-[30px] dark:text-white mt-5'>Popular Games</h2>
    <div className='grid grid-cols-1 grid-cols-3 lg:grid-cols-4 gap-6'>
        {gameList.map((item) =>(
            <div className='bg-gray-300 dark:bg-[#1e3a8a] p-2 rounded-lg pb-12 h-full relative cursor-pointer mt-5
                                hover:scale-110 transition-all ease-in-out duration-200'>
                <img src={item.background_image} alt="Loading..."  className='w-full h-[80%] rounded-xl object-cover'/>
                <h2 className='text-[20px] text-[#172554] dark:text-white font-bold'>{item.name}</h2>
                <h2 className='absolute bottom-0 p-1 flex  items-center gap-2 text-gray-500 dark:text-gray-300'>
                    <HiOutlineStar/> {item.rating} 
                    <HiMiniEye/> {item.reviews_count} 
                    <HiMiniComputerDesktop/> {item.playtime} 
                </h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GameByGenresId