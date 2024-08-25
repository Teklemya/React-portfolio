import "./Qualifications.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Qualification = () => {
  return (
    <div className="qualification-section">
    <div className="qualification-title">
        <h1>Qualifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
    <span className="section-subtitle">My personal journey</span>

    <div className="qualification-container">
      <div className="qualification-tabs">
        <div className="qualification-buttons">
          <div className="qualification-button">
            <FontAwesomeIcon className="graduation-cap" icon={faGraduationCap} /> Education
            <FontAwesomeIcon className="briefcase-alt" icon={faBriefcase} /> Experience
          </div>
        </div>   
      </div>
    <div className="qualification-sections">
        <div className="qualification-content qualification__content-active">
          <div className="qualification-data">
            <div>
              <h3 className="qualification_title">Web Desgin</h3>
                <span className="qualification-subtitle">Spain - Institute </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>

          <div className="qualification-data">
            <div></div>

            <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>

            <div>
              <h3 className="qualification_title">Art Director</h3>
                <span className="qualification-subtitle">Spain - Institute </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>             
            </div>
          </div>
       

        <div className="qualification-data">
            <div>
              <h3 className="qualification_title">Web Development</h3>
                <span className="qualification-subtitle">Spain - Institute </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>

          <div className="qualification-data">
            <div></div>

            <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>

            <div>
              <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification-subtitle">Spain - Institute </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>             
            </div>
          </div> 
        </div>

        <div className="qualification-content">
          <div className="qualification-data">
            <div>
              <h3 className="qualification_title">Student Success Coach</h3>
                <span className="qualification-subtitle">CECH @ UC</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2024 - Present
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>

          <div className="qualification-data">
            <div></div>

            <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>

            <div>
              <h3 className="qualification_title">Teaching Assistant</h3>
                <span className="qualification-subtitle">CECH @ UC</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2024 - Jul 2024
                </div>             
            </div>
          </div>
       

        <div className="qualification-data">
            <div>
              <h3 className="qualification_title">Data Analyst Intern</h3>
                <span className="qualification-subtitle">Leukima Drug Development Lab @ UCHealth</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Dec 2023
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>

          <div className="qualification-data">
            <div></div>

            <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>

            <div>
              <h3 className="qualification_title">Frontend Developer Intern</h3>
                <span className="qualification-subtitle">COM IT @ UC </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Feb 2023 - Aug 2023
                </div>             
            </div>
          </div> 
        </div>
    </div>

    </div>
    </div>
  )
}

export default Qualification
