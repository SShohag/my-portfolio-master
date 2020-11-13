import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {

  //Emailjs linked emailjs.com 
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7rpjql4', e.target, "user_3jgQMThyCYmSu0EEbJaEd")
      .then((result) => {
          // console.log(result.text);
          alert("Your Message sent successfully")
      }, (error) => {
          // console.log(error.text);
          alert("Fill-up the from with valid information please")
      });
      e.target.reset()
  }
  
  return (
    

    <div className="container contactContainer">
      <div className="row contact">
      <form className="form" onSubmit={sendEmail}>
      <h1 className="contactHeading">Contact <span className="me" >Me</span> </h1>

      <input className="fromInput" type="text" placeholder="Enter Your Name" name="name" required/>
      <br/>

      <input className="fromInput" type="email" placeholder="Enter your Email" name="email" required/>
      <br/>

      <input className="fromInput" type="text" placeholder="Enter your Subject" name="subject" required/>
      <br/>

      <textarea className="fromInputMsg" type="text" placeholder="Type your message......" name="message" required/>
      <br/>

      <input className="submitBtn" type="submit" />
    </form>
      </div>
    </div>
    
  );
};

export default Contact;
