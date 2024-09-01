/* eslint-disable no-unused-vars */
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Qualification from "./Components/Qualifications/Qualification"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/> 
      <MyWork/>
       <Contact/>
      {/*<Footer/> */}
    </div>
  )
}

export default App  