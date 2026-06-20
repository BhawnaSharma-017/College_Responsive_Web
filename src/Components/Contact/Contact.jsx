import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7042d3a2-9e07-4a6a-a5c0-7f10fdd2c883");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }; 

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through our contact form or use the contact
          information provided below. We are here to answer your questions and
          assist you with any inquiries. Have questions about admissions,
          programs, or campus life? Get in touch with us today, and our team
          will be happy to help.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@mdn.in</li>
            <li><img src={phone_icon} alt="" />+1 454-21-34</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, London<br /> MA 02139, United Kingdom</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}> 
            <label>Your name</label>
            <input type="text" name='name' placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter your mobile number" required/>
            <label>Write your messages here</label>
            <textarea name="message"rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
