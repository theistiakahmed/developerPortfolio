import { useEffect, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayouts from './components/Layout/RootLayouts'
import Home from './components/pages/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'



function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayouts/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Projects/>}/>
        <Route/>
      </Route>
    </Routes>
        
    
  
    </>
  )
}

export default App
