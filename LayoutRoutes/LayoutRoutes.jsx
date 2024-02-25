import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import Dishes from '../pages/dishes/Dishes'
import Booking from '../pages/booking/Booking'
import About from '../pages/about/About'
import Notfound from '../pages/notfound/Notfound'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/*' element={<Notfound/>}/>

            
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes