import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from './components/FloatingButtons'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetailed'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Certificate from './pages/Certificate'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/certificates' element={<Certificate/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:slug' element={<ProductDetail/>}/>
            <Route path='/privacy&policy' element={<PrivacyPolicy/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App