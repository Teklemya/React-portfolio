import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Experinces</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* <div className="nav-connect">Connect with me</div> */}
    </div>
  )
}

export default Navbar
