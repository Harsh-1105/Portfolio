import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">HKS</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} smooth={true} to='Navbar'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Services'>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Portfolio">
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} smooth={true} to="t-heading">
                    <li>Testimonial</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Contact">
                    <li>Contact</li>
                    </Link>
                    
                </ul>
            </div>
<button className="button n-button">
<Link spy={true} smooth={true} to="Contact">
                    Contact Us
</Link>
</button>
        </div>
    </div>
  )
}

export default Navbar