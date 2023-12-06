import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Tns1 from "../../img/tns1.png";
import TataStrive from "../../img/tataStrive.png";
import GoogleData from "../../img/googleDataAnalytics.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
     const clients=[
        {
            img: Tns1,
            review:
              "TNS India Foundation envisages India to develop into a country with highly skilled workforce, inclusive and thriving communities."
          },
          {
            img: TataStrive,
            review:
              " Tata STRIVE is an initiative by the Tata Group focused on skill development and vocational training. It aims to enhance employability."
          },
          {
            img: GoogleData,
            review:
              "The Google Data Analytics Professional Certificate is designed to teach individuals the foundational skills needed for a career in data analytics." 
          },
          /*{
            img: profilePic4,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },*/
    ]



  return (
    <div className="t-wrapper" id="Training">
      <div className="t-heading">
      <span> Successfully completed </span>
      <span> comprehensive training and courses </span>
      <span>...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
            <Swiper 
            /*modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}*/
            >
            {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
                    })}
            </Swiper>
    </div>
  )
}

export default Testimonial
