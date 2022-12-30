import React from "react";
import "../styles/Contact.css";

const Contact = (props) => {
  return (
    <div className="contact-card">
      <img src={props.img} alt="contact card"/>
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="phone"/>
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="https://cdn-icons.flaticon.com/png/128/2099/premium/2099199.png?token=exp=1656485607~hmac=38ef0d77c6b6aac7652bd4835960fcd4" alt="email"/>
        <p>"{props.email}"</p>
      </div>
    </div>
  );
};

export default Contact;
