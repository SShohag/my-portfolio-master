import React from "react";
import shohagImage from "../images/shohag1.png"
import resume from "../images/cv/Shohag-Junior front end-developer-Resume .pdf"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";

const Banner = () => {
    const [state] = React.useState({
        title:'I am Md. Shohag Babu',
        text:'I am a junior Font End Web Developer',
        img:shohagImage
    });
  return (
    <header className="header">
      <div className="container" id="home">
        <div className="row">
          <div className="col-6">
            <div className="header-content">
                <div className="header-section">
                    <ul className="header-ul">
                        <li>
                            <a target="_blank|_self|_parent|_top|" style={{color:'white'}} href="https://www.linkedin.com/in/md-shohag-babu-2255a61b1/"><FaLinkedinIn /></a>
                        </li>
                        <li>
                            <a target="_blank|_self|_parent|_top|" style={{color:'white'}} href="https://github.com/SShohag"><FaGithub /></a>
                        </li>
                        <li>
                            <a target="_blank|_self|_parent|_top|" style={{color:'white'}} href="https://www.facebook.com/shohag.symon.5"><FaFacebookF /></a>
                        </li>
                    </ul>
                    <h1 className="myGreeting">Hello this is <br/> <span className="myName" >Shohag</span> </h1>
                    <p>{state.text}</p>
                    <div className="header-btn">
                        <a target="_blank|_self|_parent|_top|" href={resume} className="btn btn-outline" >My Resume <FaFileDownload/> </a>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-6">
              <div className="banner-img">
                  <img src={state.img} alt=""/>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
