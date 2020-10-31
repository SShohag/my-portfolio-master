import React from "react";
import creativeAgency from "../images/projects/creative.png"
import volunteerNetwork from "../images/projects/volunteer.png"
import travelGuru from "../images/projects/travel-guru.png"
import eSchool from "../images/projects/e-school.png"
import pandaCommerch from "../images/projects/panda.png"
import onlineCourse from "../images/projects/online-course.png"
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
    const [Header] = React.useState({
        mainHeader:"Projects",
        subHeader:"My Projects",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    });

    const [state] = React.useState([
        {
            id:1,
            img:creativeAgency,
            heading:"Creative Agency",
            text:"This is an online service basis single page web application. In this application Google login system is used for users to registered for take service. There is a users feedback feature is used for taking feedback from user",
            githubLink:"https://github.com/SShohag/creative-agency",
            websiteLink:"https://volunteer-webbing.web.app/"
        },
        {
            id:2,
            img:volunteerNetwork,
            heading:"Volunteer Network",
            text:"This is a volunteers feedback website. Where user can give their comment to comment box.They can add their chooses option and also they can delete their option by sign in with google account",
            githubLink:"https://github.com/SShohag/volunteer-network",
            websiteLink:"https://volunteer-webbing.web.app/"  
        },
        {
            id:3,
            img:travelGuru,
            heading:"Travel Guru",
            text:"This application is make for online hotel booking. In this application google map system is use to travel one place to another place. There is also add a feature to create user by react from",
            githubLink:"https://github.com/SShohag/bd-travel-guru",
            websiteLink:"https://bd-travel-guru.web.app/"  
        },
        {
            id:4,
            img:eSchool,
            heading:"E-School",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            githubLink:"https://github.com/SShohag/e-school",
            websiteLink:"https://sshohag.github.io/e-school/"  
        },
        {
            id:5,
            img:pandaCommerch,
            heading:"Panda Commerce",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            githubLink:"https://github.com/SShohag/panda-commerce",
            websiteLink:"https://sshohag.github.io/panda-commerce/",  
        },
        {
            id:6,
            img:onlineCourse,
            heading:"Online Class",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            githubLink:"https://github.com/SShohag/online-class",
            websiteLink:"https://awesome-payne-7e5a75.netlify.app/"  
        }
    ])

  return (
    <div className="projects" id="projects" >
      <div className="container">
        <div className="projects-header">
          <div className="common">
            <h1 className="heading">{Header.mainHeader}</h1>
            <h2 className="mainHeader">{Header.subHeader}</h2>
            <p className="content">{Header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row">

              {state.map(info=> (
                  <div className="col-4">
                  <div className="projects-box">
                    <img className="commonImage" src={info.img} alt="" />
                    <div className="projects-box-header">{info.heading}</div>
                    <div className="projects-box-p">
                      {info.text}
                    </div>
                    <div className="projects-box-btn">
                          <a href={info.githubLink} className="btn btn-outline link-btn">Github <FaGithub /> </a>
                          <a href={info.websiteLink} className="btn btn-outline link-btn">Live Link <FaLink /> </a>
                    </div>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
