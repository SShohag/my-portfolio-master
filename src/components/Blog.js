import React from "react";
import jsQustion from "../images/blogsPhoto/jsquestion.jpeg"
import reactWork from "../images/blogsPhoto/react.jpg"
import important from "../images/blogsPhoto/ImTopic.jpeg"
import coreConcept from "../images/blogsPhoto/coreConcept.jpg"
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
            img:jsQustion,
            heading:"Javascript Question",
            text:"This blog is a important javascript interview question blog. Here discus about common and important javascript moc interview questions. It going to help in interview",
            blogLink:"https://shohag7m.medium.com/javascript-interview-question-1a7b951c980e"
        },
        {
            id:2,
            img:reactWork,
            heading:"React work",
            text:"In this blog talking about how React work, How to install react and what are the main components of React, also describe about React hooks and also react redux",
            blogLink:"https://shohag7m.medium.com/how-to-react-work-c073dd6c0169" 
        },
        {
            id:3,
            img:important,
            heading:"Important Topics",
            text:"I hope this is the best blog for junior developer. In this blog I am trying to describe about some most important topic as a junior developer it should help them",
            blogLink:"https://shohag7m.medium.com/helpful-topic-for-junior-developer-3e05acd8e291" 
        },
        {
            id:4,
            img:coreConcept,
            heading:"JS Core Concept",
            text:"Here I describe about some core concept about javascript as a javascript programmer this should be red cause it's going to help the javascript learner.",
            blogLink:"https://shohag7m.medium.com/revisit-some-core-concept-of-javascript-c032ee80b803", 
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
                    <a target="_blank|_self|_parent|_top|"
                      href={info.blogLink}
                      className="blogBtn"
                    >
                      Blog <FaBlog />
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
