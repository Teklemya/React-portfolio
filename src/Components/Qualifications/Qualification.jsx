// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Qualifications.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGraduationCap, faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="qualification-section">
    <div className="qualification-title">
        <h1>Qualifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
    <h1 className="section-subtitle">My personal journey</h1>

    <div className="qualification-container">
        <div className="qualification-buttons">
          <div className={
            toggleState === 1 
            ? "qualification-button qualification__active" 
            : "qualification-button"
          } onClick={() => toggleTab(1)}
          >
            <FontAwesomeIcon className="graduation-cap" icon={faGraduationCap} /> Education
          
          </div>
          <div className={
            toggleState === 2 
            ? "qualification-button qualification__active" 
            : "qualification-button"
          } onClick={() => toggleTab(2)}>
           
            <FontAwesomeIcon className="briefcase-alt" icon={faBriefcase} /> Experience
          </div>
        </div>   
     
    <div className="qualification-sections">
        <div 
        className={
          toggleState === 1 
          ? "qualification-content qualification__content-active" 
          : "qualification-content"
        } >
        
          <div className="qualification-data">
            <div>
              <div className="qualification_title"><h3>Bachelors In Technology</h3></div>
                <span className="qualification-subtitle">Software Development - Univeristy of Cincinnati </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Aug 2022 - Apr 2027
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
            <div className="qualification_title"><h3>Bachelors In Technology</h3></div>
                <span className="qualification-subtitle">Cyber Security - Univeristy of Cincinnati  </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Aug 2022 - Apr 2027
                </div>             
            </div>
            
          </div> 

          <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Masters In Technology</h3></div>
                <span className="qualification-subtitle">Information Technology - Univeristy of Cincinnati  </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Jan 2025 - Apr 2027
                </div>             
            </div><div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
            </div>
          </div> 
        </div>

        <div className={
          toggleState === 2 
          ? "qualification-content qualification__content-active" 
          : "qualification-content"
        }>
          <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Student Sucess Coach CooP</h3></div>
                <span className="qualification-subtitle">CECH @ UC</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Aug 2024 - Present
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
            <div className="qualification_title"><h3>Full Stack Developer</h3></div>
                <span className="qualification-subtitle">OrangeIsBetter @ Startup Cincy</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Mar 2024 - Present
                </div>             
            </div>
          </div>
       

        <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Teaching Assistant</h3></div>
                <span className="qualification-subtitle">CECH @ UC</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Jan 2024 - Aug 2024
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
            <div className="qualification_title"><h3>Data Analyst Intern</h3></div>
                <span className="qualification-subtitle">Leukima Drug Development Lab @ UCHealth</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Aug 2023 - Dec 2023
                </div>             
            </div>
          </div> 
          <div className="qualification-data">
            <div>
            <div className="qualification_title"><h3>Frontend Devloper Intern</h3></div>
                <span className="qualification-subtitle">COM IT @ UC </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Feb 2023 - Aug 2023
                </div>             
            </div>
              <div>   
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
          </div>

        </div>
    </div>

    </div>
    </div>
  )
}

export default Qualification
