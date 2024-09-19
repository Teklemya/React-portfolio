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
      <div className="body-container">
      <Hero/>
      <About/>
      <Qualification/> 
      <MyWork/>
       <Contact/>
      <Footer/></div>
    </div>
  )
}

export default App  