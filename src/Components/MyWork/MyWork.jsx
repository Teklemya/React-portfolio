// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";


const MyWork = () => {
  // Initial state to control the number of visible projects
  const INITIAL_PROJECTS = 4;
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  // Function to handle "Show more" click
  const handleShowMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 2);
  };

  // Function to handle "Show less" click
  const handleShowLess = () => {
    setVisibleProjects(INITIAL_PROJECTS);
  };
  const handleMouseEnter = (index) => {
    document.getElementById(`overlay-${index}`).classList.add("show");
  };
  
  const handleMouseLeave = (index) => {
    document.getElementById(`overlay-${index}`).classList.remove("show");
  };
  

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
  {mywork_data.slice(0, visibleProjects).map((work, index) => (
    <div
      key={index}
      className="work-item"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <a href={work.w_link} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <img src={work.w_img} alt={work.w_name} />
          <div id={`overlay-${index}`} className="overlay">
            <p className="description">{work.w_description}</p>
            <p className="tech-stack">{work.w_tech}</p>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>
      
      {/* Conditional rendering for "Show more" and "Show less" buttons */}
      <div className="mywork-buttons">
        {visibleProjects < mywork_data.length && (
          <div className="mywork-showmore" onClick={handleShowMore}>
            <p>Show more</p>
            <img src={arrow_icon} alt="Show more" />
          </div>
        )}
        
        {visibleProjects > INITIAL_PROJECTS && (
          <div className="mywork-showless" onClick={handleShowLess}>
            <p>Show less</p>
            <img src={arrow_icon} alt="Show less" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
