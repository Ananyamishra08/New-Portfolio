import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/mostrecent resume_capgimini.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h2>Hi 👋 I'm </h2>
      <h1>
        <Typewriter
          words={[
            "Ananya Mishra",
            "A Final Year Engineering Student",
            // "a MERN Stack Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p>
        A MERN stack developer bringing ideas to life with smooth animations and
        smart AI integrations.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="btn btn-hire anchor-link"
            href="https://api.whatsapp.com/send?phone=8144093848"
            rel="noreferrer"
            target="_blank"
          >
            Contact Me
          </a>
        </div>
        <div className="hero-resume">
          <a
            className="link"
            href={resume}
            download="Ananya_Mishra_resume.pdf"
            target="_blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
