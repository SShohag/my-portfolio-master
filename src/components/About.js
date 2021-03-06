import React from "react";
import aboutImg from "../images/aboutme.png"

const About = () => {
  const [Header] = React.useState({
    subHeader: "About Me",
    text:
      "I am a junior Font-End Developer. I have serious passion for UI Effects and Animation",
  });
  return (
    <div className="about" id="about" >
      <div className="container">
        <div className="common">
          <h2 className="mainHeader">{Header.subHeader}</h2>
          <p className="content">{Header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
            <div className="col-6">
                <div className="about-img">
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
            <div className="col-6">
                <div className="about-info">
                    <h1>Hi There</h1>
                    <div className="about-info-p1">
                        My self Md Shohag Babu. I am a junior font-end developer. I am passionate to work with React, firebase, javascript and Html5. I am familiar to work with Redux, Rjx, scss, MongoDB. I like to coding and my dream is make my self as a professional web developer.
                    </div>
                    <div className="about-info-p2">
                        I like to work with vs code, chrome dev tool, Git and Postman tools.
                    </div>
                    <div className="info-context">
                        <div className="row">
                            <div className="col-6">
                                <strong>Name</strong>
                                <p>Md Shohag Babu</p>
                            </div>
                            <div className="col-6">
                                <strong>Github</strong>
                                <p> <a className="aboutBtn" target="_blank|_self|_parent|_top|" href="https://github.com/SShohag">Github</a> </p>
                            </div>
                            <div className="col-6">
                                <strong>Phone</strong>
                                <p>+8801767876561</p>
                            </div>
                            <div className="col-6">
                                <strong>LinkedIn</strong>
                                <p> <a className="aboutBtn" target="_blank|_self|_parent|_top|" href="https://www.linkedin.com/in/md-shohag-babu-2255a61b1/">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
