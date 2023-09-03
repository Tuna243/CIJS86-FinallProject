import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Header from './components/common/Header'
import { ThemeContext } from './contexts/ThemeContext';


function App() {

  const [theme,setTheme] = useState('light');
  useEffect(()=>{
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme'):'dark')
  },[])

  return (
   <ThemeContext.Provider value={{theme,setTheme}}>
   <div className={`${theme} ${theme == 'dark' ? 'bg-[#0c0d14]' : null} min-h-[100vh]` } >
     <Header/>
     <Home/>
   </div>
   </ThemeContext.Provider>
  )
}

export default App
