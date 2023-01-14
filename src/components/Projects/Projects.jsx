import React from 'react'
import './Projects.css'
import Proj1 from '../../img/e-comm.jpg'
const Projects = () => {
  return (
    <div className="project">
      <div className='p-left'>
      <span>My Awesome</span>
      <span>Projects</span>
      </div>
      <div className="p-right">
      <div className='proj1'>
      <div class="image-text">E-Commerce Website</div>

        <span>Project 1</span>
      <img src={Proj1} alt="" />
      </div>
      <div className='proj1' style={{left:'11.7rem', top:'6.8rem'}}>
      <div class="image-text">E-Commerce Website</div>

        <span>Project 2</span>
      <img src={Proj1} alt="" />
      </div>
      <div className='proj1'style={{left:'24rem', top:'-26.6rem'}}>
      <div class="image-text">E-Commerce Website</div>

        <span>Project 3</span>
      <img src={Proj1} alt="" />
      </div>
      <div className='proj1' style={{left:'36.7rem', top:'-20rem'}}>
      <div class="image-text">E-Commerce Website</div>

        <span>Project 4</span>
      <img src={Proj1} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Projects