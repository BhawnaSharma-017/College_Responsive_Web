import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=> {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with programs designed
          to inspire innovation, creativity, and lifelong learning. Gain the
          knowledge, practical skills, and confidence needed to excel in your
          career and make a meaningful impact.
        </p>
        <p>
          Build a strong foundation for future success with industry-relevant
          programs and modern teaching approaches.Unlock your potential through
          an engaging learning environment that nurtures leadership, growth, and
          achievement.
        </p>
        <p>
          Learn in a dynamic environment that encourages academic excellence,
          critical thinking, and personal development. Explore diverse fields of
          study while developing the expertise and confidence needed to achieve
          your goals.
        </p>
      </div>
    </div>
  );
};

export default About;
