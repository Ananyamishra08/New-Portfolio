import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import profile_img from "../../assets/photoofme.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1 className="h1">About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_pic" className="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I'm Ananya Mishra, a final-year Electronics and
              Telecommunication Engineering student at IIIT Bhubaneswar. I
              recently interned at NALCO, Angul, where I enhanced my ReactJS
              skills and worked on a guest house booking system using Static
              JSON, a lightweight NoSQL database for Jamstack applications.
            </p>
            <p>
              I'm currently exploring Full Stack Development, focusing on the
              MERN stack,GenAI, GSAP animations, and AI-driven solutions. I’ve built
              React applications using APIs and enjoy creating dynamic user experiences.
              {/* Additionally, my academic project, Video Anomaly
              Surveillance Detection, focuses on utilizing deep Multiple
              Instance Learning (MIL) ranking loss with an LAV filter for
              accurate anomaly detection in segmented video data. */}
            </p>
            <p>Always eager to learn, innovate, and collaborate 🚀.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <a
            className="link"
            href="https://www.codechef.com/users/ananya_annie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>CODECHEF</h1>
          </a>

          <p>CODING QUESTIONS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <a
            className="link"
            href="https://www.linkedin.com/in/ananya-mishra-5b45591b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>LINKEDIN</h1>
          </a>
          <p>CONNECT WITH ME</p>
        </div>
        <hr />
        <div className="about-achievement">
          <a
            className="link"
            href="https://github.com/Ananyamishra08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>GITHUB</h1>
          </a>
          <p>RECENT WORKS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
