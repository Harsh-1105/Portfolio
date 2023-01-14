import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll'

import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.jfif'
import Facebook from '../../img/Facebook.png'
import LinkedIn from '../../img/linkedin.png'
import Vector2 from '../../img/3d.png'
import Boy from '../../img/boy-removebg-preview.png'
import thumbsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import {motion} from 'framer-motion';
const Intro = () => {

    const transition  = {duration : 3, type:'spring'}
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I'm </span>
                <span>Harsh Kumar Sharma</span>
                <span>Full Stack Web-Developer </span>
            </div>
            <button className="button n-button">
<Link spy={true} smooth={true} to="Contact">
                    Hire Me
</Link>
</button>
            <div className="i-icons">
            <a href="https://github.com/Harsh-1105"><img id='img1' src={Github} alt="" />
</a>
            <a href="https://www.facebook.com/HKSPURI"><img id='img1' src={Facebook} alt="" />
</a>
            <a href="https://www.linkedin.com/in/harshks11/"><img id='img1' src={LinkedIn} alt="" />
</a>
            </div>

        </div>
        <div className="i-right">
        <img id='c01' src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img id='c01'
        initial ={{left:'-36%'}}
        whileInView={{left:'-1%'}}
        transition ={transition}
        src={glassesimoji} alt="" />
        <motion.div id='c01'
        initial ={{top:'-4%', left:'79%'}}
        whileInView={{left:'68%'}}
        transition ={transition}
        style={{top:'1%',left:'72%'} }>
        <FloatingDiv image={Crown} txt1='Problem' txt2='Solver'/>
        </motion.div>
        <motion.div id='c01'
        initial ={{left:'-36%'}}
        whileInView={{left:'12%'}}
        transition ={transition}
        style={{top:'62%',left:'-6%'} }>
            <FloatingDiv image={thumbsup} txt1='HardWorking Enthusiast'/>
        </motion.div>
        {/* Blur div */}
        <div className='blur' style={{background:"rgb(238 210 255)"}}>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}>       </div>
        </div>
        </div>
    </div>
  )
}

export default Intro