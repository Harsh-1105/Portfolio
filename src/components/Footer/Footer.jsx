import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linked from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className="footer" >
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span id='c104'>harshks590@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/Harsh-1105"><Github color='white' size='3rem'/>
</a>
            <a href="https://www.facebook.com/HKSPURI"><Facebook color='white' size='3rem'/>
</a>
            <a href="https://www.linkedin.com/in/harshks11/"><Linked color='white' size='3rem'/>
</a>
            </div>

        </div>
    </div>
  )
}

export default Footer