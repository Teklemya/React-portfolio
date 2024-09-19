/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import "./Hero.css";
import profile_img from "/src/assets/izak_profile1.jpg";
import resume from "/src/assets/resume.pdf";
import Switch from '/src/Components/Switch/Switch.jsx';
import DarkMode from '/src/Components/DarkMode/DarkMode.jsx';
import Social from "/src/Components/Social/Social.jsx";
import { getTranslation } from '/src/Js/Translation.js'; // Import the translation function
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  const [translatedName, setTranslatedName] = useState('Isaac'); // Start with English name
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
 

  useEffect(() => {
     const languages = ['English', 'Arabic', 'Japanese']; // List of languages to translate to
     
     const fetchTranslations = async () => {
      const name = 'Isaac'; // English name
      const targetLang = languages[currentLangIndex]; // Get current target language

      // Fetch translation using Gemini
      const translatedText = await getTranslation(name, targetLang);
      setTranslatedName(translatedText);
    };

    fetchTranslations();

    const intervalId = setInterval(() => {
      setCurrentLangIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 9000); // Switch languages every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentLangIndex, setTranslatedName]); 

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  useEffect(() => {
    // Ensure that document.body and its classList exist
    if (document && document.body && document.body.classList) {
      if (isLightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  }, [isLightMode]);

  return (
    <div id='home' className="hero">
      
      <div className="hero-content">
      <div className="light-dark">
        {/* <button onClick={toggleLightMode}>
        {isLightMode ? <FontAwesomeIcon className="moon" icon={faMoon} />: <FontAwesomeIcon className="sun" icon={faSun} />}
        </button> */}
      </div> 
         {/* <DarkMode /> */}
      {/* <Switch />  */}
        <img src={profile_img} alt="Profile" />
        <h1>
          <span>{translatedName} here,</span> Full stack developer based in the US. {/*make sure to change && to || in the condition */} 
        </h1> 
        <p>
          I specialize in creating interactive expriences for the web. I have 2
          years of experience in multiple companies like UCHealth, LDDL and OrangeIsBetter.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <a href="#contact">Connect with me</a></div>
          <div className="hero-resume">
            <a href={resume} download>
              My resume
            </a>
          </div>
        </div>
      </div>
      <div className="hero-social-right">
        <Social />
      </div>
    </div>
  );
};

export default Hero;
