import React from "react";
import { FaBlog } from "react-icons/fa";

const Blog = () => {
    const [Header] = React.useState({
        mainHeader:"Blogs",
        subHeader:"My Blogs",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    });
    const [state] = React.useState([
        {
            id:1,
            img:"",
            heading:"Creative Agency",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            blogLink:""
        },
        {
            id:2,
            img:"",
            heading:"Volunteer Network",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            blogLink:"" 
        },
        {
            id:3,
            img:"",
            heading:"Travel Guru",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            blogLink:"" 
        },
        {
            id:4,
            img:"",
            heading:"E-School",
            text:"This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters.",
            blogLink:"", 
        }
    ])
  return (
    <div className="blogs" id="blogs">
      <div className="container">
        <div className="blogs-header">
          <div className="common">
            <h1 className="heading">{Header.mainHeader}</h1>
            <h2 className="mainHeader">{Header.subHeader}</h2>
            <p className="content">{Header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row">
            {state.map((info) => (
              <div className="col-4">
                <div className="blogs-box">
                  <img className="commonImage" src={info.img} alt="" />
                  <div className="blogs-box-header">{info.heading}</div>
                  <div className="blogs-box-p">{info.text}</div>
                  <div className="blogs-box-btn">
                    <a
                      href={info.githubLink}
                      className="btn btn-outline link-btn"
                    >
                      Github <FaBlog />
                    </a>
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

export default Blog;
