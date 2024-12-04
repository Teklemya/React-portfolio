import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Qualification from "./Components/Qualifications/Qualification"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import { SpeedInsights } from "@vercel/speed-insights/react"
import {Analytics} from '@vercel/analytics/react'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="body-container">
      <Hero/>
      <About/>
     <MyWork/> 
     <Qualification/>   
       <Contact/>
      <Footer/></div>
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App  