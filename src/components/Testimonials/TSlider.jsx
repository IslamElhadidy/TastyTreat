
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from '../../assets/images/ava-1.jpg'
import avatar2 from '../../assets/images/ava-2.jpg'
import avatar3 from '../../assets/images/ava-3.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './style.css'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function TSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider-box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis eveniet tempora error tempore debitis obcaecati deleniti nihil. Rem, qui dignissimos repudiandae doloremque quos quo, cupiditate eum modi quae atque ab?</p>

                <h6>Eslam Elhadidy</h6>
                <img src={avatar1} alt="" />
                <span>i,,Z</span>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis eveniet tempora error tempore debitis obcaecati deleniti nihil. Rem, qui dignissimos repudiandae doloremque quos quo, cupiditate eum modi quae atque ab?</p>

                <h6>John Deo</h6>
                <img src={avatar2} alt="" />
                <span>ii,,Z</span>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis eveniet tempora error tempore debitis obcaecati deleniti nihil. Rem, qui dignissimos repudiandae doloremque quos quo, cupiditate eum modi quae atque ab?</p>

                <h6>John Deo</h6>
                <img src={avatar3} alt="" />
                <span>iii,,Z</span>
            </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
