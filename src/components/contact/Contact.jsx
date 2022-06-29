import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_838hi5d",
        "template_j0i2pzt",
        formRef.current,
        "user_kq77pFjwBeQXVzaec4YdY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss</h1>
          <div className='c-info'>
            <div
              className='c-info-item'
              style={{ color: darkMode && "#ffffff" }}>
              <img src={Phone} alt='' className='c-icon' />
              07864876315
            </div>
            <div
              className='c-info-item'
              style={{ color: darkMode && "#ffffff" }}>
              <img className='c-icon' src={Email} alt='' />
              abdulmuizmustapha4@gmail.com
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            Get in touch. Always available for a future employer
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ffffff",
              }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ffffff",
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ffffff",
              }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ffffff",
              }}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
