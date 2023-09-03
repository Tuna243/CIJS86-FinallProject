import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/Logo (3).png'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { ThemeContext } from '../../contexts/ThemeContext';
// import './HeaderStyle.css'

const Header = () => {

    // const [toggle, setToggle] = useState(true)
    const {theme,setTheme} = useContext(ThemeContext);

    useEffect(()=>{
        console.log(theme);
    },[])

    return (
        <div className='flex items-center justify-around p-3 dark:bg-[#1f2030] relative'>
            <div className='flex font-bold text-black-200 p-1 m-3 items-center'>
                <img src={logo} width={60} height={60} />
                <h2 className='text-3xl font-bold dark:text-white'>Shaki Games</h2>
            </div>
            <div className='flex bg-gray-200 p-2 w-3/5 mx-5 rounded-full items-center'>
                <HiMiniMagnifyingGlass />
                <input type="text" className='bg-transparent  outline-none px-2 w-full' placeholder='Search Games' />
            </div>
            <div>
                {
                theme == 'light' ? 
                    (<HiMiniMoon className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                    onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark')} } />
                    ):( <HiSun className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                    onClick={() => {setTheme('light');localStorage.setItem('theme','light')}} />)
                }

            </div>
        </div>
    )
}

export default Header