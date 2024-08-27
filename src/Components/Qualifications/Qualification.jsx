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
    <h1 className="section-subtitle">My personal journey</h1>

    <div className="qualification-container">
   
        <div className="qualification-buttons">
          <div className="qualification-button">
            <FontAwesomeIcon className="graduation-cap" icon={faGraduationCap} /> Education
            
          </div>
          <div className="qualification-button">
           
            <FontAwesomeIcon className="briefcase-alt" icon={faBriefcase} /> Experience
          </div>
        </div>   
     
    <div className="qualification-sections">
        <div className="qualification-content qualification__content-active">
          <div className="qualification-data">
            <div>
              <div className="qualification_title"><h3>Bachelors In Technology</h3></div>
                <span className="qualification-subtitle">Information Technology - Univeristy of Cincinnati </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022 - Apr 2027
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>
{/* 
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
          </div> */}

          <div className="qualification-data">
            <div></div>

            <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>

            <div>
            <div className="qualification_title"><h3>Masters In Technology</h3></div>
                <span className="qualification-subtitle">Information Technology - Univeristy of Cincinnati  </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2025 - Apr 2027
                </div>             
            </div>
          </div> 
        </div>

        <div className="qualification-content">
          <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Student Sucess Coach</h3></div>
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
            <div className="qualification_title"><h3>Teaching Assistant</h3></div>
                <span className="qualification-subtitle">CECH @ UC</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2024 - Aug 2024
                </div>             
            </div>
          </div>
       

        <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Data Analyst Intern</h3></div>
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
            <div className="qualification_title"><h3>Frontend Devloper Intern</h3></div>
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
