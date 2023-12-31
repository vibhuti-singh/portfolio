import React from 'react'
import Homepage from './components/Homepage'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contactme from './components/Contactme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  
  
  return (
    <Router>
      <Navbar/>
      <div className="container-1 p-5 z-0">
    
      
      <Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/experience' element={<Experience/>}/>
<Route path='/project' element={<Projects/>}/>
<Route path='/contact' element={<Contactme/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
