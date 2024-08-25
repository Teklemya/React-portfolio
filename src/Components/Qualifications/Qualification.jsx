import "./Qualifications.css";

const Qualification = () => {
  return (
    <div className="qualification-section">
    <h2 className="section-title">Qualifications</h2>
    <span className="section-subtitle">My personal journey</span>

    <div className="qualification-container">
      <div className="qualification-tabs">
        <div className="qualification-button qualification__active button--flex">
          <i className="uil uil-graduation-cap qualification__icon"></i> Education
        </div>  

        <div className="qualification-button button--flex">
          <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
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
