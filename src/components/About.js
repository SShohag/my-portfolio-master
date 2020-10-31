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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, exercitationem temporibus! Eligendi neque eveniet saepe voluptate itaque fugiat ad nobis iure porro mollitia, dicta sint voluptatem tenetur obcaecati, explicabo beatae.
                    </div>
                    <div className="about-info-p2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse expedita nostrum ullam quia nam facilis!
                    </div>
                    <div className="info-context">
                        <div className="row">
                            <div className="col-6">
                                <strong>Name</strong>
                                <p>Md Shohag Babu</p>
                            </div>
                            <div className="col-6">
                                <strong>Github</strong>
                                <p> <a href="https://github.com/SShohag">Github</a> </p>
                            </div>
                            <div className="col-6">
                                <strong>Phone</strong>
                                <p>+8801767876561</p>
                            </div>
                            <div className="col-6">
                                <strong>LinkedIn</strong>
                                <p> <a href="https://www.linkedin.com/in/md-shohag-babu-2255a61b1/">LinkedIn</a></p>
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
