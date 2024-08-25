import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Qualification from "./Components/Qualifications/Qualification"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/>
    </div>
  )
}

export default App  