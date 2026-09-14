import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Product from './pages/Product'
import {Route,Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Nav2 from './components/Nav2'

const App = () => {
  return (
   <div className='min-h-screen bg-black text-white flex flex-col'>
    <Navbar />
    <Nav2 />
    <main className='flex-1'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CourseDetail />} />

      <Route path='/product' element={<Product />} >
      <Route path='/product/men' element={<Men />} />
      <Route path='/product/women' element={<Women />} />      
      <Route path='/product/kids' element={<Kids />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </main>
   
    <Footer />
    </div>
  )
}

export default App
