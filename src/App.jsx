import React from 'react'

// importing components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
 <React.Fragment>
       <Header/>
       <Nav/>
       <About />
       <Experience/>
       <Services/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>
 </React.Fragment>
  )
} 
 
export default App