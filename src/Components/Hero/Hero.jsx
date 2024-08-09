import './Hero.css'
import profile_img from '/src/assets/izak_profile.jpg'
import resume from '/src/assets/resume.pdf'


const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Izak here,</span> frontend developer based in Cincinnati, Ohio.</h1>
      <p>I specialize in creating interactive expriences for the web. I have 3 years of experience in multiple companies like UCHealth, and OrangeIsBtter.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>
          
      <a href={resume} download>My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
