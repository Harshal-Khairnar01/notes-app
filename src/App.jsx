import { Route, Routes } from 'react-router-dom'
import './App.css'



import React from 'react'
import Home from './pages/Home'
import Archive from './pages/Archive'

const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
    </Routes>
   </div>
  )
}

export default App
