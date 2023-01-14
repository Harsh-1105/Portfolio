import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from '../../Resume.pdf'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import {motion, spring} from 'framer-motion'

const Services = () => {
  const transition  = {duration : 2, type: spring}
  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Skills</span>
            <span>Please Refer to the Resume for more details<br />
                 </span>
                 <a href={Resume} download>
                 <button className='button s-button'>Download Resume</button>

                 </a>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

        </div>
        <div className="cards">
            <motion.div 
            initial={{left:'25rem'}}
            whileInView={{left:'4rem'}}
            transition ={transition}
            style={{left:'19rem'}}>
            <Card emoji = {HeartEmoji}
            heading = {"Languages"}
            detail = {"C, C++, Java, Python"}
            />
            </motion.div>
            {/* second card */}
            <motion.div
            initial={{top:'4rem'}}
            whileInView={{top:'20rem'}}
            transition ={transition}
            style={{top:'12rem', left:'4rem'}}>
            <Card emoji = {HeartEmoji}
            heading = {"Intrests"}
            detail = {"Internet of Things, Machine Learning, Artificial Intelligence"}
            />
            </motion.div>
            <motion.div 
            initial={{top:'19rem',left:'22rem'}}
            whileInView={{top:'20rem',left:'30rem'}}
            transition ={transition}
            style={{top:'19rem',left:'22rem'}}>
            <Card emoji = {HeartEmoji}
            heading = {"Design"}
            detail = {"Ms-Word,Ms-Powerpoint,Ms-Excel"}
            />
            </motion.div>
            <motion.div 
            initial={{top:'7rem',left:'36rem'}}
            whileInView={{top:'-0.1rem',left:'30rem'}}
            transition ={transition}
            style={{top:'7rem',left:'36rem'}}>
            <Card emoji = {HeartEmoji}
            heading = {"Design"}
            detail = {"Figma, Sletch, PhotoShop, Adobe xd"}
            />
            </motion.div>
            <div className="blur s-blur" style={{background:"var(--purple)"}}></div>
            
        </div>
    </div>

  )
}

export default Services