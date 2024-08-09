import "./Hero.css";
import profile_img from "/src/assets/izak_profile.jpg";
import resume from "/src/assets/resume.pdf";
import Social from "/src/Components/Social/Social.jsx";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-social-left">
        <Social />
      </div>
      <div className="hero-content">
        <img src={profile_img} alt="" />
        <h1>
          <span>إِسْحَاق here,</span> frontend developer based in Cincinnati, Ohio.
        </h1>
        <p>
          I specialize in creating interactive expriences for the web. I have 3
          years of experience in multiple companies like UCHealth, and
          OrangeIsBetter.
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">
            <a href={resume} download>
              My resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
