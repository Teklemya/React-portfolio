import "./Footer.css";
import logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id="footer" className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I&apos;m a frontend developer with 3 years of experience in multiple companies like UCHealth, LDDL and OrangeIsBetter.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>              
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            &copy; 2024 Yishak Teklemariam. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
