import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import Sidebar from "../../img/portfolio.png";
import Ecommerce from "../../img/portfolio.png";
import HOC from "../../img/portfolio.png";
import MusicApp from "../../img/portfolio.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Portfolio = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
      <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >

        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Portfolio
