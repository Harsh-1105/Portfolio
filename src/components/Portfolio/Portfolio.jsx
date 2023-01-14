import React from 'react'
import './Portfolio.css'
import password from '../../img/password.png'
import cal from '../../img/calculator.jpg'
import movie from '../../img/movie.png'
import HackosDine from '../../img/Hackos Dine-logos_black.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import Ecommerce from "../../img/ecommerce.jpg"
import 'swiper/css'
const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
        <span id='c102'>Recent Projects</span>
        <span id='c103'>Portfolio</span>

        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor='true'
        className='portfolio-slider'

        >
            <SwiperSlide>
                <a href="harsh-1105.github.io/e-commerce-website/"><img src={Ecommerce} alt="" />
</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://harsh-1105.github.io/Hackos-Dine-/"><img src={HackosDine} alt="" />
</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://harsh-1105.github.io/PassWord-Generator/"><img src={password} alt="" />
</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="harsh-1105.github.io/e-commerce-website/"><img src={cal} alt="" />
</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/saumyatiwari13/react_project_bingehub"><img src={movie} alt="" />
</a>
            </SwiperSlide>
            
        </Swiper>
    </div>
    )
}

export default Portfolio