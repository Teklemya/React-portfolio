import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experinces</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
      {/* <div className="nav-connect">Connect with me</div> */}
    </div>
  )
}

export default Navbar
