import React from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import Contact from './Sections/Contact'

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
</BrowserRouter>
<Home/>
<About/>
<Skills/>
<Project/>
<Contact/>
    </>
  )
}

export default App
