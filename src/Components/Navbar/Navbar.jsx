import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#qualification">Experinces</a></li>
        <li><a href="#mywork">Projects</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      {/* <div className="nav-connect">Connect with me</div> */}
    </div>
  )
}

export default Navbar
