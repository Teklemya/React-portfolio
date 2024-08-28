import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Qualification from "./Components/Qualifications/Qualification"
import Contact from "./Components/Contact/Contact"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App  