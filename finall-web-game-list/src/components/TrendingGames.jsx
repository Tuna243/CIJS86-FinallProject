import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        
    },[])
  return (
    <div className='mt-5 hidden md:block '>
        <h2 className='font-bold text-[#172554] text-[30px] dark:text-white'>Trending Games</h2>
    <div className='md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4 cursor-pointer'>
        {
            gameList.map((item,index)=>index < 4 &&(
                <div className='bg-[#a3a3a3] dark:bg-[#172554] rounded-lg p-2 group
                hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image } alt="Loading..." className='h-[270px] rounded-lg object-cover' />
                    <h2 className='text-[#172554] dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default TrendingGames