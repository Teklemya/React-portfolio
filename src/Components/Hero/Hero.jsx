import { useState, useEffect } from 'react';
import "./Hero.css";
import profile_img from "/src/assets/izak_profile1.jpg";
import resume from "/src/assets/resume.pdf";
import Social from "/src/Components/Social/Social.jsx";

import { getTranslation } from '/src/Js/Translation.js'; // Import the translation function

const Hero = () => {
  const [translatedName, setTranslatedName] = useState('');

  useEffect(() => {
    const fetchTranslations = async () => {
      const name = 'Isaac'; // English name
      const targetLang = 'Arabic'; // Target language for translation

      // Fetch translation using Gemini
      const arabicTranslation = await getTranslation(name, targetLang);
      setTranslatedName(arabicTranslation);
    };

    fetchTranslations();
  }, []);

  return (
    <div className="hero">
      <div className="hero-social-left">
        <Social />
      </div>
      <div className="hero-content">
        <img src={profile_img} alt="Profile" />
        <h1>
          <span>{translatedName && 'إسحاق'} here,</span> frontend developer based in Cincinnati, Ohio. {/*make sure to change && to || in the condition */} 
        </h1> 
        <p>
          I specialize in creating interactive expriences for the web. I have 3
          years of experience in multiple companies like UCHealth, LDDL and OrangeIsBetter.
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
