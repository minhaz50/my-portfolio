import React from "react";
import "./about.css";
import profile_picture from "../../assets/img.png";
// import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                {" "}
                National Institute Of Technology, Tiruchirappalli, India
                (B.Tech)
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                8+ Completed
                <br />
                and Counting
              </small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Complete Web Development Course With Jhankar Mahbub</small>
            </article> */}
          </div>
          <p>
            Hello there! 👋 I'm Md Minhaz Uddin, a creative and detail-oriented
            fullstack developer. With a strong background in HTML, CSS,
            JavaScript, ReactJs familiarity with back-end technologies such as
            NodeJS, ExpressJS, MongoDB. I specialize in translating design
            concepts into interactive and responsive websites and web
            applications.
          </p>
          {/* <p>
            Enthusiastic FullStack Developer with a strong focus on backend
            development using Node.js, Express.js, and database management
            (SQL/NoSQL). Eager to apply problem-solving abilities and backend
            expertise to build scalable, efficient applications while growing as
            a Software Engineer.
          </p> */}
          <p>
            I'm always open to new opportunities, collaborations, and
            challenges.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
