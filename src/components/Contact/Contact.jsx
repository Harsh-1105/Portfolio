import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
        const form = useRef();

        const [done, setDone] = useState(false);
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_lv15ewo', 'template_1ky2epa', form.current, 'FzvHDEJ-aiFXfNLSL')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
  return (
    <div className="contact-form" id="Contact">
        <div className="w-left">
            <div className="awesome" >
            <span id='c103'>Get In Touch</span>
            <span id='c103'>Contact Me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

            
            </div>
        </div>
        <div className="c-right">

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className='user' placeholder='Name' required/>
        <input type="email" name='user_email' className='user' placeholder='Email' required/>
        <textarea name="message" className='user' placeholder='Message' required></textarea>            
        <input type="submit" value="Send" className='button'/>
        <span>{done && "Thanks for Contacting Me"}</span>
        <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
        </form>
        
        </div>

    </div>



    )
}

export default Contact