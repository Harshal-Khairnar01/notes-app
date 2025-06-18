import { Route, Routes } from 'react-router-dom'
import './App.css'



import React from 'react'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Important from './pages/Important'
import Bin from './pages/Bin'

const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
      <Route path="/important" element={<Important/>}/>
      <Route path="/bin" element={<Bin/>}/>
    </Routes>
   </div>
  )
}

export default App
