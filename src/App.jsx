import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Qualification from "./Components/Qualifications/Qualification"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/>
      <MyWork/>
    </div>
  )
}

export default App  