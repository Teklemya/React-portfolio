import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/izak_profile1.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="My Picture" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer based in Cincinnati, Ohio. I specialize in creating interactive expriences for the web. I have 3 years of experience in multiple companies like UCHealth, LDDL and OrangeIsBetter.
            </p>
            
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width:"85%"}} /></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>R</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>C#</p><hr style={{width:"40%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1>5+</h1>
            <p>Years Of Experince</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>30+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>Programming Language</p>
          </div>
        </div>
    </div>
  );
};

export default About;
