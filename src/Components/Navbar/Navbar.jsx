// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './Navbar.css'
// eslint-disable-next-line no-unused-vars
import logo from '../../assets/logo.jpg'
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
 
const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-100%";
  }
  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <div  className="nav-logo">
        <h1>ይስሀቅ</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_open} onClick={openMenu} alt="side bar humburger" className="nav-mob-open" />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="side bar close icon" className="nav-mob-close" />
        <li><AnchorLink href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#about'><p>About</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#mywork'><p>Gateway</p></AnchorLink></li>        
        <li><AnchorLink offset={50} href='#qualification'><p>Experinces</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#involvements'><p>Involvements</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#Honors'><p>Honors</p></AnchorLink></li>
        <li><AnchorLink offset={50}  href='#contact'><p>Contacts</p></AnchorLink></li>
      </ul>
      {/* <div className="nav-connect">Connect with me</div> */}
    </div>
  )
} 

export default Navbar
