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

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleProjects).map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name} />
          </a>
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
